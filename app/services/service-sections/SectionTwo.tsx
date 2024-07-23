import Image, { StaticImageData } from "next/image"
import supportImage from '@/app/assets/images/business-executives-using-laptop.jpg';
import conversionRate from '@/app/assets/icons/conversion-rate.png';
import benefits from '@/app/assets/icons/benefits.png';
import speculate from '@/app/assets/icons/speculate.png';

const keypointsInfo = [
  {
    heading: "Business Model Refinement",
    text: "We help you refine your business model to ensure it is robust, scalable, and perfectly aligned with market demands.",
    icon: conversionRate
  },
  {
    heading: "Strategic Market Entry",
    text: "Our experts design actionable market entry strategies that pave the way for successful launches and sustainable growth.",
    icon: benefits
  },
  {
    heading: "Fundraising Support",
    text: "We guide you through the complexities of securing funding, from identifying the right investors to crafting compelling pitches.",
    icon: speculate
  }
]

function Keypoints({heading, text, icon} : {heading: string, text: string, icon: StaticImageData}) {
  return (
    <div className="flex items-center gap-5">
      <Image src={icon} alt="Conversion Rate" className="w-[100px]" />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">{heading}</h2>
        <p className="w-[600px]">{text}</p>
      </div>
    </div>
  )
}

export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center gap-[100px] lg:p-default-padding md:p-medium-padding">
      <Image src={supportImage} alt="Business Executives using laptop" className="md:w-[300px] md:h-[400px] lg:w-[425px] lg:h-[621px] rounded-3xl object-cover"/>
      <div className="flex flex-col gap-[40px]">
        <div>
          <h2 className="text-2xl font-extrabold mb-4">Startup Advisory</h2>
          <p className="w-[700px] text-md">Our Startup Advisory service empowers emerging businesses to carve out their niche and scale effectively in competitive markets. By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.</p>
        </div>
        <div className="flex flex-col gap-10">
          {
            keypointsInfo.map((item, index) => (
              <Keypoints key={index} heading={item.heading} text={item.text} icon={item.icon} />
            ))
          }
        </div>
      </div>
    </div>
  )
}