import phoneMockup from '@/app/assets/images/origin-iphone-mockup.png'
import Image from 'next/image'

export default function SectionFive() {
  return (
    <div className="digital-transformation-bg flex flex-col items-center justify-center lg:p-default-padding md:p-medium-padding lg:py-[150px] md:py-[150px] text-white gap-20">
      <div className="text-center flex flex-col items-center justify-center gap-4">
        <h2 className="text-3xl font-bold">Digital <span className='text-beige'>Transformation</span></h2>
        <p className="w-[600px]">In the digital age, staying competitive requires embracing technology. Our Digital Transformation services integrate cutting-edge technologies like AI and IoT to revolutionize your operations and create new value propositions.
        </p>
      </div>
      <Image src={phoneMockup} alt="Phone mockup with origin logo in the middle" className='w-[280px]'/> 
    </div>
  )
}