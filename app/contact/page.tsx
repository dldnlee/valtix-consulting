import { ContactForm } from "../global-components/ContactForm"
import Image from "next/image"
import bigLogo from '@/app/assets//icons/origin-logo-big.svg'

export default function Contact() {
  return (
    <div className="p-default-padding lg:p-default-padding md:p-medium-padding flex flex-col gap-14">
      <div className="flex items-center justify-center gap-20">
        <Image src={bigLogo} alt="Big Logo" className="w-[250px]"/>
        <div className='h-[200px] w-[1px] bg-black/20'></div>
        <div>
          <h1 className="text-3xl font-extrabold">Contact Us</h1>
          <p className="text-md max-w-[500px]">We&apos;d love to hear from you! Whether you have questions about our services, need advice, or want to explore how we can help your business grow, our team at Origin Consulting Group is here to assist.</p>
        </div>
      </div>
      <div className="w-full">
        <ContactForm /> 
      </div>
    </div>
  )
}