import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import originLogo from "@/app/assets/icons/origin-logo.svg";
import rightTriangle from "@/app/assets/icons/right-triangle.svg"

const navigateItems = [
  {
    category: 'Home',
    path: '/'
  },
  {
    category: 'Services',
    path: '/services'
  },
  {
    category: 'About Us',
    path: '/about'
  },
]

export default function GlobalNavigationBar() {
  const [GNBStyle, setGNBStyle] = useState('');
  const [dropDown, setDropDown] = useState(false);

  function listenScrollEvent() {
    if (window.scrollY > 1) {
      setGNBStyle('bg-gray-1 text-white shadow-md')
    } else {
      setGNBStyle('bg-none text-white')
    }
  }

  useEffect(() => {
    const link = window.location.pathname;
    if(link === '/') {
      setGNBStyle('bg-none text-white');
      window.addEventListener('scroll', listenScrollEvent);
    } else {
      setGNBStyle('bg-gray-1 text-white shadow-md sticky');
    }
    return (() => {
      window.removeEventListener('scroll', listenScrollEvent);
    })
  }, [])

  return (
    <div className="fixed top-0 left-0 z-10 w-full">
      <div 
        className={`z-10 font-semibold flex w-full items-center hover:bg-gray-1 hover:text-white gap-20 py-6 ${GNBStyle} px-[200px]`}>
        <Link href='/'>
          <Image src={originLogo} alt="Origin Consulting Group" className={`w-[120px] invert`}/>
        </Link>
        <ul className={`flex items-center gap-10`}>
          {
            navigateItems.map((item, idx) => {
              return item.category === "Services" ? (
                <li 
                key={idx} 
                className='text-md hover:text-beige flex items-center justify-center gap-3 group'
                onMouseEnter={() => {setDropDown(true)}}
                onMouseLeave={() => {setDropDown(false)}}>
                  <Link 
                  href={item.path} 
                  
                  className='hover:text-point'>{item.category}</Link>
                  <Image src={rightTriangle} alt="right triangle" className="w-[5px] rotate-90 group-hover:-rotate-90 transition-transform"/> 
                </li>
              ) : (
                <li key={idx} className='text-md hover:text-beige'>
                  <Link href={item.path} className='hover:text-point'>{item.category}</Link>
                </li>
              )
            })
          }
        </ul>
      </div>
      <div className={`bg-black mx-auto w-2/3 h-[200px] left-0 -top-full ${dropDown ? 'block' : 'hidden'}`}></div>
    
    </div>
  )
}