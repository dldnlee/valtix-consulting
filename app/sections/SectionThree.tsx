
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
      <p className="px-4 h-fit py-1 rounded-full w-fit bg-gray-1 text-white text-center">{index}</p>
      <div>
        <h3 className="text-[21px] font-bold text-beige">{heading}</h3>
        <p className="text-[14px] max-w-[339px]">{subheading}</p>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="bg-black-pattern-2 bg-cover bg-center bg-no-repeat flex flex-col gap-14 py-[100px] items-center p-default-padding md:p-medium-padding lg:py-[100px] bg-gray-1 text-white">
      <div className="w-fit text-center flex flex-col justify-center items-center gap-4">
        <h2 className="text-3xl font-extrabold text-beige border-b-4 border-beige">Why choose us?</h2>
        <p className="max-w-[600px]">Origin Consulting Group stands out for its specialized focus on startups and medium-sized businesses, combining sector-specific insights with a personalized approach to consulting.</p>
      </div>
      <div className="w-full h-full flex gap-20 justify-center items-center">
        <iframe width="723" height="436" src="https://www.youtube.com/embed/VCPGMjCW0is?si=gm5rW4C-WEHsvGit" title="Origin Promotional Video" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <div className="w-[1px] h-[400px] bg-gray-4/50"></div>
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