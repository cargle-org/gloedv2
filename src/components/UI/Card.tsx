import React from "react";

interface CardProps {
  className?: string;
  style?: string;
  children: React.ReactNode;
  variant: "primary" | "pricing" | "review" | "course" | "dashboard";
}

const Card: React.FC<CardProps> = (props) => {
  const cardReviewStyles =
    "flex flex-shrink-0  pt-[32.45px] pb-[32.21px] md:pb-[43.75px] md:pt-[32.45px]";
  const cardHowitWorkStyles =
    "bg-[#F3F5F7] flex flex-shrink-0 rounded-2xl place-content-end items-end hover:scale-105 focus:scale-105 duration-300";
  const cardPricingStyles =
    "bg-[#F3F5F7] flex flex-shrink-0 rounded-xl p-6 sm:p-5 lg:p-8 xl:p-7 2xl:p-8 w-full hover:scale-105 duration-300";
  const courseCardStyles =
    "flex cursor-pointer items-start justify-center flex-shrink-0 rounded-lg shadow-lg shadow-[#10182814] px-5 sm:px-4 md:px-5 pt-6 pb-5 2xl:pb-8 hover:scale-105 duration-300";
  const dashboardCardStyles =
    "flex h-[136px] justify-center items-start flex-col w-auto rounded-[10px] gap-4 py-3 pl-5 pr-3";

  return (
    <div
      className={`
        ${props.variant === "primary" && cardHowitWorkStyles} 
        ${props.variant === "pricing" && cardPricingStyles} 
        ${props.variant === "review" && cardReviewStyles} 
        ${props.variant === "course" && courseCardStyles} 
        ${props.variant === "dashboard" && dashboardCardStyles} 
        ${props.className}
        ${props.style}
      `}
    >
      {" "}
      {props.children}
    </div>
  );
};

export default Card;
