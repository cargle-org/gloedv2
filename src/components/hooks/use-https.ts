import { useReducer, useCallback } from "react";

// Define the state type
interface HttpState {
  status: "pending" | "completed" | null;
  data: any | null;
  error: string | null;
}

// Define the action type
type HttpAction =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: any }
  | { type: "ERROR"; errorMessage: string };

const httpReducer = (state: HttpState, action: HttpAction): HttpState => {
  if (action.type === "SEND") {
    return {
      data: null,
      error: null,
      status: "pending",
    };
  }

  if (action.type === "SUCCESS") {
    return {
      data: action.responseData,
      error: null,
      status: "completed",
    };
  }

  if (action.type === "ERROR") {
    return {
      data: null,
      error: action.errorMessage,
      status: "completed",
    };
  }
  return state;
};

function useHttp<
  TRequestData extends string | object | undefined,
  TResponseData
>(
  requestFunction: (
    requestData?: TRequestData,
    id?: string | undefined
  ) => Promise<TResponseData>,
  startWithPending = false
): {
  sendRequest: (
    requestData?: TRequestData,
    id?: string | undefined
  ) => Promise<void>;
} & HttpState {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async function (requestData?: TRequestData, id?: string | undefined) {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData, id);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error: any) {
        // Use 'unknown' type for caught error
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
}

export default useHttp;
