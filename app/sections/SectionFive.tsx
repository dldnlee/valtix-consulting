import { ContactForm } from "../global-components/ContactForm"

export default function SectionFive() {
  return (
    <div className='lg:p-default-padding md:p-medium-padding flex flex-col items-center gap-10'>
      <div className='text-center'>
        <h2 className='text-2xl font-extrabold'>Give Us A Call</h2>
        <p>We can&apos;t wait to see what holds for the future of our partership.</p>
      </div>
      <ContactForm />
    </div>
  )
}