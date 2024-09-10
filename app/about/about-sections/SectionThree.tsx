import maykel from '@/app/assets/images/Maykel.jpg'
import andrew from '@/app/assets/images/Andrew.jpg'
import georgio from '@/app/assets/images/Giorgio.jpg'
import Image, { StaticImageData } from 'next/image'

const members = [
  {
    name: "Maykel Soeharto",
    position: "Founder",
    profilePic: maykel
  },
  {
    name: "Andrew",
    position: "Founder",
    profilePic: andrew
  },
  {
    name: "Georgio",
    position: "Founder",
    profilePic: georgio
  }
]

function MemberCard({name, position, profilePic} : {name: string, position: string, profilePic: StaticImageData}) {
  return (
    <div className="flex flex-col gap-10">
      <Image src={profilePic} alt={name} className='w-[300px] h-[400px] rounded-2xl object-cover shadow-xl shadow-gray-2'/>
      <div>
        <h3 className="font-semibold text-lg">{name}</h3>
        <p className="font-extralight">{position}</p>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col items-center justify-center lg:p-default-padding p-medium-padding gap-20 lg:py-[120px] md:py-[120px] bg-white">
      <div className="text-center">
        <h2 className="font-bold 2xl:text-3xl text-2xl">Meet our team</h2>
        <p className="2xl:w-[600px] ">We are the driving force behind innovative solutions and strategic growth. Our consultants are here to empower your business and deliver exceptional results.</p>
      </div>
      <div className="flex gap-20 2xl:flex-row flex-col">
        {
          members.map((item, index) => (
            <MemberCard key={index} name={item.name} position={item.position} profilePic={item.profilePic}/>
          ))
        }
      </div>
    </div>
  )
}