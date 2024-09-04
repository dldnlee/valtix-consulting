import { ContactForm } from "../global-components/ContactForm"

export default function SectionFive() {
  return (
    <div className='2xl:p-default-padding p-medium-padding flex flex-col items-center gap-10 bg-white-abstract-pattern-2 bg-no-repeat bg-cover text-black bg-center md:py-[100px] lg:py-[100px]'>
      <div className='text-center'>
        <h2 className='2xl:text-3xl text-xl font-extrabold'>Give Us A Call</h2>
        <p className="2xl:text-md text-sm">We can&apos;t wait to see what holds for the future of our partership.</p>
      </div>
      <ContactForm />
    </div>
  )
}