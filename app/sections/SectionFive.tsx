import { ContactForm } from "../global-components/ContactForm"

export default function SectionFive() {
  return (
    <div className='lg:p-default-padding md:p-medium-padding flex flex-col items-center gap-10 bg-white-abstract-pattern-2 bg-no-repeat bg-cover text-black bg-center md:py-[100px] lg:py-[100px]'>
      <div className='text-center'>
        <h2 className='text-3xl font-extrabold'>Give Us A Call</h2>
        <p>We can&apos;t wait to see what holds for the future of our partership.</p>
      </div>
      <ContactForm />
    </div>
  )
}