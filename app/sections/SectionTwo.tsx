
import ServiceSlider from './components/ServiceSlider';
import { companyOverviewText } from '../text';

// Types
type PromoTextProps = {
  heading: string;
  subheading: string;
}

// Data 
const promoText = [
  {
    heading: "1M+",
    subheading: "We have visitors from all over the world"
  },
  {
    heading: "93%",
    subheading: "Satisfaction rate from our customers."
  },
  {
    heading: "4.9",
    subheading: "Average customer ratings out of 5"
  },
]

// Components
function PromoBanner() {
  return (
    <div className="w-full flex items-center justify-center gap-3 py-10 border-b bg-gray-1 text-beige">
      {promoText.map((item, index) => (
        <div key={index} className="flex items-center gap-5 p-5">
          <h1 className="font-extrabold text-2xl">{item.heading}</h1>
          <p className="font-light max-w-[200px]">{item.subheading}</p>
        </div>
      ))}
    </div>
  )
}

// Main Section
export default function SectionTwo() {
  return (
    <div className=''>
      <PromoBanner />
      <div className='flex lg:flex-row md:flex-col bg-gray-4 text-gray-1 p-default-padding gap-20 items-center justify-center'>
        <div className='flex flex-col justify-center'>
          <h2 className='font-extrabold text-3xl mb-10'>Journey to Success</h2>
          <p className='w-[600px] leading-8'>{companyOverviewText}</p>
        </div>
        <div className='h-[500px] w-[1px] bg-black/20 lg:block md:hidden'></div>
        <ServiceSlider /> 
      </div>
    </div>
  )
}