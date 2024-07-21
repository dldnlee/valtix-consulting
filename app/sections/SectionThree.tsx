
const sellingPoints = [
  {
    heading: 'Agility and Innovation',
    subheading: 'We keep our clients ahead with agile, innovative strategies that adapt to market changes.'
  },
  {
    heading: 'Client-Centric Approach',
    subheading: "We prioritize understanding and addressing each client's specific needs."
  },
  {
    heading: 'Integrity and Transparency',
    subheading: 'We uphold the highest ethical standards to build trust and strong partnerships.'
  },
]

interface SellingPointProps {
  index: number,
  heading: string,
  subheading: string
}


function SellingPoint({index, heading, subheading}: SellingPointProps) {
  return (
    <div className="flex gap-4">
      <p className="px-4 h-fit py-1 rounded-full w-fit bg-black text-white text-center">{index}</p>
      <div>
        <h3 className="text-[21px] font-bold">{heading}</h3>
        <p className="text-[14px] max-w-[339px]">{subheading}</p>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col gap-4 py-[100px]">
      <div className="text-center flex flex-col justify-center items-center gap-4 pb-20">
        <h2 className="text-2xl font-extrabold">Why you should choose us?</h2>
        <p className="max-w-[600px]">Origin Consulting Group stands out for its specialized focus on startups and medium-sized businesses, combining sector-specific insights with a personalized approach to consulting.</p>
      </div>
      <div className="w-full h-full flex gap-10 justify-center items-center">
        <div className="min-w-[723px] min-h-[436px] bg-gray-3 rounded-lg"></div>
        <div className="flex flex-col gap-14">
          {
            sellingPoints.map((item, index) => (
              <SellingPoint key={index} index={index+1} heading={item.heading} subheading={item.subheading} />
            ))
          }
        </div>
      </div>

    </div>
  )
}