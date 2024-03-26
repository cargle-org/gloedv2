import Card from "../../../UI/Card"
import reviewerone from '../../../../assets/images/roland.png'
import reviewertwo from '../../../../assets/images/peter.png'
import reviewerthree from '../../../../assets/images/olayinka.png'

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
    <ul className="flex flex-wrap items-center justify-center container mx-auto gap-6 font-plus-jakarta-sans animate-slideside300 opacity-0 2xl:max-w-[1200px] ">
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
            <img src={review.img} className="flex items-start object-cover w-24 h-24 rounded" alt={review.alt} />
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
    "body": " I had a 10 mins class session over a WhatsApp call, and it was phenomenal - I learnt, within 10mins, what now saves me 8hrs weekly. Thanks, Gloed",
    "img": reviewerone,
    "alt": "first reviewer image",
    "name": "Roland",
    "role": "Data Analyst",
    "company": "Hotmart"
  },
  {
    "title": "My team learns better now.",
    "body": "The platform is self explanatory and easy to use. You can easily get your way around it with little or no supervision ✨",
    "img": reviewerthree,
    "alt": "second reviewer image",
    "name": "Olayinka",
    "role": "Product Manager",
    "company": "AXA XL"
  },
  {
    "title": "Satisfied User Here!",
    "body": "Instead of just learning theory, we were encouraged to apply what we learned to real-world scenarios. This not only made the material more engaging but also gave me the confidence to start using SQL in my own projects and work environments.",
    "img": reviewertwo,
    "alt": "third reviewer image",
    "name": "Peter",
    "role": "Data Analyst",
    "company": "Council for Scientific and Industrial Research (CSIR)"
  },

]
