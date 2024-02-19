import Card from "../../../UI/Card"

const Reviews = ({ review, key }: { review: any, key: number }) => {
  return (
    <Card key={key} variant="review" className="w-[285px] sm:w-[300px] md:w-[384px]">
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
  )
}

export default Reviews