


export default function SectionOne() {
  return (
    <div className="flex flex-col p-default-padding md:p-medium-padding items-center gap-10">
      <div className="text-center">
        <h1 className="text-3xl font-extrabold">Our Mission</h1>
        <p className="max-w-[500px] text-center">&quot;To empower startups and medium-sized enterprises with innovative strategies and advanced technological solutions that drive their growth and streamline their operations.&quot;</p>
      </div>
      <div className="w-[1100px] h-[400px] bg-gray-3"></div>
      <div className="flex items-center gap-20">
        <p className="text-2xl font-bold max-w-[450px]">We are here to help our clients reach their goals.</p>
        <div className="w-[1px] h-[300px] bg-gray-3"></div>
        <div className="max-w-[500px] flex flex-col gap-5">
          <p>Origin Consulting Group is an innovative consulting firm tailored to the unique needs of startups and medium-sized enterprises. </p>
          <p>The firm specializes in propelling early-stage companies to success and enhancing the operational effectiveness of more established mid-sized businesses. </p>
          <p>By leveraging cutting-edge strategies and technological advancements, Origin Consulting Group empowers its clients to navigate market complexities and achieve sustainable growth.</p>
        </div>
      </div>
    </div>
  )
}