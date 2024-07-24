import Image from "next/image"
import bannerMockup from '@/app/assets/images/billboard-mockup.png'


export default function SectionTwo() {
  return (
    <div className=" bg-gradient-to-t from-gray-2/40 to-white flex items-center justify-center lg:p-default-padding md:p-medium-padding gap-20 lg:pb-0 md:pb-0">
      <Image src={bannerMockup} alt="Origin Banner Mockup" className="lg:w-[600px] md:w-[500px]"/>
      <div className="w-[500px] flex flex-col gap-7 md:text-sm lg:text-md">
        <h2 className="font-bold lg:text-3xl md:text-lg">Experts from each <br></br> field worldwide.</h2>
        <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>
      </div>
    </div>
  )
}