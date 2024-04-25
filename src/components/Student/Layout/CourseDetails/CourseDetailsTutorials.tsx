import { useContext } from "react";
import { TbCube } from "react-icons/tb"
import { useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../../../store/auth-context";
import Button from "../../../UI/Button";

interface ModuleDetailsProps {
  title: string;
  _id: string;
}

const CourseDetailsTutorials = ({ moduleDetails }: { moduleDetails: ModuleDetailsProps[], moduleError: string | null }) => {
  const navigate = useNavigate();
  const { classID } = useParams();
  const authCtx = useContext(AuthContext);
  const isAdmin = authCtx?.isAdmin;

  return (
    <div className='flex flex-col mx-0 min-w-[300px] sm:max-w-full lg:max-w-[637px]'>
      <ul className="flex flex-col gap-6 mt-7">
        {!moduleDetails && (
          <p className="italic">"No Tutorial Available yet!"</p>
        )}

        {moduleDetails?.map((tutorial, index) => (
          <Button
            key={index}
            variant="dotted"
            onClick={() => navigate(`/class/${classID}/${isAdmin ? "getModule" : "getTutorial"}/${tutorial?._id}`)}>
            <TbCube className="h-4 w-4" />
            <span className="font-bold">Tutorial {index + 1}: </span>
            <div className={`font-medium hidden sm:block `}>
              {tutorial?.title.slice(0, 70) + (tutorial?.title.length > 70 ? "..." : "")}
            </div>
          </Button>
        ))}
      </ul>
    </div>
  )
}

export default CourseDetailsTutorials;