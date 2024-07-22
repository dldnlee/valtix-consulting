import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import originLogo from "@/app/assets/icons/origin-logo.svg";

const navigateItems = [
  {
    category: 'Services',
    path: '/services'
  },
  {
    category: 'About Us',
    path: '/about'
  },
  {
    category: 'Contact',
    path: '/contact'
  }
]

export default function GlobalNavigationBar() {
  const [GNBStyle, setGNBStyle] = useState('');
  const [focus, setFocus] = useState(false);
  const [scrolling, setScrolling] = useState(false);

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
  }, [focus, scrolling])

  return (
    <div 
      className={`z-20 group font-semibold flex w-full items-center hover:bg-gray-1 hover:text-white gap-20 px-10 py-5 fixed top-0 left-0 ${GNBStyle}`}>
      <Link href='/'>
        <Image src={originLogo} alt="Origin Consulting Group" className={`w-[120px] invert`}/>
      </Link>
      <ul className={`flex items-center gap-10`}>
        {
          navigateItems.map((item, idx) => {
            return (
              <li key={idx} className='text-md hover:text-beige'>
                <Link href={item.path} className='hover:text-point'>{item.category}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}