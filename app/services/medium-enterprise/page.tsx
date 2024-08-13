import Link from "next/link"
import Image from "next/image"
import ServicePagination from "../components/ServicePagination"
import DividingText from "../components/DividingText"
import BackToCatalog from "../components/BackToCatalog"



const keypoints = [
  {
    keypoint: 'Market Expansion',
    text: 'We analyze market trends and customer needs to identify new growth opportunities, helping you expand into new markets or segments effectively. Our team conducts in-depth research to pinpoint the best opportunities for your business, ensuring that your expansion efforts are strategically targeted and poised for success. With our guidance, you can confidently enter new markets and achieve sustained growth.'
  },
  {
    keypoint: 'Operational Scalability',
    text: 'Our strategic advice ensures your operations are scalable, supporting growth without compromising efficiency or quality. We assess your current operational processes and identify areas for improvement, implementing strategies that enable your business to handle increased demand seamlessly. By optimizing your operations, we help you maintain high standards of performance and customer satisfaction as you grow.'
  },
  {
    keypoint: 'Innovation Management',
    text: 'We assist you in fostering a culture of innovation that continuously propels your business forward. Our services include developing innovation strategies, implementing processes to encourage creative thinking, and managing new product or service development. By cultivating an environment that prioritizes innovation, we help you stay ahead of the competition and drive continuous improvement within your organization.'
  },
]



export default function MediumEnterprises() {
  return (
    <div className="pt-[80px] bg-white">
      <BackToCatalog />
      <hr className="border-black/20"/>
      <div className="p-default-padding  flex flex-col gap-10">
        <h1 className="text-3xl w-[500px]">Growth Strategy for Medium Enterprise</h1>
        <p className="text-md w-[530px] leading-8">Our Growth Strategy services are designed to help established medium-sized enterprises identify new opportunities and expand their market presence. We provide the insights and tools needed to navigate market complexities and accelerate growth.</p>
      </div>
      <DividingText text="How We Help"/>
      <div className="p-default-padding flex flex-col gap-10">
        {
          keypoints.map((item, idx) => (
            <div key={idx} className="w-[800px] flex flex-col gap-3">
              <p className="text-xl font-semibold ">{item.keypoint}</p>
              <p className="text-lg leading-8">{item.text}</p>
            </div>
          ))
        }
      </div>
      <DividingText text="Explore Our Services" styling='w-[700px]'/>
      <ServicePagination 
      text1="Startup Advisory" 
      link1="/services/startup-advisory"
      text2="Operational Efficiency"
      link2="/services/operational-efficiency" />
    </div>
  )
}