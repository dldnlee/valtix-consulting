import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Technology Integration',
    text: 'We help you seamlessly integrate advanced technologies that enhance connectivity, automate processes, and improve decision-making. Our team assesses your current technology landscape and identifies the best tools and platforms to support your business objectives. By integrating cutting-edge technologies, we enable you to streamline operations, boost productivity, and make data-driven decisions.'
  },
  {
    keypoint: 'Digital Strategy',
    text: 'Beyond technology implementation, we develop a holistic digital strategy that aligns with your business goals and drives digital culture. We work with you to create a comprehensive plan that incorporates digital initiatives across all areas of your business. This strategy ensures that technology adoption is purposeful, cohesive, and geared towards achieving sustainable growth and competitive advantage.'
  },
]


export default function DigitalTransformation() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Digital Transformation</h1>
        <p className="text-md max-w-[530px] leading-8">In the digital age, staying competitive requires embracing technology. Our Digital Transformation services integrate cutting-edge technologies like AI and IoT to revolutionize your operations and create new value propositions.</p>
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
      text1="Operational Efficiency" 
      link1="/services/operational-efficiency"
      text2="Strategy Consulting"
      link2="/services/strategy-consulting" />
    </div>
  )
}