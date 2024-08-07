'use client'
import phoneMockup from '@/app/assets/images/origin-iphone-mockup.webp'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function SectionFive() {
  return (
    <div className="digital-transformation-bg overflow-hidden flex flex-col items-center justify-center lg:p-default-padding md:p-medium-padding lg:py-[120px] md:py-[120px] text-white gap-20">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">Digital <span className='text-beige'>Transformation</span></h2>
        <p className="w-[600px]">In the digital age, staying competitive requires embracing technology. Our Digital Transformation services integrate cutting-edge technologies like AI and IoT to revolutionize your operations and create new value propositions.
        </p>
      </div>
      <motion.div
      initial={{opacity:0, y:200}}
      whileInView={{opacity: 1, y:0}}
      viewport={{once:true}}
      transition={{
        delay: 0,
        duration: 2,
        type:'spring',
        stiffness: 40,
      }}
      >
        <Image src={phoneMockup} alt="Phone mockup with origin logo in the middle" className='w-[280px]'/> 
      </motion.div>
    </div>
  )
}