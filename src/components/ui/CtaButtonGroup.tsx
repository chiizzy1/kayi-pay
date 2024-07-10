import { apple_logo, google_play_logo } from '@/assets';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface CtaButtonGroupProps {
  size: string;
}

const CtaButtonGroup: FC<CtaButtonGroupProps> = ({ size }) => {
  return (
    <div
      className={`flex items-center z-40 md:justify-start justify-center md:mt-0 mt-8 md:flex-nowrap flex-wrap  ${
        size == 'large' ? 'md:max-w-[515px] gap-[14px]' : 'md:max-w-[401px] gap-[10.8px]'
      }`}
    >
      <Link href={`https://play.google.com/store/apps/details?id=com.kayiapp`} target='_blank'>
        <button
          className={`flex items-center p-2 gap-2 bg-black  ${
            size == 'large' ? 'w-[163px] h-[49px] rounded-[8px]' : 'w-[126.9px] h-[38.15px] rounded-[6.3px]'
          }`}
        >
          <Image
            src={google_play_logo}
            width={`${size === 'large' ? 35 : 23}`}
            height={`${size === 'large' ? 35 : 23}`}
            alt='download from google play store'
          />
          <div className='flex flex-col items-start'>
            <span
              className={`text-white/90 capitalize ${
                size === 'large' ? 'text-[10px] leading-[12px]' : 'text-[8px] leading-[12px]'
              }`}
            >
              Get it on
            </span>
            <span
              className={`text-white font-bold capitalize ${
                size === 'large' ? 'text-[15px]  leading-[16px]' : 'text-[12px]  leading-[16px]'
              }`}
            >
              google play
            </span>
          </div>
        </button>
      </Link>
      <Link href={`https://apps.apple.com/gb/app/mykayiapp/id6474021380`} target='_blank'>
        <button
          className={`flex items-center p-2 gap-2 bg-black  ${
            size == 'large' ? 'w-[163px] h-[49px] rounded-[8px]' : 'w-[126.9px] h-[38.15px] rounded-[6.3px]'
          }`}
        >
          <Image
            src={apple_logo}
            width={`${size === 'large' ? 35 : 23}`}
            height={`${size === 'large' ? 35 : 23}`}
            alt='download from google play store'
          />
          <div className='flex flex-col items-start'>
            <span
              className={`text-white/90 capitalize ${
                size === 'large' ? 'text-[10px] leading-[12px]' : 'text-[8px] leading-[12px]'
              }`}
            >
              Available on the
            </span>
            <span
              className={`text-white font-bold capitalize ${
                size === 'large' ? 'text-[15px]  leading-[16px]' : 'text-[12px]  leading-[16px]'
              }`}
            >
              App Store
            </span>
          </div>
        </button>
      </Link>
      <Link href={`tel:*5294#`}>
        {' '}
        <button
          className={`${
            size == 'large'
              ? 'border-white border-[2px] w-[163px] h-[49px] rounded-[8px] '
              : 'border-black border-[1.56px] w-[126.9px] h-[38.15px] rounded-[6.3px]'
          }`}
        >
          <span
            className={`font-bold ${
              size == 'large' ? 'text-[25px] leading-[35px] text-white' : 'text-[19.46px] leading-[27.25px] text-black'
            }`}
          >
            *5294#
          </span>
        </button>
      </Link>
    </div>
  );
};

export default CtaButtonGroup;
