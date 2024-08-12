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
    link: '/helo'
  },
  {
    title: 'Growth Strategy for Medium Enterprises',
    link: '/helo'
  },
  {
    title: 'Operational Efficiency',
    link: '/helo'
  },
  {
    title: 'Digital Transformation',
    link: '/helo'
  },
  {
    title: 'Strategy Consulting',
    link: '/helo'
  },
]

function ServiceBlock({title, link} : {title:string, link:string}) {
  return (
    <Link href={link} className="border w-[500px] h-[200px] p-5 px-10 border-black/50 flex flex-col gap-5 bg-white transition-all hover:shadow-xl hover:scale-[105%] group">
      <h3 className="text-2xl group-hover:font-semibold transition-all h-[100px] w-[400px]">{title}</h3>
      <hr  className="border-black/20"/>
      <p className="flex gap-5 text-lg items-center">
        Learn More
        <Image src={rightArrow} alt="Right Arrow" className="w-[20px] h-fit group-hover:translate-x-4 transition-all" /> 
      </p>
    </Link>
  )
}

function Catalogue() {
  return (
    <div className="flex flex-col p-default-padding gap-10 pb-[200px]">
      <h2 className="text-4xl font-bold">Our Services</h2>
      <hr />
      <div className="grid grid-cols-3 w-fit gap-14">
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
      {/* <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive /> */}
    </div>
  )
}