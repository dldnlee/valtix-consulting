import SectionOne from "./service-sections/SectionOne"
import SectionTwo from "./service-sections/SectionTwo"
import SectionThree from "./service-sections/SectionThree"
import SectionFour from "./service-sections/SectionFour"
import SectionFive from "./service-sections/SectionFive"
import Link from "next/link"
import Image from "next/image"
import rightArrow from "@/app/assets/icons/right-arrow.png";

const catalogue = [
  {
    title: 'Startup Advisory',
    link: '/services/startup-advisory'
  },
  {
    title: 'Growth Strategy for Medium Enterprises',
    link: '/services/medium-enterprise'
  },
  {
    title: 'Operational Efficiency',
    link: '/services/operational-efficiency'
  },
  {
    title: 'Digital Transformation', 
    link: '/services/digital-transformation'
  },
  {
    title: 'Strategy Consulting',
    link: '/services/strategy-consulting'
  },
]

function ServiceBlock({title, link} : {title:string, link:string}) {
  return (
    <Link href={link} className="border 2xl:w-[400px] max-w-[400px] 2xl:h-[200px] p-5 px-10 border-black/50 flex flex-col gap-5 bg-white transition-all hover:shadow-md hover:scale-[101%] group">
      <h3 className="2xl:text-2xl text-xl group-hover:font-semibold transition-all 2xl:h-[100px] 2xl:w-[400px]">{title}</h3>
      <hr  className="border-black/20"/>
      <p className="flex gap-5 text-lg items-center">
        Learn More
        <Image src={rightArrow} alt="Right Arrow" className="w-[20px] h-fit group-hover:translate-x-2 transition-all" /> 
      </p>
    </Link>
  )
}

function Catalogue() {
  return (
    <div className="flex flex-col gap-10 pb-[200px] items-center p-medium-padding 2xl:p-default-padding">
      <h2 className="2xl:text-4xl text-2xl font-bold w-full">Our Services</h2>
      <hr />
      <div className="grid 2xl:grid-cols-3 grid-cols-1 w-full gap-14">
        {
          catalogue.map((item, idx) => (
            <ServiceBlock key={idx} title={item.title} link={item.link} />
          ))
        }
      </div>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <SectionOne />
      <Catalogue />
    </div>
  )
}