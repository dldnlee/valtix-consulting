'use client'
import location from '@/app/assets/icons/location.png'
import email from '@/app/assets/icons/email.png'
import { StaticImageData } from 'next/image'
import Image from 'next/image'

const contactInfo = [
  {
    type: 'Headquarters',
    info: 'Tallinn, Estonia',
    img: location
  },
  {
    type: 'Email Address',
    info: 'client@valtixconsulting.com',
    img: email
  },
]

function Info({ img, info }: { img: StaticImageData, info: string }) {
  return (
    <div className='flex items-center 2xl:gap-6 gap-2'>
      <Image src={img} alt="" className='2xl:size-[30px] size-[16px] invert' />
      <p className='text-body-1'>{info}</p>
    </div>
  )
}

function InfoContainer() {
  return (
    <div className='flex flex-col 2xl:gap-6 gap-4 2xl:text-lg'>
      {contactInfo.map((item, idx) => (
        <Info key={idx} img={item.img} info={item.info} />
      ))}
    </div>
  )
}

function SubForm() {

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
    <form onSubmit={handleSubmit} className='2xl:w-[60%] 2xl:p-10 p-5 gap-10 flex flex-col rounded-e-xl bg-white text-black'>
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
  )
}


export function ContactForm() {


  return (
    <div className="w-full h-full flex 2xl:flex-row flex-col shadow-2xl">
      <div className="2xl:w-[40%] bg-gray-1 gap-5 text-white p-8 flex flex-col justify-between 2xl:rounded-s-xl 2xl:rounded-tr-none rounded-t-xl">
        <div>
          <h1 className='2xl:text-2xl text-lg font-semibold'>Contact Information</h1>
          <p className='text-md'>We are always excited to assist you!</p>
        </div>
        <InfoContainer />
      </div>
      <SubForm />
    </div>
  )
}
