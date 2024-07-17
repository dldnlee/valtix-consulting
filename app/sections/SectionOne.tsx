
import { introBannerText } from "@/app/text"
import { Button } from "@/app/global-components/Buttons"

export default function SectionOne() {
  return (
    <div className="w-full h-[750px] bg-cyan-500  text-white p-default-padding flex items-center">
      <div className="flex flex-col gap-6 max-w-[500px]">
        <h1 className="text-3xl font-semibold leading-none">Get help from our expert consultants.</h1>
        <p>{introBannerText}</p>
        <Button text={"Contact Us Now"} padding={"p-4"} bgColor="bg-beige"/> 
      </div>
    </div>
  )
}