import { cta_top_image1, cta_top_image2 } from '@/assets';
import Image from 'next/image';
import { FC } from 'react';
import CtaButtonGroup from '../ui/CtaButtonGroup';

interface CtaTopProps {}

const CtaTop: FC<CtaTopProps> = ({}) => {
  return (
    <section className='md:pt-[271px] pt-[200px]'>
      <div className='container max-w-5xl mx-auto w-full'>
        <div className='relative grid grid-cols-10 md:min-h-[382px] rounded-[8px] bg-secondary items-center py-[55px] pl-[50px] md-pr-0 pr-[50px]'>
          <div className='w-full col-span-10 md:col-span-5 flex flex-col gap-[60px]' data-aos='fade-down-right'>
            <h3 className='text-[40px] leading-[50.4px] font-semibold md:max-w-[437px] md:text-left text-center'>
              Effortlessly send money at the best rates with Kayi.
            </h3>
            <CtaButtonGroup size='small' />
          </div>

          <div className='w-full h-full col-span-10 md:col-span-5 md:block hidden'>
            <Image src={cta_top_image1} alt='' className='w-[420px] h-[524px] absolute right-[170px] bottom-0' />
            <Image src={cta_top_image2} alt='' className='absolute w-[380px] h-[619px] right-0 bottom-0' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaTop;
