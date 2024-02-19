import HeroSection from "./HeroSection";
import WhyLearnSection from "./WhyLearnSection";
import HowItWorksSection from "./HowItWorksSection/index"
import ReviewSection from "./ReviewSection"
import CompanyBenefitSection from "./CompanyBenefitSection"

const LandingPage = () => {

  return (
    <main className="flex flex-col">
      <HeroSection />
      <WhyLearnSection />
      <HowItWorksSection />
      <ReviewSection />
      <CompanyBenefitSection />
    </main >
  )
}

export default LandingPage