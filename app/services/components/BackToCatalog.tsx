import Link from "next/link"
import Image from "next/image"
import leftArrow from "@/app/assets/icons/circle-arrow-left.svg"


export default function BackToCatalog() {
  return (
    <div className="p-default-padding">
      <Link href="/services" className="text-xl flex gap-3 group hover:text-beige"><Image src={leftArrow} alt="Left arrow" className="w-[30px]" />Back to Catalog</Link>
    </div>
  )
}