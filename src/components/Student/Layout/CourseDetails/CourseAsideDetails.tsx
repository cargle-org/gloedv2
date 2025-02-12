import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { TbCube } from "react-icons/tb";
import coursedetailsimg from "../../../../assets/images/courseimg.png";
import avatar from "../../../../assets/svgs/tutoravatar.svg";
import Button from "../../../UI/Button";
import useHttp from "../../../hooks/use-https";
import { getOneClassRequest } from "../../../../utils/class-fetch";
import LoadingSpinner from "../../../UI/LoadingSpinner";

const CourseAsideDetails: React.FC<{ hasPaid: boolean }> = ({ hasPaid }) => {
  const { classID } = useParams();

  const {
    sendRequest,
    status,
    data: classDetails,
  } = useHttp(getOneClassRequest);

  useEffect(() => {
    sendRequest(classID);
  }, []);

  //render loading indicator
  let authState;

  if (status === "pending") {
    authState = <LoadingSpinner />;
  }

  return (
    <aside className="flex items-center justify-center flex-col mb-16 xl:mb-0 mt-14 xl:-mt-4 mx-auto xl:mr-5 2xl:mr-auto xl:justify-normal w-[290px] xl:w-[332px]">
      {/* ***UI state*** */}
      {authState}

      <div className="md:inline-flex flex-row-reverse sm:flex-col md:flex-row xl:flex-col md:gap-6 lg:gap-8 xl:gap-0 ">
        <div className="flex flex-col gap-10 xl:gap-2.5">
          <div
            className={`flex container mx-auto justify-center items-center ${
              !hasPaid ? " xl:mb-6" : "xl:mb-20"
            } md:w-[250px] lg:w-[276px]`}
          >
            <img src={coursedetailsimg} alt="course details image" />
          </div>
          <div className="flex flex-col justify-center items-center gap-5">
            <Button
              variant="details"
              className="bg-black h-11 w-[290px] sm:w-[280px] lg:w-[325px]"
            >
              {!hasPaid ? "Continue learning" : "Get started (₦0)"}
            </Button>
            <Button
              variant="details"
              className="bg-primary h-10 w-[290px] sm:w-[280px] lg:w-[325px]"
            >
              {!hasPaid ? "View course project" : "Save for later"}
            </Button>
          </div>
        </div>

        <div className="flex justify-center items-center flex-col">
          <div className="flex flex-col h-auto px-5 pb-7 mt-12 md:mt-0 xl:mt-12 w-[290px] lg:w-[325px] border border-[#1e1e1e59] bg-white rounded-[10px] shadow-2xl shadow-[#1e1e1e59]">
            <div className="text-[#000000e8] font-Inter font-semibold text-sm leading-normal pt-8">
              Course Creator
            </div>
            <div className="font-Inter font-medium text-[10px] text-[#000000a8]">
              This course is been taken by
            </div>
            <div className="flex my-5">
              <span className="mr-2.5">
                <img src={avatar} alt="Course Tutor image" />
              </span>
              <div className="flex flex-col gap-1.5">
                <span className="flex font-Inter font-bold text-sm text-black leading-normal">
                  {classDetails?.authorFullName}
                </span>
                <span className="inline-flex font-Inter font-medium text-[11px] text-[#2b2b2bde] leading-4">
                  {classDetails?.authorCurrentJob}
                </span>
              </div>
            </div>
            <Button
              variant="details"
              className="bg-primary h-11 md:w-[245px] lg:w-[285px]"
            >
              <Link to={`/author-profile/${classID}`}>
                Check author profile
              </Link>
            </Button>
          </div>

          {!hasPaid && (
            <div className="flex justify-start flex-col h-full gap-3.5 p-5 pb-7 mt-5 w-[290px] lg:w-[332px] text-base font-Inter font-bold bg-white drop-shadow-xl rounded-md leading-[18px]">
              <Link
                to="/course-requirements"
                className="flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0 "
              >
                <TbCube className="h-4 w-4" />
                View course requirements
              </Link>
              <Link
                to="/authors-note"
                className="flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0"
              >
                <TbCube className="h-4 w-4" />
                View author’s note to you
              </Link>
              <Link
                to="https://join.slack.com/t/gloedworkspace/shared_invite/zt-yvcwllf9-7Hab2o2DCJl7iifv78lvQ"
                className="flex items-center gap-3.5 h-[38px] w-[245px] transform transition hover:underline hover:underline-offset-4 hover:text-primary hover:-translate-y-0.5 focus:outline-none focus:ring focus:ring-offset-0"
              >
                <TbCube className="h-4 w-4" />
                Join the course community
              </Link>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
};

export default CourseAsideDetails;
