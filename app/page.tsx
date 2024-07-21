import SectionOne from "./sections/SectionOne"
import SectionThree from "./sections/SectionThree"
import SectionTwo from "./sections/SectionTwo"
import SectionFour from "./sections/SectionFour"


export default function Home() {

  console.log('bombom')

  return ( 
    <div className="min-h-screen w-full">
      <SectionOne/>
      <SectionTwo />
      <SectionThree />
      <SectionFour /> 
    </div>
  )
}