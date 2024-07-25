'use client'
import {motion} from 'framer-motion';

const keypoints = [
  {
    heading: "Market Expansion",
    text: "We analyse market trends and customer needs to identify new growth opportunities, helping you expand into new markets or segments effectively."
  },
  {
    heading: "Operational Scalability",
    text: "Our strategic advice ensures your operations are scalable, supporting growth without compromising efficiency or quality."
  },
  {
    heading: "Innovation Management",
    text: "We assist you in fostering a culture of innovation that continuously propels your business forward."
  }
]

const variants = {
  'transition-0': {
    opacity:1, y:0,
    transition:{
    duration: 3,
    type:'spring',
    stiffness: 100,
    delay: .5
  }},
  'transition-1': {
    opacity:1, y:0,
    transition:{
    duration: 3,
    type:'spring',
    stiffness: 100,
    delay: .7
  }},
  'transition-2': {
    opacity:1, y:0,
    transition:{
    duration: 3,
    type:'spring',
    stiffness: 100,
    delay: .9
  }}
}

function Keypoint({heading, text, index} : {heading: string, text: string, index: number}) {
  return (
    <motion.li
    initial={{opacity:0, y:100}}
    whileInView={`transition-${index}`}
    viewport={{once: true}}
    variants={variants}
    className="px-[20px] py-[40px] w-[420px] flex flex-col items-center justify-start bg-white text-center gap-4 shadow-lg rounded-2xl">
      <h2 className="text-xl font-bold border-b border-beige">{heading}</h2>
      <p>{text}</p>
    </motion.li>
  )
}

export default function SectionThree() {
  return (
    <div className="services-img-bg bg-cover bg-center bg-no-repeat lg:p-default-padding md:p-medium-padding flex flex-col items-center justify-center gap-20 lg:py-[150px] md:py-[150px]">
      <div className="flex items-center justify-center gap-10 bg-gray-1/60 backdrop-blur-md py-6 px-10 shadow-lg rounded-2xl">
        <h2 className="w-[470px] text-3xl font-bold text-white">Growth Strategy for Medium Enterprises</h2>
        <div className="w-[2px] h-[100px] bg-gray-2"></div>
        <p className="w-[600px] text-white">Our Growth Strategy services are designed to help established medium-sized enterprises identify new opportunities and expand their market presence. We provide the insights and tools needed to navigate market complexities and accelerate growth.</p>
      </div>
      <ul className="flex gap-10">
        {
          keypoints.map((item, index) => (
            <Keypoint key={index} heading={item.heading} text={item.text} index={index}/> 
          ))
        }
      </ul>
    </div>
  )
}