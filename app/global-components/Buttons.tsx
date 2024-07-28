import Image from "next/image";
import rightArrow from "@/app/assets/icons/right-arrow.png"
import Link from "next/link";

interface ButtonProps {
  text : string;
  padding : string;
  bgColor: string;
  textColor?: string;
  route: string;
}

export function Button({text, padding, bgColor, textColor, route}: ButtonProps) {


  return (
    <Link 
    href={route}
    type="button" className={`${padding} ${bgColor} ${textColor} group opacity-75 hover:opacity-100 w-fit flex gap-10 justify-center items-center rounded-lg font-semibold text-lg`}>{text}
      <Image className="invert group-hover:translate-x-1 transition-transform motion-reduce:transition-none" src={rightArrow} alt={'Arrow Icon'} width={20}/> 
    </Link>
  )
}