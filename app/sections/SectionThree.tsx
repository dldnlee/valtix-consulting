

function SellingPoint() {
  return (
    <div className="flex gap-4">
      <p className="px-4 h-fit py-1 rounded-full w-fit bg-black text-white text-center">1</p>
      <div>
        <h3 className="text-[21px] font-bold">Easy Booking</h3>
        <p className="text-[14px] max-w-[339px]">With lots of unique blocks, you can easily build a page without coding. </p>
      </div>
    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col gap-4 py-[100px]">
      <div className="text-center flex flex-col justify-center items-center gap-4 pb-20">
        <h2 className="text-2xl font-extrabold">Why you should choose us?</h2>
        <p className="max-w-[600px]">Origin Consulting Group stands out for its specialized focus on startups and medium-sized businesses, combining sector-specific insights with a personalized approach to consulting.</p>
      </div>
      <div className="w-full h-full flex gap-10 justify-center">
        <div className="min-w-[723px] min-h-[436px] bg-gray-3"></div>
        <div>
          <SellingPoint /> 
        </div>
      </div>

    </div>
  )
}