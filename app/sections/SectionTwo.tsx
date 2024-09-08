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
      <div className='flex 2xl:flex-row flex-col bg-gray-4 text-gray-1 2xl:p-default-padding p-medium-padding gap-20 items-center justify-center'>
        <div className='flex flex-col justify-center 2xl:gap-10 gap-5'>
          <h2 className='font-extrabold 2xl:text-3xl text-2xl'>Journey to Success</h2>
          <p className='max-w-[600px] 2xl:text-medium text-sm 2xl:leading-8'>{companyOverviewText}</p>
          <Button text={"Learn More"} padding={'p-[20px]'} bgColor='bg-beige' textColor='text-white' route='/services'/>
        </div>
        <div className='2xl:block hidden h-[500px] w-[1px] bg-black/20'></div>
        <ServiceSlider /> 
      </div>
      
    </div>
  )
}