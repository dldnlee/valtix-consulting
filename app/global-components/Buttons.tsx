import Image from "next/image";

interface ButtonProps {
  text : string;
  padding : string;
}

export function Button({text, padding}: ButtonProps) {
  return (
    <button type="button" className={`${padding}`}>{text}
      {/* <Image src={} alt={'Arrow Icon'}/>  */}
    </button>
  )
}