import { useEffect, useState } from "react"
import Link from "next/link";
import Image from "next/image";
import originLogo from "@/app/assets/icons/origin-logo.svg";
import rightTriangle from "@/app/assets/icons/right-triangle.svg"

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

const serviceItems = [
  {
    service: 'Startup Advisory',
    path: '/services'
  },
  {
    service: 'Medium Enterprise',
    path: '/services'
  },
  {
    service: 'Operational Efficiency',
    path: '/services'
  },
  {
    service: 'Digital Transformation',
    path: '/services'
  },
  {
    service: 'Strategy Consulting',
    path: '/services'
  },
]

export default function GlobalNavigationBar() {
  const [GNBStyle, setGNBStyle] = useState('');
  const [dropDown, setDropDown] = useState(false);
  const [focus, setFocus] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  // function listenScrollEvent() {
  //   if (window.scrollY > 1) {
  //     setGNBStyle('bg-gray-1 text-white shadow-md')
  //   } else {
  //     setGNBStyle('bg-none text-white')
  //   }
  // }

  function listenScrollEvent() {
    if (window.scrollY > 1) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  useEffect(() => {
    
  })

  useEffect(() => {
    const link = window.location.pathname;
    if(link === '/') {
      setGNBStyle('bg-none text-white');
      window.addEventListener('scroll', listenScrollEvent);
    } 
    else {
      setGNBStyle('bg-gray-1 text-white shadow-md sticky');
    }
    return (() => {
      window.removeEventListener('scroll', listenScrollEvent);
    })
  }, [dropDown])

  return (
    <div 
    onMouseEnter={() => {setFocus(true)}}
    onMouseLeave={() => {setFocus(false)}}
    className="fixed top-0 left-0 z-10 w-full ">
      <div 
        className={`z-10 font-semibold flex w-full items-center gap-20 py-6 ${GNBStyle} ${focus || scrolling ? 'bg-gray-1 text-white shadow-md sticky' : 'bg-none'} px-[200px]`}>
        <Link href='/'>
          <Image src={originLogo} alt="Origin Consulting Group" className={`w-[120px] invert`}/>
        </Link>
        <ul className={`flex items-center gap-10`}>
          {
            navigateItems.map((item, idx) => {
              return item.category === "Services" ? (
                <li 
                key={idx} 
                className='text-md hover:text-beige flex items-center justify-center gap-3'
                onMouseEnter={() => {setDropDown(true)}}
                >
                  <Link 
                  href={item.path} 
                  className='hover:text-point'>{item.category}</Link>
                  <Image src={rightTriangle} alt="right triangle" className={`w-[5px] ${dropDown ? '-rotate-90' : 'rotate-90'} transition-transform`}/> 
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
      <div 
      onMouseLeave={() => {setDropDown(false)}}
      className={`bg-gray-1 mx-auto w-2/3 h-[200px] text-white left-0 -top-full rounded-b-2xl ${dropDown ? 'block' : 'hidden'} p-4`}>
        <h3 className="text-2xl pb-5">Our Services</h3>
        <ul className="grid grid-rows-3 grid-cols-3 gap-5">
          {
            serviceItems.map((item, index) => (
              <li key={index} className="hover:text-beige hover:underline underline-offset-4">
                <Link href={item.path}>
                  {item.service}
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    </div>
  )
}