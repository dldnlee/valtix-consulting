'use client'
import { introBannerText } from "@/app/text"
import { Button } from "@/app/global-components/Buttons"
import {motion} from 'framer-motion';

import { Navigation, Pagination, Autoplay, A11y, EffectFade } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


const slideContents = [
  {
    bgImage: 'gradient-with-bg-1',
    heading: 'Your Success, Our Mission',
    subHeading: 'Partner with us for strategic insights and customized solutions that drive real growth. Connect with our team today to see how Valtix Consulting can help you reach your goals.',
    route: '/contact',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-2',
    heading: 'Expert Services, Exceptional Results',
    subHeading: 'Discover our full range of consulting solutions designed to elevate your business to new heights. We combine industry knowledge with a personal touch to deliver results that matter.',
    route: '/services',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-3',
    heading: 'Built on Trust, Driven by Results',
    subHeading: "Learn more about the Valtix Consulting team and our unwavering commitment to your success. We're here to help you build a future founded on strong strategy and real impact.",
    route: '/about',
    btnText:'Learn More'
  },
]

interface SlideProps {
  bgImage: string; 
  heading: string;
  subHeading: string;
  route: string;
  btnText: string;
  isActive: boolean;
}


function Slide({bgImage, heading, subHeading, route, btnText="Learn More", isActive} : SlideProps) {
  return (
    <div className={`
    w-full 
    h-full
    ${bgImage} to-10% bg-center bg-cover bg-no-repeat text-white flex items-center overflow-hidden`}>
      <div className="2xl:p-default-padding p-medium-padding">
        <div className="flex flex-col gap-10 max-w-[600px]">
          <div className="overflow-hidden">
            <motion.h1
            initial={{opacity:1, y:-1000}}
            animate={
              isActive ? {opacity:1, y:0} : {opacity: 1, y: -1000}}
            transition={{
              duration: 1.5
            }}
            className="2xl:text-4xl text-2xl font-semibold leading-none overflow-hidden">{heading}</motion.h1>
          </div>
          <div className="overflow-hidden flex flex-col gap-6">
            <motion.p
            initial={{opacity:1, x:-1000}}
            animate={
              isActive ? {opacity:1, x:0} : {opacity: 1, x: -1000}}
              transition={{
                duration: 1.5
              }}
            className="2xl:text-lg text-md overflow-hidden">{subHeading}</motion.p>
            <motion.div
            initial={{opacity:0, y:100}}
            animate={
              isActive ? {opacity:1, y:0} : {opacity: 0, y: 100}}
              transition={{
                duration: 1.5
              }}
              >
              <Button text={btnText} padding={"p-4"} bgColor="bg-transparent" route={route}/>
            </motion.div>
          </div>
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
      className="w-svh h-svh"
      >
        {
          slideContents.map((item, index) => (
            <SwiperSlide key={index}>
              {({isActive}) => (
                <Slide bgImage={item.bgImage} heading={item.heading} subHeading={item.subHeading}
                route={item.route} btnText={item.btnText} isActive={isActive}/>
              )}
            </SwiperSlide>
          ))
        }
      </Swiper>

    </div>
  )
}