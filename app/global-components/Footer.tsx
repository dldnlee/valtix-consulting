import logo from '@/app/assets/icons/origin-logo.svg'
import Image from 'next/image'
import Link from 'next/link'


export function Footer() {
  return (
    <footer className="w-full flex flex-col bg-gray-1 py-[100px] font-extralight lg:p-default-padding md:p-medium-padding gap-8 text-gray-3 border-t">
      <div className='w-full flex justify-between '>
        <div className='w-full flex flex-col gap-4'>
          <Image src={logo} alt="Origin Logo" className='w-[100px] invert'/>
          <p className='lg:text-sm w-[400px] md:text-xs'>Origin Consulting Group is a consulting firm focused on startups and medium-sized businesses. It helps early-stage companies succeed and improves the operations of mid-sized enterprises using advanced strategies and technology, enabling clients to navigate market challenges and achieve sustainable growth.</p>
        </div>
        <ul className='w-full flex justify-end gap-10 text-body-2'>
          <li className='hover:text-beige'>
            <Link href='/'>
            MAIN
            </Link></li>
          <li className='hover:text-beige'>
            <Link href='/services'>
            SERVICES
            </Link></li>
          <li className='hover:text-beige'>
            <Link href='/about'>
            ABOUT US
            </Link></li>
          <li className='hover:text-beige'>
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