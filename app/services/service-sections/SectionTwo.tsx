'use client'
import Image, { StaticImageData } from "next/image"
import supportImage from '@/app/assets/images/business-executives-using-laptop.webp';
import conversionRate from '@/app/assets/icons/conversion-rate.png';
import benefits from '@/app/assets/icons/benefits.png';
import speculate from '@/app/assets/icons/speculate.png';
import {motion} from 'framer-motion';

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

const variants = {
  'hidden-0': {
    opacity:0, x:-100
  },
  'visible-0': {
    opacity:1, x:0,
    transition: {
      duration: 2,
      type:'spring',
      stiffness: 100,
      delay: .5
    }
  },
  'hidden-1': {
    opacity:0, x:-100
  },
  'visible-1': {
    opacity:1, x:0,
    transition: {
    duration: 2,
    type:'spring',
    stiffness: 100,
    delay: .7
    }
  },
  'hidden-2': {
    opacity:0, x:-100
  },
  'visible-2': {
    opacity:1, x:0,
    transition: {
    duration: 2,
    type:'spring',
    stiffness: 100,
    delay: .9
    }
  },
}

function Keypoints({heading, text, icon, index} : {heading: string, text: string, icon: StaticImageData, index: number}) {
  return (
    <motion.div
    initial={{opacity:0, x:-100}}
      whileInView={`visible-${index}`}
      variants={variants}
      viewport={{once: true}}
      transition={{
        duration: 3,
        type:'spring',
        stiffness: 100
      }}
    className="flex items-center gap-5">
      <Image src={icon} alt="Conversion Rate" className="w-[90px]" />
      <div className="flex flex-col gap-2">
        <h2 className="font-bold text-lg">{heading}</h2>
        <p className="w-[600px]">{text}</p>
      </div>
    </motion.div>
  )
}

export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center gap-[100px] lg:p-default-padding md:p-medium-padding bg-white lg:py-[140px] md:py-[140px]">
      <Image src={supportImage} alt="Business Executives using laptop" className="md:w-[400px] md:h-[521px] lg:w-[525px] lg:h-[621px] rounded-3xl object-cover shadow-xl"/>
      <div className="flex flex-col gap-[40px]">
        <div>
          <h2 className="text-3xl font-bold mb-4 border-b-4 border-beige w-fit">Startup Advisory</h2>
          <p className="w-[700px] text-md">Our Startup Advisory service empowers emerging businesses to carve out their niche and scale effectively in competitive markets. By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.</p>
        </div>
        <div className="flex flex-col gap-10">
          {
            keypointsInfo.map((item, index) => (
              <Keypoints key={index} heading={item.heading} text={item.text} icon={item.icon} index={index} />
            ))
          }
        </div>
      </div>
    </div>
  )
}