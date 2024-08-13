import ServiceSlider from './components/ServiceSlider';
import { companyOverviewText } from '../text';
import { Button } from '../global-components/Buttons';
import Link from 'next/link';
import Image from 'next/image';
import rightArrow from '@/app/assets/icons/right-arrow.png'

// Main Section
export default function SectionTwo() {
  return (
    <div className=''>
      {/* <PromoBanner /> */}
      <div className='flex lg:flex-row md:flex-col bg-gray-4 text-gray-1 p-default-padding gap-20 items-center justify-center'>
        <div className='flex flex-col justify-center gap-5'>
          <h2 className='font-extrabold text-2xl'>Journey to Success</h2>
          <p className='w-[500px] leading-8'>{companyOverviewText}</p>
          <Link href="/services" className='border border-black group w-fit p-5 flex items-center justify-center gap-4 hover:border-beige hover:text-beige'>Learn More<Image src={rightArrow} alt='right arrow' className='w-[16px] group-hover:translate-x-1 transition-all'/></Link>
        </div>
        <div className='h-[500px] w-[1px] bg-black/20 lg:block md:hidden'></div>
        <ServiceSlider /> 
      </div>
      
    </div>
  )
}