import SectionOne from "./about-sections/SectionOne"
import SectionTwo from "./about-sections/SectionTwo"
import SectionThree from "./about-sections/SectionThree"
import MiniBanner from "./components/MiniBanner"
import Header from "./about-sections/Header"

export default function AboutPage() {
  return (
    <div>
      <Header />
      <SectionOne /> 
      <MiniBanner />
      <SectionTwo />
      <SectionThree />
    </div>
  )
}