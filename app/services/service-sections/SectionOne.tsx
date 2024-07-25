'use client'
import model from '@/app/assets/images/model-service.png'
import Image from 'next/image'
import {motion} from 'framer-motion'

export default function SectionOne() {
  return (
    <div className="bg-white lg:p-default-padding md:p-medium-padding overflow-hidden flex items-top justify-center lg:pb-0 md:pb-0 lg:pt-[240px] gap-[240px] border-b bg-white-abstract-pattern-1 bg-cover bg-bottom bg-no-repeat">
      <div className="flex flex-col gap-6 ">
        <div>
          <h2 className="lg:text-md md:text-sm text-gray-2">ORIGIN CONSULTING GROUP</h2>
          <h1 className="lg:text-4xl md:text-3xl font-bold lg:leading-[70px] md:leading-[40px]">Your Blueprint<br />for <span className='text-beige'>Success</span></h1>
        </div>
        <p className='lg:text-md md:text-sm w-[530px]'>At Origin Consulting Group, we believe that every great  accomplishment starts with a well-drafted blueprint. Our mission is to  guide you through the complexities of today&apos;s business landscape, providing customized strategies that are as unique as your vision.</p>
      </div>
      <motion.div
      initial={{opacity:0, y:50}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      transition={{
        duration: .5
      }}
      >
        <Image src={model} alt="Model Crossing Arms Smiling" className='lg:w-[300px] md:w-[200px]' />
      </motion.div>
    </div>
  )
}