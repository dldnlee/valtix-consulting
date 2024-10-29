// import promoImage from '@/app/assets/images/about-promo-image.webp'
import abstractImage from '@/app/assets/images/3d-abstract.webp'
import Image from 'next/image'




export default function SectionOne() {
  return (
    <div className="flex flex-col 2xl:p-default-padding p-medium-padding items-center gap-[100px] bg-white bg-white-abstract-pattern-5 bg-cover bg-center bg-no-repeat">
      <div className='flex 2xl:flex-row flex-col items-center justify-center gap-[100px]'>
        <Image src={abstractImage} alt="Abstract Layered 3d" className='w-[600px] transition animate-standby-hover'/>
        <div className="text-center flex flex-col gap-20">
          <div className='p-4 backdrop-blur-lg'>
            <h2 className="text-3xl font-bold">Our Mission</h2>
            <p className="max-w-[600px] text-md text-center">&quot;To empower startups and medium-sized enterprises with innovative strategies and advanced technological solutions that drive their growth and streamline their operations.&quot;</p>
          </div>
          <div className='backdrop-blur-lg p-4'>
            <h2 className="text-3xl font-bold">Our Vision</h2>
            <p className="max-w-[600px] text-md text-center">&quot;To be the go-to consulting partner for startups and medium enterprises, recognized for our commitment to delivering transformative results and fostering business excellence.&quot;</p>
          </div>
        </div>
      </div>
      <div className="flex 2xl:flex-row flex-col items-center gap-20 border-t-2 border-gray-3 2xl:px-[100px] p-medium-padding">
        <p className="2xl:text-3xl text-xl font-bold max-w-[450px]">We are here to help our clients reach their goals.</p>
        <div className="w-[1px] h-[300px] bg-gray-3 2xl:block hidden"></div>
        <div className="2xl:w-[500px] flex flex-col gap-5">
          <p>Valtix Consulting is an innovative consulting firm tailored to the unique needs of startups and medium-sized enterprises. </p>
          <p>We specialize in propelling early-stage companies to success and enhancing the operational effectiveness of more established mid-sized businesses. </p>
          <p>By leveraging cutting-edge strategies and technological advancements, Valtix Consulting empowers its clients to navigate market complexities and achieve sustainable growth.</p>
        </div>
      </div>
    </div>
  )
}