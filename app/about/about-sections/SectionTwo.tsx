import Image from "next/image"
import bannerMockup from '@/app/assets/images/billboard-mockup.png'


export default function SectionTwo() {
  return (
    <div className="flex items-center justify-center lg:p-default-padding md:p-medium-padding gap-20 lg:pb-0 md:pb-0 bg-white-abstract-pattern-3 bg-cover bg-center bg-no-repeat lg:pt-[100px] md:pt-[100px]">
      <Image src={bannerMockup} alt="Origin Banner Mockup" className="lg:w-[600px] md:w-[500px]"/>
      <div className="w-[500px] flex flex-col gap-7 md:text-sm lg:text-md">
        <h2 className="font-bold lg:text-3xl md:text-lg">Experts from each <br></br> field worldwide.</h2>
        <p className="text-md w-[400px]">We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>
      </div>
    </div>
  )
}