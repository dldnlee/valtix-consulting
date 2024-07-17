
import ServiceSlider from './components/ServiceSlider';

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
    <div className="w-full flex items-center justify-center gap-3 py-10 border-b bg-white">
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
    <div>
      <PromoBanner />
      <ServiceSlider /> 
    </div>
  )
}