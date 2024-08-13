import Link from "next/link"
import Image from "next/image"
import leftArrow from "@/app/assets/icons/circle-arrow-left.svg"

function BackToCatalog() {
  return (
    <div className="p-default-padding">
      <Link href="/services" className="text-xl flex gap-3 group hover:text-beige"><Image src={leftArrow} alt="Left arrow" className="w-[30px]" />Back to Catalog</Link>
    </div>
  )
}


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
    <div className="pt-[80px]">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-default-padding">
        <h1 className="text-3xl">Startup Advisory</h1>
        <p className="text-md w-[530px]">Our Startup Advisory service empowers emerging businesses to carve out their niche and scale effectively in competitive markets. By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.</p>
      </div>
      <div className="flex w-full items-center">
        <hr className="border-black/20 w-full"/>
        <p className="w-[500px] text-center text-xl">How We Help</p>
        <hr className="border-black/20 w-full"/>
      </div>
      <div className="p-default-padding flex flex-col gap-10">
        {
          keypoints.map((item, idx) => (
            <div key={idx} className="w-[800px]">
              <p className="text-xl">{item.keypoint}</p>
              <p className="text-lg">{item.text}</p>
            </div>
          ))
        }

      </div>
    </div>
  )
}