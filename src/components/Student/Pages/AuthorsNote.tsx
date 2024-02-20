import { Link } from 'react-router-dom'
import avatar from '../../../assets/svgs/tutoravatar.svg'

const AuthorsNote = () => {
  return (
    <div className="flex flex-col container sm:px-6 mb-72 h-screen mx-auto max-w-[310px] sm:max-w-full md:max-w-[600px] lg:max-w-[626px] ">
      <div className='flex justify-start items-centter gap-4 my-5'>
        <span className='flex justify-center items-start sm:mr-2.5'>
          <img src={avatar} alt='Course Tutor image' className='flex justify-start w-28 sm:w-[150px] ' />
        </span>
        <div className='flex justify-center items-start flex-col gap-3 sm:gap-[15px]'>
          <span className='flex font-Inter font-bold text-xl sm:text-2xl md:text-4xl text-black leading-normal'>
            Chioma Adeleye
          </span>
          <span className='inline-flex font-Inter font-medium text-base md:text-xl text-[#2b2b2bde] leading-4'>
            Senior Data analyst at Twitter
          </span>
        </div>
      </div>
      <p className="text-justify text-lg sm:text-xl font-Inter leading-[33px] mb-6">
        Microservices are one of the most important software architecture trends, but it’s one thing to define an architecture and quite another to implement it. In this course i tried to focus on the nitty-gritty details of real-world implementation. You’ll learn recipes for tech stacks that can be used to implement microservices, as well as the pros and cons of each.
      </p>
      <p className="text-justify text-lg sm:text-xl font-Inter leading-[33px] mb-6">
        You’ll start by exploring some fundamental concepts for implementing microservices. Within each concept, you’ll learn about the different technologies used to implement it. The technologies include: Frontend Integration with Edge Side Includes (ESI), asynchronous microservices with Kafka and REST feeds, synchronous microservices with the Netflix stack and Consul, Docker, Kubernetes, Cloud Foundry.
      </p>
      <p className="text-justify text-lg sm:text-xl font-Inter leading-[33px] mb-6">
        Each technology you learn about is described and then demonstrated with real code. By the end of this course, you’ll be a microservice pro. Whether you’re a software engineer or an engineering manager, this course will prove useful throughout your career.
      </p>

      <Link to="/course-details" className="flex justify-center items-center mt-6">
        <div className="flex items-center justify-center w-[632px] h-[46px] text-white text-[13px] md:text-sm bg-[#000] font-medium rounded-[5px] leading-6 tracking-[-0.2px]">
          Thank you for buying my course!
        </div>
      </Link>
    </div>
  )
}

export default AuthorsNote