import { FC } from 'react';
import CtaButtonGroup from '../ui/CtaButtonGroup';
import Image from 'next/image';
import { close, cta_bottom_image } from '@/assets';

interface CtaBottomProps {}

const CtaBottom: FC<CtaBottomProps> = ({}) => {
  return (
    <section
      className='md:min-h-[740.5px] bg-no-repeat bg-cover relative bg-fixed'
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 165, 44, 0.4), rgba(0, 165, 44, 0.4)), url(${close.src})`,
      }}
    >
      <div className='container max-w-5xl mx-auto w-full md:absolute relative top-[-124px] left-1/2 transform -translate-x-1/2 z-[1]'>
        <div className='relative grid grid-cols-10 md:min-h-[382px] rounded-[8px] bg-secondary items-center py-[55px] pl-[50px] md:pr-6 pr-[50px]'>
          <div className='w-full col-span-10 md:col-span-5 flex flex-col gap-[60px] z-[1]' data-aos='fade-down-right'>
            <h3 className='text-[40px] leading-[50.4px] font-semibold md:max-w-[388px] md:text-left text-center'>
              Known For Trust, Honesty & Good Customer Support
            </h3>
            <CtaButtonGroup size='small' />
          </div>

          <div className='w-full h-full col-span-10 md:col-span-5  md:block hidden'>
            <Image src={cta_bottom_image} alt='' className='w-[80%] absolute right-0 bottom-0' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaBottom;
