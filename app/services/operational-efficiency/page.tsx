import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Process Reengineering',
    text: 'We redesign your existing processes to eliminate inefficiencies and enhance productivity, allowing you to do more with less. Our team conducts a thorough analysis of your current workflows, identifying bottlenecks and areas for improvement. By streamlining and optimizing your processes, we help you achieve greater efficiency, reduce costs, and increase overall productivity.'
  },
  {
    keypoint: 'Lean Management',
    text: 'Our lean management practices instill a philosophy of continuous improvement, ensuring sustained enhancements in efficiency and quality. We implement lean principles to help you create a culture focused on eliminating waste, improving processes, and delivering value to customers. Through continuous assessment and refinement, we ensure your operations remain efficient and responsive to changing demands.'
  },
]


export default function OperationalEfficiency() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Operational Efficiency</h1>
        <p className="text-md max-w-[530px] leading-8">Enhance your company&apos;s productivity and efficiency with our Operational Efficiency services. We focus on streamlining processes and implementing lean practices that significantly reduce waste and enhance value to your customers.</p>
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
      text1="Growth Strategy for Medium Enterprises" 
      link1="/services/medium-enterprise"
      text2="Digital Transformation"
      link2="/services/digital-transformation" />
    </div>
  )
}