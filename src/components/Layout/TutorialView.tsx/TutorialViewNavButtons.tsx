import { LiaCubeSolid } from "react-icons/lia";
import Button from "../../UI/Button";

const TutorialViewNavButtons: React.FC = () => {
  return (
    <div className="inline-flex justify-center xl:justify-normal gap-2.5 md:gap-[7px] lg:gap-3.5 text-xs mb-8 font-Inter flex-wrap">
      <Button variant="dotted">
        <LiaCubeSolid className="h-4 w-4" />
        Ask a question in the community
      </Button>
      <Button variant="dotted">
        <LiaCubeSolid className="h-4 w-4" />
        Report a problem
      </Button>
      <Button variant="dotted">
        <LiaCubeSolid className="h-4 w-4" />
        View the author’s notes
      </Button>
      <Button variant="dotted">
        <LiaCubeSolid className="h-4 w-4" />
        View requirements
      </Button>
    </div>
  )
}

export default TutorialViewNavButtons