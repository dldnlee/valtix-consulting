import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import originLogo from "@/app/assets/icons/origin-logo.svg";

const navigateItems = [
  {
    category: 'Main',
    path: '/'
  },
  {
    category: 'Services',
    path: '/services',
  },
  {
    category: 'About Us',
    path: '/about'
  },
]

export default function GlobalNavigationBar() {
  const [GNBStyle, setGNBStyle] = useState('');
  const [focus, setFocus] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [selectedTab, setSelectedTab] = useState('/');

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

  useEffect(() => {
    const link = window.location.pathname;
    if(link === '/') {
      setSelectedTab('/');
    } else if(link === '/services') {
      setSelectedTab('/services');
    } else if(link === '/about') {
      setSelectedTab('/about');
    }
  }, [])

  return (
    <div 
      className={`z-20 group font-semibold flex w-full items-center hover:bg-gray-1 hover:text-white gap-20 py-6 fixed top-0 left-0 ${GNBStyle} px-[200px]`}>
      <Link href='/'>
        <Image src={originLogo} alt="Origin Consulting Group" className={`w-[120px] invert`}/>
      </Link>
      <ul className={`flex items-center gap-10`}>
        {
          navigateItems.map((item, idx) => {
            return (
              <li key={idx} className={`text-md hover:text-beige ${selectedTab === item.path ? 'border-b border-beige text-beige box-content' : ''}`}>
                <Link href={item.path} className='hover:text-point'>{item.category}</Link>
              </li>
            )
          })
        }
      </ul>
    </div>
  )
}