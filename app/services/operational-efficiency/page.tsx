import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Crisis Preparedness Plans',
    text: 'Develop customized contingency plans for clients that outline steps to be taken in the event of a disruption. This could include communication strategies, leadership roles during crises, backup suppliers, and alternative revenue streams.'
  },
  {
    keypoint: 'Risk Assessment and Mitigation',
    text: 'Conduct a thorough risk assessment for each client to identify potential vulnerabilities in their operations, financial health, or market exposure. Based on this assessment, we’ll create risk mitigation strategies that clients can implement to safeguard their business.'
  },
  {
    keypoint: 'Real-Time Crisis Management Support',
    text: 'Provide on-demand consulting support during a crisis. This could include crisis leadership, emergency planning, media relations, and advising on damage control strategies.'
  },
  {
    keypoint: 'Post-Crisis Recovery',
    text: 'Offer recovery and business restoration plans to help companies get back on track after a disruption. This includes financial planning to manage losses, customer retention strategies, and process improvements to prevent future disruptions.'
  },
]


export default function OperationalEfficiency() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Business Continuity and Crisis Management for Startups</h1>
        <p className="text-md max-w-[530px] leading-8">This service offers startups and SMEs a robust framework to prepare for, manage, and recover from business disruptions. These disruptions could range from market downturns and regulatory changes to operational failures or sudden crises like a pandemic or cyberattack.</p>
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
      text2="Accelerated Digital Transformation for Emerging Markets "
      link2="/services/digital-transformation" />
    </div>
  )
}