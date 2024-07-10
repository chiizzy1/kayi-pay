import { features } from '@/constants';
import Image from 'next/image';
import { FC } from 'react';

interface OurFeaturesProps {}

const OurFeatures: FC<OurFeaturesProps> = ({}) => {
  return (
    <section className='pt-[166px] pb-[329.5px]'>
      <div className='container container-width mx-auto w-full'>
        <div className='flex flex-col gap-[24px] items-center'>
          <span className='text-[20px] leading-[25.5px] text-center text-tertiary'>We are kayi</span>
          <h2 className='text-[36px] leading-[50px] font-semibold max-w-[629px] text-primary'>
            What Makes Kayi the Ideal Choice for Your Global Money Transfers?
          </h2>
          <p className='text-[16px] leading-[23.5px] text-center max-w-[699px]'>
            Kayi App is at the forefront of finance in the era of Internet 2.5-based banking. We harness the power of
            Web 3 technology to seamlessly integrate cutting-edge cybersecurity solutions, forging an impenetrable
            financial ecosystem.
          </p>

          <div className='grid grid-cols-12 md:gap-[24px] gap-8 mt-[24px]'>
            {features.map(({ id, title, description, image }, index) => (
              <div
                key={id + index}
                className='col-span-12 md:col-span-4'
                data-aos={index % 2 !== 0 ? 'fade-down' : 'fade-up-left'}
              >
                <div className='flex flex-col gap-[15px] p-[19px] feature-card  hover:-translate-y-2 hover:scale-110 ease-in duration-300'>
                  <Image src={image} alt='kayi features' className='w-full' />
                  <h4 className=' font-semibold text-[20px] leading-[25.2px] text-primary md:text-left text-center'>
                    {title}
                  </h4>
                  <p className='text-[14px] leading-[21.8px] text-black'>{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurFeatures;
