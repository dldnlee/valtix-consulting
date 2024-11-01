import maykel from '@/app/assets/images/Maykel.jpg'
import Image, { StaticImageData } from 'next/image'


function FounderCard() {
  return (
    <div className='flex 2xl:flex-row flex-col items-center 2xl:shadow-lg 2xl:w-[1100px] bg-gray-1 text-white'>
      <Image src={maykel} alt="" className='w-[400px]'/>
      <div className='flex flex-col gap-2 2xl:p-20 pt-10'>
        <div className='flex flex-col gap-1'>
          <h2 className='2xl:text-xl text-lg font-extrabold'>Maykel Soeharto, DipFA</h2>
          <h3 className='2xl:text-lg text-md font-bold'>Managing Director & Senior Partner</h3>
        </div>
        <div className='flex flex-col gap-5 max-w-[600px]'>
          <p>
            Maykel Soeharto founded Valtix Consulting with a clear mission to empower start-ups and medium-sized enterprises through innovative strategies and advanced technological solutions that drive growth and streamline operations. Recognizing a gap in the consulting landscape, he sought to address the unique challenges and opportunities faced by these businesses.
          </p>
          <p>
            With extensive experience in wealth management, management, and entrepreneurship, Maykel&apos;s goal is to provide tailored solutions for immediate and long-term success. He aims to establish Valtix Consulting as a trusted partner known for innovation, efficiency, and excellence, helping businesses thrive in today’s competitive landscape.
          </p>
        </div>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col items-center justify-center p-medium-padding 2xl:gap-20 gap-10 lg:py-[120px] md:py-[120px] bg-white">
      <div className="text-center">
        <h2 className="font-bold 2xl:text-3xl text-xl">Valtix Defined</h2>
        <p className="2xl:w-[600px] 2xl:text-md text-sm">The driving force behind innovative solutions and strategic growth. Our consultants are here to empower your business and deliver exceptional results.</p>
      </div>
      <FounderCard />
    </div>
  )
}
