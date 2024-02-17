import Button from "../../../UI/Button"

const CourseOptionsButton = () => {
  return (
    <section className="inline-flex h-8 flex-wrap justify-center md:justify-start items-center gap-2 md:gap-4 mt-14 lg:mt-16 xl:mt-12 2xl:mt-20 3xl:mt-[75px] mb-20 md:mb-8">
      <Button variant="options" className="bg-primary hover:bg-primary-light [167px]">
        Trending courses
      </Button>
      <Button variant="options" className="bg-black hover:bg-[#101828] w-[111px]">
        Upcoming
      </Button>
      <Button variant="options" className="bg-black w-[98px]">
        Ongoing
      </Button>
      <Button variant="options" className="bg-black w-[118px]">
        Completed
      </Button>
    </section>
  )
}

export default CourseOptionsButton