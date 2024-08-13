import ServiceSlider from './components/ServiceSlider';
import { companyOverviewText } from '../text';
import { Button } from '../global-components/Buttons';

// Main Section
export default function SectionTwo() {
  return (
    <div className=''>
      {/* <PromoBanner /> */}
      <div className='flex lg:flex-row md:flex-col bg-gray-4 text-gray-1 p-default-padding gap-20 items-center justify-center'>
        <div className='flex flex-col justify-center gap-10'>
          <h2 className='font-extrabold text-3xl'>Journey to Success</h2>
          <p className='w-[600px] leading-8'>{companyOverviewText}</p>
          <Button text={"Learn More"} padding={'p-[20px]'} bgColor='bg-beige' textColor='text-white' route='/services'/>
        </div>
        <div className='h-[500px] w-[1px] bg-black/20 lg:block md:hidden'></div>
        <ServiceSlider /> 
      </div>
      
    </div>
  )
}