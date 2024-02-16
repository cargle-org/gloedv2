import { useReducer } from "react";

interface InputState {
  value: string;
  isInput: boolean;
}

interface InputAction {
  type: "INPUT" | "BLUR" | "RESET";
  value?: string;
}

const initialState: InputState = {
  value: "",
  isInput: false,
};

const inputStateReducer = (state: InputState, action: InputAction): InputState => {
  switch (action.type) {
    case "INPUT":
      return {
        value: action.value ?? state.value,
        isInput: state.isInput,
      };
    case "BLUR":
      return {
        value: state.value,
        isInput: true,
      };
    case "RESET":
      return {
        value: "",
        isInput: false,
      };
    default:
      return initialState;
  }
};

const useInput = (validateValue: (value: string) => boolean) => {
  const [inputState, dispatchInput] = useReducer(inputStateReducer, initialState);

  const inputIsValid = validateValue(inputState.value);
  const hasError = !inputIsValid && inputState.isInput;

  const valueChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatchInput({ type: "INPUT", value: event.target.value });
  };

  const blurInputHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    dispatchInput({ type: "BLUR", value: e.target.value });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    hasError,
    reset,
    isValid: inputIsValid,
    valueChangeHandler,
    blurInputHandler,
  };
};

export default useInput;
