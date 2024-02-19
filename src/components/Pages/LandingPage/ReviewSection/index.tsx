import { useEffect, useRef, useState } from 'react';
import reviewerone from '../../../../assets/reviewerone.png'
import reviewertwo from '../../../../assets/reviewertwo.jpg'
import reviewerthree from '../../../../assets/reviewerthree.jpg'
import Reviews from './Reviews'

interface ReviewsProps {
  title: string,
  body: string,
  img: string,
  alt: string,
  name: string,
  role: string,
  company: string,
}

const ReviewSection = () => {
  const classes = ["animate-slideside300", "animate-slidein300", "animate-slidein500", "animate-slidein700"];
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsIntersecting(entry.isIntersecting),
      { rootMargin: '-150px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [ref.current]); // Only re-create observer if ref changes

  useEffect(() => {
    console.log(isIntersecting);

    if (isIntersecting) {
      ref.current?.querySelector('ul')
        ?.classList.add(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.add(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.add(classes[2]);
    }
    else {
      ref.current?.querySelector('ul')
        ?.classList.remove(classes[0]);
      ref.current?.querySelector('h1')
        ?.classList.remove(classes[1]);
      ref.current?.querySelector('p')
        ?.classList.remove(classes[2]);
    }
  }, [isIntersecting]);

  return (
    <section ref={ref} className="font-plus-jakarta-sans bg-black py-16 md:pt-24 md:pb-[119px] xl:pt-[130px]">
      <div className='container lg:max-w-[712px] mx-auto'>
        <h1 className="animate-slidein300 opacity-0 text-center pb-4 text-[34px] md:text-[40px] text-[#F0F0F0] font-bold leading-xl-loose tracking-[-1.2px]">
          People love our classes!
        </h1>
        <p className="animate-slidein500 opacity-0 text-center text-lg md:text-xl pb-16 text-opacity-60 text-[#F7FAFF] font-normal leading-extra-loose">
          Don’t just take our word for it. See what other learners think!
        </p>
      </div>

      <ul className="flex flex-wrap animate-slideside300 opacity-0 container 2xl:max-w-[1200px] mx-auto gap-6 items-center justify-center">
        {reviews.map((review, index) => (
          <Reviews review={review} key={index} />
        ))}
      </ul>
    </section>
  )
}

export default ReviewSection

export const reviews: ReviewsProps[] = [
  {
    "title": "Data is everything & Gloed helps",
    "body": "We think of it as everyone's responsibility in the organization to be more data-driven. After all, every single one of us is probably touching data in some way, regardless of your role",
    "img": reviewerone,
    "alt": "first reviewer image",
    "name": "Gabriel Lages",
    "role": "Business Intelligence and Analytics Manager",
    "company": "Hotmart"
  },
  {
    "title": "Satisfied User Here!",
    "body": "On Gloed, you learn from the experts. As you are taking courses, you are really learning from the best instructors in the world.",
    "img": reviewerthree,
    "alt": "second reviewer image",
    "name": "Rachel Alt-Simmons",
    "role": "Head Of Strategic Design, Data, Pricing And Analytics",
    "company": "AXA XL"
  },
  {
    "title": "My team learners better now.",
    "body": "As a manager, Gloed helps me show my team new packages and new ways to solve problems.",
    "img": reviewertwo,
    "alt": "third reviewer image",
    "name": "Ofentswe Lebogo",
    "role": "Data Scientist",
    "company": "Council for Scientific and Industrial Research (CSIR)"
  },
]