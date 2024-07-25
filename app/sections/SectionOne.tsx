
import { introBannerText } from "@/app/text"
import { Button } from "@/app/global-components/Buttons"
import skyline from '@/app/assets/images/night-skyline2.jpg'
import Image from "next/image"

export default function SectionOne() {
  return (
    <div className="
    w-full 
    h-[780px]
    gradient-with-bg text-white flex items-center overflow-hidden">
      <div className="lg:p-default-padding md:p-medium-padding absolute">
        <div className="flex flex-col gap-6 max-w-[500px]">
          <h1 className="text-3xl font-semibold leading-none">Get help from our expert consultants.</h1>
          <p>{introBannerText}</p>
          <Button text={"Contact Us Now"} padding={"p-4"} bgColor="bg-beige"/>
        </div>
      </div>
    </div>
  )
}