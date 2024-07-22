import SlidingBanner from "./components/SlidingBanner"

const reviews = [
  {
    review: "Origin Consulting transformed our business strategy, driving impressive growth and efficiency. Highly recommended!"
  },
  {
    review: "Their personalized approach and deep understanding of our needs made a significant difference. Outstanding service!"
  },
  {
    review: "The team's innovative solutions and agile methods have taken our company to new heights. Exceptional consulting."
  },
  {
    review: "Origin Consulting's commitment to excellence and client satisfaction is evident in every interaction. Top-notch professionals."
  },
  {
    review: "Origin Consulting's sector-specific expertise and personalized approach make them stand out."
  },
  
]

function Reviews() {
  return (
    <div>
      
    </div>
  )
}

export default function SectionFour() {
  return (
    <div>
      <SlidingBanner>
        {
          reviews.map((item, index) => (
            <li key={index}>
              <p>{item.review}</p>
            </li>
          ))
        }
      </SlidingBanner> 
    </div>
  )
}