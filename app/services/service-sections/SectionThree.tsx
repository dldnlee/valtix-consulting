// import backgroundImage from "@/app/assets/images/cropped-business-people-discussing-charts-diagrams-office.jpg"

const keypoints = [
  {
    heading: "Market Expansion",
    text: "We analyse market trends and customer needs to identify new growth opportunities, helping you expand into new markets or segments effectively."
  },
  {
    heading: "Operational Scalability",
    text: "Our strategic advice ensures your operations are scalable, supporting growth without compromising efficiency or quality."
  },
  {
    heading: "Innovation Management",
    text: "We assist you in fostering a culture of innovation that continuously propels your business forward."
  }
]

function Keypoint({heading, text} : {heading: string, text: string}) {
  return (
    <div className="px-[20px] py-[40px] w-[420px] flex flex-col items-center justify-start bg-white text-center gap-4 shadow-lg">
      <h2 className="text-xl font-bold border-b border-beige">{heading}</h2>
      <p>{text}</p>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="services-img-bg bg-cover bg-center bg-no-repeat lg:p-default-padding md:p-medium-padding flex flex-col items-center justify-center gap-20 lg:py-[150px] md:py-[150px]">
      <div className="flex items-center justify-center gap-10">
        <h2 className="w-[470px] text-3xl font-bold">Growth Strategy for Medium Enterprises</h2>
        <div className="w-[2px] h-[100px] bg-gray-2"></div>
        <p className="w-[600px]">Our Growth Strategy services are designed to help established medium-sized enterprises identify new opportunities and expand their market presence. We provide the insights and tools needed to navigate market complexities and accelerate growth.</p>
      </div>
      <div className="flex gap-10">
        {
          keypoints.map((item, index) => (
            <Keypoint key={index} heading={item.heading} text={item.text} /> 
          ))
        }
      </div>
    </div>
  )
}