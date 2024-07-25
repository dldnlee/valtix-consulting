'use client'
import gear from '@/app/assets/icons/gears.png'
import project_management from '@/app/assets/icons/project-management.png'
import Image, { StaticImageData } from 'next/image'
import operationalEfficiency from '@/app/assets/images/asian-businessman-presenting-analysis-cost-graph-corporate-colleagues-meeting-office.jpg'
import {motion} from 'framer-motion'

const keypoints = [
  {
    heading: "Process Reengineering",
    text: "We redesign your existing processes to eliminate inefficiencies and enhance productivity, allowing you to do more with less.",
    icon: gear
  },
  {
    heading: "Lean Management",
    text: "Our lean management practices instil a philosophy of continuous improvement, ensuring sustained enhancements in efficiency and quality.",
    icon: project_management
  }
]

const variants = {
  'hidden-0': {
    opacity:0, y:100
  },
  'visible-0': {
    opacity:1, y:0,
    transition: {
      duration: 3,
      type:'spring',
      stiffness: 100,
      delay: 1
    }
  },
  'hidden-1': {
    opacity:0, y:-100
  },
  'visible-1': {
    opacity:1, y:0,
    transition: {
    duration: 3,
    type:'spring',
    stiffness: 100,
    delay: 1
    }
  },
}

function Keypoints({heading, text, icon, index} : {heading: string, text: string, icon: StaticImageData, index: number}) {
  return (
    <motion.div 
    initial={`hidden-${index}`}
    whileInView={`visible-${index}`}
    variants={variants}
    viewport={{once: true}}
    className='flex flex-col gap-4 items-center shadow-xl rounded-lg px-2 py-4'>
      <Image src={icon} alt={heading} className='w-[130px]'/>
      <div className='text-center flex flex-col gap-2'>
        <h3 className='text-xl font-semibold'>{heading}</h3>
        <p className='text-[13px] font-extralight w-[300px] leading-[20px]'>{text}</p>
      </div>
    </motion.div>
  )
}

export default function SectionFour() {
  return (
    <div className='flex gap-[100px] items-center justify-center lg:p-default-padding md:p-medium-padding lg:py-[140px] md:py-[140px] bg-white'>
      <div className='flex flex-col gap-[50px]'>
        <div>
          <h2 className='mb-4 text-3xl font-bold border-b-4 border-beige w-fit'>Operational Efficiency</h2>
          <p className='text-md w-[660px]'>Enhance your company&apos;s productivity and efficiency with our Operational Efficiency services. We focus on streamlining processes and implementing lean practices that significantly reduce waste and enhance value to your customers.</p>
        </div>
        <div className='flex gap-20 items-center justify-center overflow-hidden'>
          {
            keypoints.map((item, index) => (
              <Keypoints key={index} heading={item.heading} text={item.text} icon={item.icon} index={index}/> 
            ))
          }
        </div>
      </div>
      <Image src={operationalEfficiency} alt="asian businessman presenting analysis cost graph corporate colleagues meeting office" className='md:w-[300px] md:h-[400px] lg:w-[525px] lg:h-[621px] object-cover rounded-3xl shadow-xl'/>
      
    </div>
  )
}