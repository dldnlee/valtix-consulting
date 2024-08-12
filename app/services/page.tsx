import SectionOne from "./service-sections/SectionOne"
import SectionTwo from "./service-sections/SectionTwo"
import SectionThree from "./service-sections/SectionThree"
import SectionFour from "./service-sections/SectionFour"
import SectionFive from "./service-sections/SectionFive"

const catalogue = [
  {
    title: 'Startup Advisory',
    link: '/helo'
  },
  {
    title: 'Startup Advisory',
    link: '/helo'
  },
  {
    title: 'Startup Advisory',
    link: '/helo'
  },
  {
    title: 'Startup Advisory',
    link: '/helo'
  },
  {
    title: 'Startup Advisory',
    link: '/helo'
  },
]



export default function ServicesPage() {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </div>
  )
}