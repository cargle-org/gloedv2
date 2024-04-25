import Card from "../../../UI/Card"
import reviewerone from '../../../../assets/reviewerone.jpg'
import reviewertwo from '../../../../assets/reviewertwo.jpg'
import reviewerthree from '../../../../assets/reviewerthree.png'

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
    <ul className="flex flex-wrap animate-slideside300 opacity-0 container 2xl:max-w-[1200px] mx-auto gap-6 items-center justify-center">
      {reviews.map((review, index) => (
        <Card key={index} variant="review" className="w-[285px] sm:w-[300px] md:w-[384px]">
          <h3 className="text-white font-semibold text-[17px] md:text-lg leading-[27px] tracking-[-0.36px]">
            {review.title}
          </h3>
          <p className="pt-3 sm:pt-4 text-[#F3F5F7] h-40 font-medium text-left leading-6 tracking-[-0.32px]">
            "{review.body}"
          </p>
          <div className="border my-7 opacity-20 border-[#90A3BF]"></div>
          <div className="flex gap-3.5 md:gap-5">
            <img width="70" height="70" src={review.img} className="flex items-start object-cover rounded-[12px]" alt={review.alt} />
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
    "body": "I had a 10 mins class sesssion over a whatsapp call, and it was phenomenal - \
     I learnt within 10 mins, what now saves me 8hrs weekly. Thanks Gloed",
    "img": reviewerone,
    "alt": "first reviewer image",
    "name": "Roland",
    "role": "Data Analyst",
    "company": ""
  },
  {
    "title": "Satisfied User Here!",
    "body": "The platform is self explanatory, and easy to use. You can easily get your way around it with little or no supervision",
    "img": reviewertwo,
    "alt": "second reviewer image",
    "name": "Olayinka",
    "role": "Product Manager",
    "company": ""
  },
  {
    "title": "My projects & work are better now.",
    "body": "With Gloed's practical approach, we were encouraged to apply what we learned. This made the material \
    more engaging and also gave the confidence to start using SQL in my projects and work.",
    "img": reviewerthree,
    "alt": "third reviewer image",
    "name": "Peter",
    "role": "Data Analyst",
    "company": ""
  },

]