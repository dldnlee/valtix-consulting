import SlidingBanner from "./components/SlidingBanner"

const reviews = [
  {
    review: "\"Valtix Consulting transformed our business strategy, driving impressive growth and efficiency. Highly recommended!\""
  },
  {
    review: "\"Their personalized approach and deep understanding of our needs made a significant difference. Outstanding service!\""
  },
  {
    review: "\"The team's innovative solutions and agile methods have taken our company to new heights. Exceptional consulting.\""
  },
  {
    review: "\"Valtix Consulting's commitment to excellence and client satisfaction is evident in every interaction. Top-notch professionals.\""
  },
  {
    review: "\"Valtix Consulting's sector-specific expertise and personalized approach make them stand out.\""
  },
]

export default function SectionFour() {
  return (
    <div className="w-full flex flex-col 2xl:gap-10 gap-5 items-center justify-center bg-white 2xl:py-10 py-5 bg-gradient-to-r from-gray-3 via-white to-gray-3">
      <h2 className="font-extrabold 2xl:text-2xl text-gray-1">Reviews from our partners</h2>
      <SlidingBanner>
        {
          reviews.map((item, index) => (
            <li key={index} className="2xl:w-[400px] w-[200px] font-extrabold 2xl:text-md text-sm text-gray-2">
              <p>{item.review}</p>
            </li>
          ))
        }
      </SlidingBanner> 
    </div>
  )
}