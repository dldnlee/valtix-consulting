
import { introBannerText } from "../text"

export default function SectionOne() {
  return (
    <div className="w-full h-[750px] bg-cyan-500 p-default-padding flex flex-col gap-6">
      <h1 className="text-3xl font-semibold leading-none">Get help from our expert consultants.</h1>
      <p>{introBannerText}</p>
    </div>
  )
}