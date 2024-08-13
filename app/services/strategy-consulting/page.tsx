import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Advanced Analytics and Predictive Modelling',
    text: 'Use data-driven insights to make informed decisions that mitigate risks and capitalize on emerging opportunities. Our team leverages advanced analytics and predictive modeling techniques to analyze your business data, uncover trends, and forecast future scenarios. By transforming data into actionable insights, we help you stay ahead of the competition and make strategic decisions that drive growth and profitability.'
  },
  {
    keypoint: 'Strategic Implementation',
    text: 'We don’t just plan; we also help you execute these strategies effectively, ensuring that every step is geared towards achieving your business objectives. Our hands-on approach includes detailed action plans, resource allocation, and continuous monitoring to ensure successful implementation. We work closely with your team to ensure alignment and address any challenges, turning strategic vision into reality and delivering measurable results.'
  },
]


export default function StrategyConsulting() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-default-padding flex flex-col gap-10">
        <h1 className="text-3xl">Strategy Consulting</h1>
        <p className="text-md w-[540px] leading-8">Strategic Planning and Execution services are the cornerstone of enduring success. We offer data-driven insights and comprehensive planning that align with your long-term vision, ensuring you are well-prepared for future challenges and opportunities.</p>
      </div>
      <DividingText text="How We Help"/>
      <div className="p-default-padding flex flex-col gap-10">
        {
          keypoints.map((item, idx) => (
            <div key={idx} className="w-[800px] flex flex-col gap-3">
              <p className="text-xl font-semibold ">{item.keypoint}</p>
              <p className="text-lg leading-8">{item.text}</p>
            </div>
          ))
        }
      </div>
      <DividingText text="Explore Our Services" styling='w-[700px]'/>
      <ServicePagination 
      text1="Digital Transformation" 
      link1="/services/digital-transformation"
      text2="Startup Advisory"
      link2="/services/startup-advisory" />
    </div>
  )
}