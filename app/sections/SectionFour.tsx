import SlidingBanner from "./components/SlidingBanner"
import Image from "next/image"
import partner1 from "@/app/assets/icons/partner-logos/craves_logo.png";
import partner2 from "@/app/assets/icons/partner-logos/milieu_logo.png";
import partner3 from "@/app/assets/icons/partner-logos/gro_logo.png";
import partner4 from "@/app/assets/icons/partner-logos/lua_logo.png";


const partnerLogos = [
  {
    logo: partner1
  },
  {
    logo: partner2
  },
  {
    logo: partner3
  },
  {
    logo: partner4
  },
]

export default function SectionFour() {
  return (
    <div className="w-full flex flex-col 2xl:gap-10 gap-5 items-center justify-center bg-white 2xl:py-10 py-5 bg-gradient-to-r from-gray-3 via-white to-gray-3">
      <h2 className="font-extrabold 2xl:text-3xl text-xl text-gray-1">Our Partners</h2>
      <SlidingBanner>
        {
          partnerLogos.map((item, index) => (
            <li key={index} className=" font-extrabold 2xl:text-md text-sm text-gray-2">
              <Image src={item.logo} alt="Partner Logo" className="2xl:w-[200px] w-[100px]"/>
              {/* <p>{item.review}</p> */}
            </li>
          ))
        }
      </SlidingBanner> 
    </div>
  )
}