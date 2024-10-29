import ServiceSlider from './components/ServiceSlider';
import { companyOverviewText } from '../text';
import { Button } from '../global-components/Buttons';

// Main Section
export default function SectionTwo() {
  return (
    <div className=''>
      {/* <PromoBanner /> */}
      <div className='flex 2xl:flex-row flex-col bg-gray-4 text-gray-1 2xl:p-default-padding p-medium-padding gap-20 items-center justify-center'>
        <div className='flex flex-col justify-center 2xl:gap-10 gap-5 p-4'>
          <h2 className='font-extrabold 2xl:text-3xl text-2xl'>Journey to Success</h2>
          <p className='max-w-[600px] w-full 2xl:text-md text-sm 2xl:leading-8'>{companyOverviewText}</p>
          <Button text={"Learn More"} padding={'p-[20px]'} bgColor='bg-none text-black border border-2 border-gray-2' route='/services'/>
        </div>
        <div className='2xl:block hidden h-[500px] w-[1px] bg-black/20'></div>
        <ServiceSlider /> 
      </div>
      
    </div>
  )
}