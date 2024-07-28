'use client'
import location from '@/app/assets/icons/location.png'
import email from '@/app/assets/icons/email.png'
import phone from '@/app/assets/icons/phone.png'
import discord from '@/app/assets/icons/discord.png'
import twitter from '@/app/assets/icons/twitter.png'
import instagram from '@/app/assets/icons/instagram.png'
import { StaticImageData } from 'next/image'
import Image from 'next/image'
// import { FormEvent } from 'react'

const contactInfo = [
  {
    type: 'Headquarters',
    info: 'Tallinn, Estonia',
    img: location
  },
  {
    type: 'Email Address',
    info: 'client@originconsultinggroup.com',
    img: email
  },
]

const socialInfo = [
  {
    img: twitter
  },
  {
    img: instagram
  },
  {
    img: discord
  },
]

function SocialButtons({ img }: { img: StaticImageData }) {
  return (
    <div className=' bg-black w-fit rounded-full hover:bg-white p-2 group size-[20px] hidden'>
      {/* <Image src={img} alt="" className='size-[20px] invert group-hover:invert-0' /> */}
    </div>
  )
}

function Info({ img, info }: { img: StaticImageData, info: string }) {
  return (
    <div className='flex items-center gap-6'>
      <Image src={img} alt="" className='size-[30px] invert' />
      <p className='text-body-1'>{info}</p>
    </div>
  )
}

function InfoContainer() {
  return (
    <div className='flex flex-col gap-6 text-lg'>
      {contactInfo.map((item, idx) => (
        <Info key={idx} img={item.img} info={item.info} />
      ))}
    </div>
  )
}

function SocialContainer() {
  return (
    <div className='flex gap-6'>
      {socialInfo.map((item, idx) => (
        <SocialButtons key={idx} img={item.img} />
      ))}
    </div>
  )
}

export function ContactForm() {

  async function handleSubmit(event : any) {

    event.preventDefault();
    const formData = new FormData(event.target)
    console.log(formData.get('email'));
    try {
        const response = await fetch('/api/contact', {
            method: 'post',
            body: formData,
        });
        if (!response.ok) {
            console.log("falling over")
            throw new Error(`response status: ${response.status}`);
        }
        const responseData = await response.json();
        console.log(responseData['message'])

        alert('Message successfully sent');
    } catch (err) {
        console.error(err);
        alert("Error, please try resubmitting the form");
    }
  };

  return (
    <div className="w-full h-full flex shadow-2xl">
      <div className="w-[40%] bg-gray-1 text-white p-8 flex flex-col justify-between rounded-s-xl">
        <div>
          <h1 className='text-2xl font-semibold'>Contact Information</h1>
          <p className='text-md'>We are always excited to assist you!</p>
        </div>
        <InfoContainer />
        <SocialContainer />
      </div>
      <form onSubmit={handleSubmit} className='w-[60%] p-10 gap-10 flex flex-col rounded-e-xl bg-white text-black'>
        <label htmlFor="name" className='flex flex-col'>Full Name
          <input required type="text" id='name' name='name' placeholder='John Doe' className='p-4 bg-gray-200' />
        </label>
        <label htmlFor="email" className='flex flex-col'>Email
          <input required type="email" id='email' name='email' placeholder='johndoe@gmail.com' className='p-4 bg-gray-200' />
        </label>
        <label htmlFor="number" className='flex flex-col'>Phone Number
          <input required type="number" id='number' name='number' placeholder='Phone Number' className='p-4 bg-gray-200' />
        </label>
        <label htmlFor="message" className='flex flex-col'>Message
          <textarea id='message' name='message' placeholder='Write us a short message about what you need.' className='p-4 bg-gray-200' />
        </label>
        <button 
        className='bg-gray-1 text-white px-8 py-3 rounded-md hover:bg-point'>Send Information</button>
      </form>
    </div>
  )
}
