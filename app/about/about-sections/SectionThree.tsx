import maykel from '@/app/assets/images/Maykel.jpg'
import Image, { StaticImageData } from 'next/image'
// import professionalImage from '@/app/assets/images/professional_image.webp';
import paintImage from '@/app/assets/images/grayscale-paint-image.webp';

function FounderCard() {
  return (
    <div className='flex w-full items-center justify-center 2xl:h-[900px]'>
      <div className='flex 2xl:flex-col flex-col gap-5 h-full justify-center items-center 2xl:shadow-lg 2xl:w-[800px] bg-gray-1 text-white 2xl:rounded-none rounded-xl 2xl:px-20 2xl:py-16 px-5 py-4'>
          <h2 className='2xl:text-2xl text-lg font-bold'>
            &quot;Empowering Businesses to Thrive with Tailored Strategies and Sustainable Growth.&quot;
          </h2>
          <p className='2xl:text-lg text-md'>
            At Valtix Consulting, we redefine what it means to grow and scale in today&apos;s fast-changing markets. We don&apos;t just provide advice—we craft bespoke strategies that empower startups and medium-sized enterprises to unlock their full potential.
          </p>
          <p className='2xl:text-lg text-md'>
            Our expertise spans startup advisory, growth strategy, operational efficiency, digital transformation, and strategic planning, but what sets us apart is our relentless focus on innovation and adaptability. From creating hyper-personalized growth roadmaps to spearheading transformational change, we work as true partners, embedding ourselves in your journey to success.
          </p>
          <p className='2xl:text-lg text-md'>
            We thrive on complexity, finding clarity in chaos, and turning challenges into opportunities. At Valtix Consulting, we&apos;re not just solving today&apos;s problems; we&apos;re building tomorrow&apos;s possibilities. Let&apos;s create something extraordinary together.
          </p>
      </div>

        <Image
        src={paintImage}
        alt="Grayscale paint splatter image"
        className='w-[500px] h-full object-cover object-center 2xl:block hidden'
        />

    </div>
  )
}

export default function SectionThree() {
  return (
    <div className="flex flex-col items-center justify-center p-medium-padding 2xl:gap-20 gap-10 lg:py-[120px] md:py-[120px] bg-white">
      <div className="text-center">
        <h2 className="font-bold 2xl:text-4xl text-2xl py-5 2xl:py-2">Valtix Defined.</h2>
        <p className="2xl:w-[900px] 2xl:text-lg text-md">&quot;Valtix Consulting stands at the forefront of strategic business solutions in Indonesia. We empower organizations to navigate challenges, seize opportunities, and achieve sustainable growth. With a blend of local expertise and global insights, we redefine success for our clients.&quot;</p>
      </div>
      <FounderCard />
    </div>
  )
}
