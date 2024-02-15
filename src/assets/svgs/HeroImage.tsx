import hero_img from '../../../../assets/hero_img.svg'

const HeroImage = () => {
  return (
    <img src={hero_img} alt="hero image" className="object-cover h-full flex-shrink-0" />
  )
}

export default HeroImage