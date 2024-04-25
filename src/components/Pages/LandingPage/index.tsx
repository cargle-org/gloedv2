import HeroSection from "./HeroSection";
import WhyLearnSection from "./WhyLearnSection";
import HowItWorksSection from "./HowItWorksSection/index"
import ReviewSection from "./ReviewSection copys"
import CompanyBenefitSection from "./CompanyBenefitSection"
import Footer from "./FooterSection/Footer";
import Header from "../../Layout/Header";
import CourseListSection from "./CourseListSection";

const LandingPage = () => {

  return (
    <>
      <Header />
      <main className="flex flex-col font-plus-jakarta-sans">
        <HeroSection />
        <WhyLearnSection />
        <HowItWorksSection />
        <CourseListSection />
        <ReviewSection />
        <CompanyBenefitSection />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage