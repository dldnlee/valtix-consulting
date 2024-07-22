import SlidingBanner from "./components/SlidingBanner"

const reviews = [
  {
    review: "\"Origin Consulting transformed our business strategy, driving impressive growth and efficiency. Highly recommended!\""
  },
  {
    review: "\"Their personalized approach and deep understanding of our needs made a significant difference. Outstanding service!\""
  },
  {
    review: "\"The team's innovative solutions and agile methods have taken our company to new heights. Exceptional consulting.\""
  },
  {
    review: "\"Origin Consulting's commitment to excellence and client satisfaction is evident in every interaction. Top-notch professionals.\""
  },
  {
    review: "\"Origin Consulting's sector-specific expertise and personalized approach make them stand out.\""
  },
  
]

// function ContactCard() {
//   return (

//   )
// }

export default function SectionFour() {
  return (
    <div className="w-full flex flex-col gap-14 items-center justify-center bg-white py-10">
      <h2 className="font-extrabold text-2xl text-gray-2">Reviews from our partners</h2>
      <SlidingBanner>
        {
          reviews.map((item, index) => (
            <li key={index} className="w-[400px] font-extrabold">
              <p>{item.review}</p>
            </li>
          ))
        }
      </SlidingBanner> 
    </div>
  )
}