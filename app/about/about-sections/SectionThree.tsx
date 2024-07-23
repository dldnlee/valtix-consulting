

const members = [
  {
    name: "Maykel Soeharto",
    position: "Founder"
  },
  {
    name: "Maykel Soeharto",
    position: "Founder"
  },
  {
    name: "Maykel Soeharto",
    position: "Founder"
  }
]

function MemberCard({name, position} : {name: string, position: string}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="w-[300px] h-[400px] bg-gray-3 rounded-2xl"></div>
      <div>
        <h3 className="font-semibold">{name}</h3>
        <p className="font-extralight">{position}</p>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col items-center justify-center lg:p-default-padding md:p-medium-padding gap-20">
      <div className="text-center">
        <h2 className="font-bold text-2xl">Meet our team</h2>
        <p className="max-w-[600px]">We are the driving force behind innovative solutions and strategic growth. Our consultants are here to empower your business and deliver exceptional results.</p>
      </div>
      <div className="flex gap-10">
        {
          members.map((item, index) => (
            <MemberCard key={index} name={item.name} position={item.position}/>
          ))
        }
      </div>
    </div>
  )
}