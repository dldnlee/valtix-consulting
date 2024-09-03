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
    heading: 'Get help from our expert consultants.',
    subHeading: 'Get help from our expert consultants to achieve transformative results. We provide insightful guidance and actionable plans to help you navigate complex challenges and seize new opportunities.',
    route: '/contact',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-2',
    heading: 'Digital Transformation.',
    subHeading: 'In the digital age, staying competitive requires embracing technology. Our Digital Transformation services integrate cutting-edge technologies like AI and IoT to revolutionize your operations and create new value propositions.',
    route: '/services',
    btnText:'Learn More'
  },
  {
    bgImage: 'gradient-with-bg-3',
    heading: 'Startup Advisory at your hands.',
    subHeading: 'Our Startup Advisory service empowers emerging businesses to carve out their niche and scale effectively in competitive markets. By partnering with us, you gain access to expert advice tailored to the unique challenges and opportunities faced by startups.',
    route: '/services',
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
    h-[95vh]
    2xl:${bgImage} bg-black bg-gradient-to-t from-gray-4 to-10% bg-center bg-cover bg-no-repeat text-white flex items-center overflow-hidden`}>
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
      className="w-full"
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