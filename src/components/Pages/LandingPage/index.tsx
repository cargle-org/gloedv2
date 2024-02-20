import HeroSection from "./HeroSection";
import WhyLearnSection from "./WhyLearnSection";
import HowItWorksSection from "./HowItWorksSection/index"
import ReviewSection from "./ReviewSection"
import CompanyBenefitSection from "./CompanyBenefitSection"
import Footer from "./FooterSection/Footer";
import Header from "../../Layout/Header";

const LandingPage = () => {

  return (
    <>
      <Header />
      <main className="flex flex-col font-plus-jakarta-sans">
        <HeroSection />
        <WhyLearnSection />
        <HowItWorksSection />
        <ReviewSection />
        <CompanyBenefitSection />
      </main>
      <Footer />
    </>
  )
}

export default LandingPage