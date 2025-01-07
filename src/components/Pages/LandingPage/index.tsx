import HeroSection from "./HeroSection";
import WhyLearnSection from "./WhyLearnSection";
import HowItWorksSection from "./HowItWorksSection/index";
import CompanyBenefitSection from "./CompanyBenefitSection";
import Footer from "./FooterSection/Footer";
import ReviewSection from "./ReviewSection";

const LandingPage = () => {
  return (
    <>
      {/* <Header /> */}
      <main className="flex flex-col font-SFPro 3xl:max-w-full">
        <HeroSection />
        <WhyLearnSection />
        <HowItWorksSection />
        <ReviewSection />

        {/* <CourseListSection /> */}
        <CompanyBenefitSection />
      </main>

      <Footer />
    </>
  );
};

export default LandingPage;
