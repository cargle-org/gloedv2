import Card from "../../../UI/Card"
import reviewerone from '../../../../assets/images/reviewerone.png'
import reviewertwo from '../../../../assets/images/reviewertwo.jpg'
import reviewerthree from '../../../../assets/images/reviewerthree.jpg'

interface ReviewsProps {
  title: string,
  body: string,
  img: string,
  alt: string,
  name: string,
  role: string,
  company: string,
}

/**
 * Renders a list of reviews as cards.
 *
 * @return {JSX.Element} The rendered list of reviews as cards.
 */

const Reviews = () => {
  return (
    <ul className="flex flex-wrap items-center justify-center container mx-auto gap-6 animate-slideside300 opacity-0 2xl:max-w-[1200px] ">
      {reviews.map((review, index) => (
        <Card key={index} variant="review" className="w-[285px] sm:w-[300px] md:w-[384px]">
          <h3 className="text-white font-semibold text-[17px] md:text-lg leading-[27px] tracking-[-0.36px]">
            {review.title}
          </h3>
          <p className="pt-3 sm:pt-4 text-[#F3F5F7] h-36 font-medium text-left leading-6 tracking-[-0.32px]">
            "{review.body}"
          </p>
          <div className="border my-7 opacity-20 border-[#90A3BF]"></div>
          <div className="flex gap-3.5 md:gap-5">
            <img src={review.img} className="flex items-start object-cover" alt={review.alt} />
            <h3 className="md:flex items-center text-white text-sm font-bold h-18 leading-[21px] tracking-[-0.42px]">
              {review.name}, {review.role}, {review.company}
            </h3>
          </div>
        </Card>
      ))
      }
    </ul >
  )
}

export default Reviews

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