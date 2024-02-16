import Button from "../../UI/Button"

const AdminCourseOptionsButton = () => {
  return (
    <section role="group" className="inline-flex flex-wrap justify-center items-center xl:justify-start gap-3 md:gap-4 lg:gap-5 2xl:gap-4 mt-12 md:mt-14 lg:mt-18 xl:mt-12 2xl:mt-20 3xl:mt-[75px] mb-8">
      <Button variant="options" className="bg-primary hover:bg-primary-light">
        All classes
      </Button>
      <Button variant="options" className="bg-black hover:bg-[#101828]">
        Upcoming
      </Button>
      <Button variant="options" className="bg-black">
        Ongoing
      </Button>
      <Button variant="options" className="bg-black">
        Archived
      </Button>
    </section>
  )
}

export default AdminCourseOptionsButton