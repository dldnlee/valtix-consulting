'use client'
import { introBannerText } from "@/app/text"
import { Button } from "@/app/global-components/Buttons"

import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const slideContents = [
  {
    bgImage: 'gradient-with-bg-1',
    heading: 'Get help from our expert consultants.',
    subHeading: 'Get help from our expert consultants to achieve transformative results. We provide insightful guidance and actionable plans to help you navigate complex challenges and seize new opportunities.',
    route: '/services',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-2',
    heading: 'Digital Transformation.',
    subHeading: 'Get help from our expert consultants to achieve transformative results. We provide insightful guidance and actionable plans to help you navigate complex challenges and seize new opportunities.',
    route: '/services',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-3',
    heading: 'Startup Advisory at your hands.',
    subHeading: 'Get help from our expert consultants to achieve transformative results. We provide insightful guidance and actionable plans to help you navigate complex challenges and seize new opportunities.',
    route: '/services',
    btnText:'Learn More'
  },
]


function Slide({bgImage, heading, subHeading, route, btnText="Learn More"} : {bgImage: string; heading: string, subHeading: string, route: string, btnText: string}) {
  return (
    <div className={`
    w-full 
    h-[95vh]
    ${bgImage} bg-center bg-cover bg-no-repeat text-white flex items-center overflow-hidden`}>
      <div className="p-default-padding">
        <div className="flex flex-col gap-10 w-[600px]">
          <h1 className="text-4xl font-semibold leading-none">{heading}</h1>
          <p className="text-lg">{subHeading}</p>
          <Button text={btnText} padding={"p-4"} bgColor="bg-transparent" route={route}/>
        </div>
      </div>
    </div>
  )
}

export default function SectionOne() {
  return (
    <div>
      <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      effect={"fade"}
      speed={2500}
      allowTouchMove={false}
      autoplay={{
        delay: 5000
      }}
      fadeEffect={{
        crossFade: false
      }}
      loop={true}
      className="w-full"
      >
        {
          slideContents.map((item, index) => (
            <SwiperSlide key={index}>
              <Slide bgImage={item.bgImage} heading={item.heading} subHeading={item.subHeading}
              route={item.route} btnText={item.btnText}/>
            </SwiperSlide>
          ))
        }
        {/* <SwiperSlide>
          <Slide />  
        </SwiperSlide>
        <SwiperSlide>
          <Slide />  
        </SwiperSlide>
        <SwiperSlide>
          <Slide />  
        </SwiperSlide> */}
      </Swiper>

    </div>
  )
}