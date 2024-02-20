import { Link } from 'react-router-dom'
import avatar from '../../../assets/svgs/tutoravatar.svg'

const AuthorsProfile = () => {
  return (
    <div className="flex flex-col container h-screen sm:px-6 mb-72 mx-auto max-w-[310px] sm:max-w-full md:max-w-[600px] lg:max-w-[626px] ">
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
        Chioma Adeleye has 15+ years of experience as an architect and consultant - often on the intersection of business and technology. She is a Senior Software Developer at Twitter and an international Speaker. As a speaker, she has given talks at international conferences and as an author, she has written more than 100 articles and books e.g. about Microservices and Continuous Delivery. Her technological focus is on modern architectures – often involving Cloud, Continuous Delivery, DevOps, or Microservices.
      </p>

      <Link to="/course-details" className="flex justify-center items-center mt-6">
        <div className="flex items-center justify-center w-[632px] h-10 text-white text-[13px] md:text-sm bg-primary font-medium rounded-[5px] leading-6 tracking-[-0.2px]">
          View more courses by Chioma Adeleye
        </div>
      </Link>
      <Link to="/course-details" className="flex justify-center items-center mt-6">
        <div className="flex items-center justify-center w-[632px] h-10 text-[#1e1e1e] text-[13px] md:text-sm border border-black border-dotted font-medium rounded-[5px] leading-6 tracking-[-0.2px]">
          Connect with Chioma Adeleye on Linkedin
        </div>
      </Link>
      <Link to="/course-details" className="flex justify-center items-center mt-6">
        <div className="flex items-center justify-center w-[632px] h-10 text-[#1e1e1e] text-[13px] md:text-sm border border-black border-dotted font-medium rounded-[5px] leading-6 tracking-[-0.2px]">
          Connect with Chioma Adeleye on Twitter
        </div>
      </Link>
    </div>
  )
}

export default AuthorsProfile