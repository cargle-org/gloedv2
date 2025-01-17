import Card from "../../../UI/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { IoIosStar } from "react-icons/io";
// import howitworks_bg from "../../../../assets/images/howitworks_bg.png";

interface ReviewsProps {
  title: string;
  body: string;
  alt: string;
  name: string;
  role: string;
  company: string;
}

/**
 * Renders a list of reviews as cards.
 *
 * @return {JSX.Element} The rendered list of reviews as cards.
 */

const Reviews = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 426, min: 0 },
      items: 1,
      // partialVisibilityGutter: 30,
      // slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <Carousel
      swipeable={false}
      draggable={false}
      showDots={true}
      responsive={responsive}
      ssr={true} // means to render carousel on server-side.
      infinite
      autoPlay={true}
      itemAriaLabel="Review"
      autoPlaySpeed={4000}
      centerMode={false}
      shouldResetAutoplay={false}
      rewind={false}
      rtl={false}
      slidesToSlide={1}
      // additionalTransfrom={0}
      keyBoardControl={true}
      customTransition="all 1000ms ease-in-out"
      transitionDuration={1500}
      containerClass="carousel-container xl:mx-20 pb-[86.87px] sm:pb-[74px]"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      // deviceType={this.props.deviceType}
      dotListClass="custom-dot-list-style"
      renderDotsOutside={true}
      itemClass=" sm:w-[345px] md:w-[488.631px] rounded-[18.376px]"
    >
      {reviews.map((review, index) => (
        <Card
          key={index}
          variant="review"
          className={`flex flex-col sm:gap-[34px] w-[300px] sm:w-[345px] lg:max-w-[488.631px] lg:w-[488.631px] animate-slideside300 opacity-0`}
        >
          <div
            style={{
              // backgroundImage: `url(${howitworks_bg})`,
              // height: "519.536px",
              background: `linear-gradient( lightgray 50%)`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <span className="w-[26.794px] h-[50.57px] sm:w-[35.142px] pl-[16.49px] lg:pl-[29.59px] flex-shrink-0 font-Inter font-bold text-[72.016px] leading-normal sm:mb-[37.23px]">
              “
            </span>
            <p className="mb-[30px] self-stretch text-[#212121] pl-[39.85px] pr-[15.41px] lg:pl-[60.1px] h-[120px] lg:h-[169px] font-[274] text-left text-sm md:text-xl leading-6 md:leading-7">
              {review.body}
            </p>
            <span className="flex items-center justify-center mb-[55.24px] sm:mb-[41.24px]">
              <IoIosStar color="#FFA43C" className="size-6" />
              <IoIosStar color="#FFA43C" className="size-6" />
              <IoIosStar color="#FFA43C" className="size-6" />
              <IoIosStar color="#FFA43C" className="size-6" />
              <IoIosStar color="#FFA43C" className="size-6" />
              <IoIosStar color="#FFA43C" className="size-6" />
            </span>
            <div className="flex flex-col items-center gap-[15.49px] sm:gap-[12.49px]">
              <span className="flex items-center text-[#212121] text-xl md:text-[22.505px] font-bold h-18 leading-normal">
                {review.name}
              </span>
              <p className="flex items-center text-[#212121] text-sm md:text-base font-bold h-18 leading-6">
                {review.role}, {review.company}
              </p>
            </div>
          </div>
        </Card>
      ))}
    </Carousel>
  );
};

export default Reviews;

export const reviews: ReviewsProps[] = [
  {
    title: "Data is everything & Gloed helps",
    body: "I had a 10 mins class sesssion over a whatsapp call, and it was phenomenal - \
     I learnt within 10 mins, what now saves me 8hrs weekly. Thanks Gloed",
    alt: "first reviewer image",
    name: "Roland",
    role: "Data Analyst",
    company: "",
  },
  {
    title: "Satisfied User Here!",
    body: "The platform is self explanatory, and easy to use. You can easily get your way around it with little or no supervision",
    alt: "second reviewer image",
    name: "Olayinka",
    role: "Product Manager",
    company: "",
  },
  {
    title: "My projects & work are better now.",
    body: "With Gloed's practical approach, we were encouraged to apply what we learned. This made the material \
    more engaging and also gave the confidence to start using SQL in my projects and work.",
    alt: "third reviewer image",
    name: "Peter",
    role: "Data Analyst",
    company: "",
  },
];
