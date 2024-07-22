import Image from "next/image"
import bannerMockup from '@/app/assets/images/billboard-mockup.png'


export default function SectionTwo() {
  return (
    <div className=" bg-gradient-to-t from-gray-2/40 to-white flex items-center p-default-padding pb-0 gap-10">
      <Image src={bannerMockup} alt="Origin Banner Mockup" className="w-[600px]"/>
      <div className="max-w-[400px] flex flex-col gap-7">
        <h2 className="font-bold text-2xl">Experts from each <br></br> field worldwide.</h2>
        <p>We share common trends and strategies for improving your rental income and making sure you stay in high demand of service. </p>
        <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page. With lots of unique blocks, you can easily build a page without coding any other page.</p>
      </div>
    </div>
  )
}