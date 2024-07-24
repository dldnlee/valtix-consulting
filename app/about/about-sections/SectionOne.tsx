import promoImage from '@/app/assets/images/about-promo-image.png'
import Image from 'next/image'

export default function SectionOne() {
  return (
    <div className="flex flex-col p-default-padding md:p-medium-padding items-center gap-[100px] bg-white">
      <h1 className='text-4xl font-extrabold'>About Us</h1>
      <div className='flex items-center justify-center gap-[100px]'>
        <Image src={promoImage} alt="People Enjoying their work"/>
        <div className="text-center flex flex-col gap-20">
          <div>
            <h2 className="text-4xl font-extrabold">Our Mission</h2>
            <p className="w-[500px] text-center">&quot;To empower startups and medium-sized enterprises with innovative strategies and advanced technological solutions that drive their growth and streamline their operations.&quot;</p>
          </div>
          <div>
            <h2 className="text-4xl font-extrabold">Our Vision</h2>
            <p className="w-[500px] text-center">&quot;To empower startups and medium-sized enterprises with innovative strategies and advanced technological solutions that drive their growth and streamline their operations.&quot;</p>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-20">
        <p className="text-3xl font-bold w-[450px]">We are here to help our clients reach their goals.</p>
        <div className="w-[1px] h-[300px] bg-gray-3"></div>
        <div className="w-[500px] flex flex-col gap-5">
          <p>Origin Consulting Group is an innovative consulting firm tailored to the unique needs of startups and medium-sized enterprises. </p>
          <p>The firm specializes in propelling early-stage companies to success and enhancing the operational effectiveness of more established mid-sized businesses. </p>
          <p>By leveraging cutting-edge strategies and technological advancements, Origin Consulting Group empowers its clients to navigate market complexities and achieve sustainable growth.</p>
        </div>
      </div>
    </div>
  )
}