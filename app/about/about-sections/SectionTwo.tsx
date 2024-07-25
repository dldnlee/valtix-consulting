import Image from "next/image"
import bannerMockup from '@/app/assets/images/billboard-mockup.png'


export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center lg:p-default-padding md:p-medium-padding gap-20 lg:pb-0 md:pb-0 bg-white-abstract-pattern-3 bg-cover bg-center bg-no-repeat lg:pt-[100px] md:pt-[100px] ">
      <Image src={bannerMockup} alt="Origin Banner Mockup" className="lg:w-[600px] md:w-[500px]"/>
      <div className="w-[500px] flex flex-col gap-7 md:text-sm lg:text-md mb-[70px]">
        <h2 className="font-bold lg:text-3xl md:text-lg">Experts from each <br></br> field worldwide.</h2>
        <p className="text-md w-[500px] leading-6">Origin Consulting Group is honored to present a distinguished panel of global experts from diverse fields. These thought leaders and innovators bring invaluable insights from various industries. </p>
        <p className="text-md w-[500px] leading-6">Join us to explore their visionary ideas and practical solutions to today&apos;s most pressing challenges.</p>
      </div>
    </div>
  )
}