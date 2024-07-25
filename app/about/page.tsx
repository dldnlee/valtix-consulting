import SectionOne from "./about-sections/SectionOne"
import SectionTwo from "./about-sections/SectionTwo"
import SectionThree from "./about-sections/SectionThree"
import MiniBanner from "./components/MiniBanner"

export default function AboutPage() {
  return (
    <div>
      <SectionOne /> 
      <MiniBanner />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}