import logo from '@/app/assets/icons/origin-logo.svg'
import Image from 'next/image'
import Link from 'next/link'


export function Footer() {
  return (
    <footer className="w-full flex flex-col bg-gray-1 py-[50px] font-extralight p-default-padding gap-8 text-beige border-t">
      <div className='w-full flex justify-between '>
        <div className='w-full flex flex-col gap-4'>
          <Image src={logo} alt="Origin Logo" className='w-[100px] invert'/>
          <p className='text-foot w-1/2'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident accusantium vitae, temporibus eum, exercitationem quisquam deleniti laudantium, illum ex ratione sit.</p>
        </div>
        <ul className='w-full flex justify-end gap-10 text-body-2'>
          <li>
            <Link href='/'>
            MAIN
            </Link></li>
          <li>
            <Link href='/services'>
            SERVICES
            </Link></li>
          <li>
            <Link href='/about'>
            ABOUT US
            </Link></li>
          <li>
            <Link href='/contact'>
            CONTACT
            </Link></li>
        </ul>
      </div>
      <hr className='border border-gray-300/20 w-full'/>
      <p className='text-foot'>© 2024 Origin Consulting Group. All rights reserved</p>
    </footer>
  )
}