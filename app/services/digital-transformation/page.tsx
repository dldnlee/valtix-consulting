import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Low-Code/No-Code Platform Integration',
    text: 'Introduce clients to low-code and no-code platforms that enable them to rapidly build and deploy digital solutions without the need for extensive coding expertise. This allows startups to accelerate their digital transformation while keeping costs down.'
  },
  {
    keypoint: 'Automation and AI Solutions',
    text: 'Implement automation tools (e.g., RPA – robotic process automation) and AI-driven solutions to streamline operations, enhance customer experience, and improve decision-making. For example, automating repetitive tasks in customer service or using AI for predictive analytics in marketing.'
  },
  {
    keypoint: 'Scalable Infrastructure',
    text: 'Help clients adopt cloud-based solutions and scalable digital infrastructures that allow them to expand their operations without significant upfront investments. This is particularly valuable for businesses looking to grow quickly in emerging markets.'
  },
  {
    keypoint: 'Training and Capacity Building',
    text: "Provide training sessions to ensure clients' teams are capable of managing new digital tools. This can include workshops on data analytics, AI implementation, or digital marketing strategies."
  },
]


export default function DigitalTransformation() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Accelerated Digital Transformation for Emerging Markets</h1>
        <p className="text-md max-w-[530px] leading-8">This service aims to fast-track the digital transformation of startups and SMEs in emerging markets like Indonesia and Southeast Asia. The focus is on helping businesses modernize quickly and affordably, using the latest digital tools and technologies to improve efficiency, scalability, and competitiveness.</p>
      </div>
      <DividingText text="How We Help"/>
      <div className="2xl:p-default-padding p-medium-padding flex flex-col gap-10">
        {
          keypoints.map((item, idx) => (
            <div key={idx} className="max-w-[800px] flex flex-col gap-3">
              <p className="2xl:text-xl text-lg font-semibold ">{item.keypoint}</p>
              <p className="2xl:text-lg text-md leading-8">{item.text}</p>
            </div>
          ))
        }
      </div>
      <DividingText text="Explore Our Services" styling='w-[700px]'/>
      <ServicePagination 
      text1="Business Continuity and Crisis Management for Startups" 
      link1="/services/operational-efficiency"
      text2="Strategy Consulting"
      link2="/services/strategy-consulting" />
    </div>
  )
}