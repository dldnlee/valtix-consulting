import Image from "next/image"
import bannerMockup from '@/app/assets/images/billboard-mockup.webp'


export default function SectionTwo() {
  return (
    <div className="flex 2xl:flex-row flex-col items-center justify-center 2xl:p-default-padding p-medium-padding gap-20 pb-0 bg-white-abstract-pattern-3 bg-cover bg-center bg-no-repeat lg:pt-[100px] md:pt-[100px] ">
      <Image src={bannerMockup} alt="Origin Banner Mockup" className="2xl:w-[600px] w-[400px]"/>
      <div className="flex flex-col gap-7 md:text-sm lg:text-md mb-[70px]">
        <h2 className="font-bold 2xl:text-3xl text-lg">Experts from each <br></br> field worldwide.</h2>
        <p className="text-md 2xl:w-[500px] leading-6">Origin Consulting Group is honored to present a distinguished panel of global experts from diverse fields. These thought leaders and innovators bring invaluable insights from various industries. </p>
        <p className="text-md 2xl:w-[500px] leading-6">Join us to explore their visionary ideas and practical solutions to today&apos;s most pressing challenges.</p>
      </div>
    </div>
  )
}