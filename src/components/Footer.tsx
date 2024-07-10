'use client';

import { socialMedia } from '@/constants';
import Link from 'next/link';
import { FC } from 'react';
import Image from 'next/image';

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <section className='pt-[65px]  bg-black'>
      <div className='container container-width mx-auto md:text-left text-center'>
        <div className='grid grid-cols-10'>
          <div className='w-full col-span-10 md:col-span-4 flex flex-col gap-[16px] md:mb-0 mb-8'>
            <h4 className='text-[18px] leading-[28px] font-bold text-white'>About Us</h4>
            <p className='text-[14px] leading-[24px] font-normal text-tertiary md:max-w-[319px]'>
              Our mission at Kayi App is to revolutionize contemporary banking. We offer a comprehensive suite of
              services tailored to your financial needs. This includes stock investments, insurance coverage, convenient
              loan options, secure crypto transactions, and a uniquely structured savings program that promises
              impressive returns.
            </p>
          </div>

          <div className='w-full col-span-10 md:col-span-2 flex flex-col gap-[16px] md:mb-0 mb-8'>
            <span className='text-[14px] leading-[24px]  font-normal text-tertiary'>Front Desk</span>
            <div>
              <a href={`tel:08000005294`} className='w-fit' target='_blank'>
                <span className='text-[18px] leading-[28px] font-semibold text-white cursor-pointer max-w-[185px] underline'>
                  0800-000-KAYI (0800-000-5294)
                </span>
              </a>
              <br />
              <a className='w-fit' href={`mailto:help@kayi.ng`} target='_blank'>
                <span className='text-[18px] leading-[28px] font-semibold text-white cursor-pointer max-w-[185px] underline'>
                  help@kayi.ng
                </span>
              </a>
            </div>
            <div className='flex flex-col mt-[28px]'>
              <h4 className='text-[18px] leading-[28px] font-bold text-white'>important Links</h4>
              <ul className='mt-[16px]'>
                <li>
                  <Link href={'/terms-conditions'}>
                    <span className='text-[14px] leading-[24px]  font-normal text-tertiary'>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link href={'/privacy-policy'}>
                    {' '}
                    <span className='text-[14px] leading-[24px]  font-normal text-tertiary'>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link href={'/data-safety'}>
                    <span className='text-[14px] leading-[24px]  font-normal text-tertiary'>Data Safety</span>
                  </Link>
                </li>
                <li>
                  <Link href={'/faq'}>
                    <span className='text-[14px] leading-[24px]  font-normal text-tertiary'>FAQ</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className='w-full col-span-10 md:col-span-2 md:mb-0 mb-8'>
            <div className='flex flex-col gap-[16px] md:text-left text-center'>
              <h4 className='text-[18px] leading-[28px] font-bold text-white'>Address</h4>
              <span className='text-[14px] leading-[24px] font-normal text-tertiary md:max-w-[160px]'>
                61, Maganda Road,Kano, Nigeria.
              </span>
            </div>
            <div className='flex flex-col mt-[55px]'>
              <h4 className='text-[18px] leading-[28px] font-bold text-white'>Office Hours</h4>
              <span className='text-[14px] leading-[24px] mt-[16px] font-normal text-tertiary md:max-w-[160px]'>
                Mon - Fri: 8.00am to 5.00pm
              </span>
            </div>
          </div>

          <div className='w-full col-span-10 md:col-span-2'>
            <h4 className='text-[18px] leading-[28px] font-bold text-white'>Community</h4>

            <div className='flex items-center gap-[24px] md:max-w-[168px] mt-[30px] md:justify-start justify-center'>
              {socialMedia.map(({ icon, id, link }) => (
                <Link href={link} key={id} target='_blank'>
                  <Image src={icon} width={24} height={24} alt={`social media icon`} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className='w-full flex justify-center items-center py-6 border-t-[1px] border-t-tertiary/50 mt-[55px]'>
          <span className='text-center text-[16px] leading-[24px] text-tertiary'>
            Copyright Ⓒ {new Date().getFullYear()} Kayi. All Rights Reserved.
          </span>
        </div>
      </div>
    </section>
  );
};

export default Footer;
