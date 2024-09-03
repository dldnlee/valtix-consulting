import Link from "next/link"
import Image from "next/image"

import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"

const keypoints = [
  {
    keypoint: 'Business Model Refinement',
    text: 'We help you refine your business model to ensure it is robust, scalable, and perfectly aligned with market demands. Our experts analyze your current model, identify potential improvements, and implement changes that enhance efficiency and profitability. With our guidance, your business model will be optimized to support long-term success and adaptability in a competitive market.'
  },
  {
    keypoint: 'Strategic Market Entry',
    text: 'Our experts design actionable market entry strategies that pave the way for successful launches and sustainable growth. We conduct thorough market research to identify opportunities and potential challenges, tailoring strategies that maximize your impact and minimize risks. From initial planning to execution, we ensure your entry into new markets is smooth, effective, and primed for expansion.'
  },
  {
    keypoint: 'Fundraising Support',
    text: 'Securing funding is a critical step for any startup, and we are here to guide you through the complexities of this process. From identifying the right investors to crafting compelling pitches, we provide comprehensive support that enhances your chances of success. Our services include pitch deck development, investor outreach, and negotiation strategies, ensuring you are well-prepared to secure the necessary funding for your growth and development.'
  },
]


export default function StartupAdvisory() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Startup Advisory</h1>
        <p className="text-md max-w-[530px] leading-8">Our Startup Advisory service empowers emerging businesses to carve out their niche and scale effectively in competitive markets. By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.</p>
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
      text1="Strategy Consulting" 
      link1="/services/strategy-consulting"
      text2="Growth Strategy for Medium Enterprises"
      link2="/services/medium-enterprise" />
    </div>
  )
}