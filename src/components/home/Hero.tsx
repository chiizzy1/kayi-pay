import { hero_image, person, hero_bg } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Button } from '../ui/Button';
import CtaButtonGroup from '../ui/CtaButtonGroup';

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <section
      className='relative md:pt-[171px] pt-[200px] bg-cover bg-no-repeat bg-right'
      style={{
        backgroundColor: `rgba(0, 0, 0, 0.6)`,
      }}
    >
      <div
        className='hero-bg-overlay absolute z-[-1]'
        style={{
          backgroundColor: 'rgba(0, 165, 44, 0.5)',
        }}
      ></div>
      {/* <div
        className='hero-bg-overlay absolute z-[-2] transform scale-x-[-1]'
        style={{
          backgroundImage: `url(${hero_bg.src})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
      ></div> */}
      <Image className='hero-bg-overlay absolute z-[-2] transform scale-x-[-1]' src={hero_bg} alt='' unoptimized />
      <div className='container max-w-5xl mx-auto w-full'>
        <div className='flex flex-col'>
          <div className='w-full md:grid grid-cols-2 relative'>
            <div className='w-full flex flex-col gap-4 z-[1] md:text-left text-center' data-aos='fade-down-right'>
              <h1 className='text-[48px] font-semibold leading-[60px] text-white md:max-w-[468px]'>
                Welcome to Banking Without Limits
              </h1>

              <p className='text-[20px] font-semibold leading-[28px] text-white md:max-w-[515px]'>
                Our mission at Kayi App is to revolutionize contemporary banking. We offer a comprehensive suite of
                services tailored to your financial needs.Effortlessly send money at the best rates with Kayi App.
              </p>

              <CtaButtonGroup size='large' />
            </div>

            <Image
              src={hero_image}
              alt='kayi app phone'
              className='md:block hidden absolute md:top-[-120px] md:left-[250px] lg:left-[210px] lg:top-[-170px] md:w-[85%] lg:w-[100%]'
              data-aos='fade-up-left'
            />
          </div>

          <div className='md:mt-[307px] mt-[180px] mb-[182px] w-full md:min-h-[512px] '>
            <div className='md:grid grid-cols-10 flex flex-col rounded-[8px] p-[36px] bg-primary/30 backdrop-blur-md'>
              <div className='col-span-10  md:col-span-4 md:order-1 order-2 md:mt-0 mt-32'>
                <Image src={person} alt='kayi user' className='md:w-[303px] w-full md:h-[441px]' />
              </div>

              <div className='flex flex-col gap-[24px] col-span-10 md:col-span-6 md:order-2 order-1'>
                <h2 className='text-[36px] leading-[45.4px] font-semibold text-white'>
                  Known and Trusted Across all Age Groups and Income Brackets
                </h2>
                <p className='text-[16px] leading-[25px] text-white'>
                  Kayi App is loved by the youth for its flexibility of offers and variety of options. Senior citizens
                  and elders trust us for keeping their earnings safe. Businesses use Kayi App to seamlessly transact
                  globally, from China to Dubai, London to Riyadh, Rabat to Texas, Lagos to Mumbai. African Diaspora
                  rely on Kayi App to send money home and invest in Africa. They use Kayi to grow their wealth on the
                  motherland to take part in the emerging Africa
                </p>

                <div className='flex gap-[28px]'>
                  <Link href={`https://app.kayi.ng/sign-up`} target='_blank' className='w-full'>
                    <Button className='w-full'>sign up</Button>
                  </Link>

                  <Link href={`https://app.kayi.ng/login`} target='_blank' className='w-full'>
                    <Button variant={'black'} className='w-full'>
                      login
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
