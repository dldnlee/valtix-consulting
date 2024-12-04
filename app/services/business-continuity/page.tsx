import Link from "next/link"
import Image from "next/image"
import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"



const keypoints = [
  {
    keypoint: 'Data-Driven Customization',
    text: 'The roadmap will be built based on client data, industry benchmarks, and market trends. By using advanced analytics and performance metrics, the growth plan will be highly specific to the client’s business model, resources, and competitive landscape.'
  },
  {
    keypoint: 'Real-Time Updates',
    text: 'Unlike traditional business plans that may become outdated quickly, these growth roadmaps will be dynamic. Clients will receive periodic updates that reflect current market conditions, customer feedback, and any operational changes. This ensures they stay agile and responsive to opportunities or challenges.'
  },
  {
    keypoint: 'Milestone Tracking',
    text: 'Each roadmap will include clearly defined growth milestones, such as revenue targets, product launches, or expansion timelines. These will be used to measure progress and ensure that the company stays on track to meet its goals.'
  },
  {
    keypoint: 'Tactical and Strategic Balance',
    text: 'The roadmap will cover both short-term tactical actions (e.g., marketing campaigns, sales initiatives) and long-term strategic objectives (e.g., entering new markets, M&A activity). This blend allows clients to balance immediate growth with sustainable, long-term success.'
  },
]



export default function MediumEnterprises() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-medium-padding 2xl:p-default-padding flex flex-col gap-10">
        <h1 className="2xl:text-3xl text-2xl">Hyper-Personalized Growth Roadmaps</h1>
        <p className="text-md max-w-[530px] leading-8">This service focuses on creating tailored, dynamic growth strategies for each client, rather than offering static, one-size-fits-all plans. The growth roadmaps will be data-driven, regularly updated, and aligned with the client&apos;s unique goals, industry conditions, and market dynamics.</p>
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
      text1="Startup Advisory" 
      link1="/services/startup-advisory"
      text2="Business Continuity and Crisis Management for Startups"
      link2="/services/operational-efficiency" />
    </div>
  )
}