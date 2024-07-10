import { Metadata } from 'next';
import CtaBottom from '../components/home/CtaBottom';
import CtaTop from '../components/home/CtaTop';
import Hero from '../components/home/Hero';
import OurFeatures from '../components/home/OurFeatures';

export const metadata: Metadata = {
  title: 'Kayi App | Home',
  description: 'Kayi app - revolutionizing contemporary banking',
};

export default function Home() {
  return (
    <main className='min-h-screen'>
      <Hero />
      <div className='relative z-[1] overflow-hidden'>
        <CtaTop />
        <OurFeatures />
        {/* gradient start */}
        <div className='absolute z-[-1] md:w-[1140px] w-full h-[1117px] top-[230px] rounded-full md:left-[-195px] ellipse-one' />
        <div className='absolute z-[-1] md:w-[1038px]  w-full h-[1017px] top-[764px] rounded-full md:left-[597.5px] bottom-20 ellipse-two' />
        <div className='absolute z-[-1] md:w-[1038px]  w-full h-[1017px] top-[1240px] rounded-full md:left-[-503.8px] ellipse-three ' />
        {/* gradient end */}
      </div>
      <CtaBottom />
    </main>
  );
}
