'use client'
import { Navigation, Pagination, Autoplay, A11y, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Image, { StaticImageData } from 'next/image';
import rightArrow from '@/app/assets/icons/right-arrow.png'

import startupAdvisory from '@/app/assets/images/business-executives-using-laptop.webp';
import growthStrategy from '@/app/assets/images/cropped-business-people-discussing-charts-diagrams-office.jpg';
import operationEfficiency from '@/app/assets/images/asian-businessman-presenting-analysis-cost-graph-corporate-colleagues-meeting-office.webp';
import digitalTransformation from '@/app/assets/images/woman-touching-smart-technology-holographic-interface.webp';
import strategyConsulting from '@/app/assets/images/table-consulting-paperwork-professional-invest-executive.webp';



const slideContent = [
  {
    heading: "Startup Advisory",
    image: startupAdvisory,
    alt: 'Light Bulb',
    subheading: "We provide comprehensive support to startups, guiding them from concept to market with services including business model validation, market entry strategies, and fundraising assistance",
  }, 
  {
    heading: "Growth Strategy for Medium Enterprises",
    image: growthStrategy,
    alt: 'Light Bulb',
    subheading: "Helping medium-sized businesses scale operations, improve market position, and drive innovation through targeted strategies that foster long-term success.",
  },
  {
    heading: "Operational Efficiency",
    image: operationEfficiency,
    alt: 'Light Bulb',
    subheading: "Assisting businesses in optimizing processes to boost productivity, reduce costs, and enhance overall performance using the latest in technology and best practices.",
  },
  {
    heading: "Digital Transformation",
    image: digitalTransformation,
    alt: 'Light Bulb',
    subheading: "Facilitating the integration of digital technologies to streamline operations and enhance customer engagement, tailored specifically to the needs of growing businesses.",
  },
  {
    heading: "Strategy Consulting",
    image: strategyConsulting,
    alt: 'Light Bulb',
    subheading: "Offering strategic foresight and actionable plans that help businesses anticipate market trends and position themselves competitively.",
  }
]

interface SlideProps {
  heading: string;
  img: StaticImageData;
  alt: string;
  subheading: string;
}

function Slide({heading, img, alt, subheading} : SlideProps) {
  return (
    <div className='m-2 bg-gradient-to-t from-black to-transparent to-70% text-white mx-auto w-[384px] h-[409px] overflow-hidden flex flex-col relative justify-end text-start rounded-lg shadow-lg shadow-gray-500'>
      <Image src={img} alt={alt} className='w-full h-full object-cover absolute mix-blend-multiply'/>
      <div className='p-4 z-10 flex flex-col gap-4'>
        <h2 className='font-extrabold text-[21px]'>{heading}</h2>
        <p className='font-sm text-[17px] line-clamp-2'>{subheading}</p>
        <a href="/services" className='group text-[17px] font-bold hover:text-beige'>Learn More<Image src={rightArrow} width={16} alt="Right Arrow" className='inline-block ml-4 invert group-hover:translate-x-1 transition-transform'/></a>
      </div>
    </div>
  )
}

function Slider() {
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
      effect={'coverflow'}
      slidesPerView={1.5}
      spaceBetween={0}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      centeredSlides={true}
      navigation={true}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
        clickable: true
      }}
      className='w-[600px] h-[450px] bg-gray-4'
    >
        {slideContent.map((item, index) => (
          <SwiperSlide key={index}>
            <Slide heading={item.heading} img={item.image} alt={item.alt} subheading={item.subheading}/>
          </SwiperSlide>
        ))}
    </Swiper>
  )
}

export default function ServiceSlider() {
  return (
    <div className=" text-center flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-xl">Services we offer for you</h1>
      <Slider /> 
    </div>
  )
}