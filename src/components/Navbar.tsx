'use client';

import Link from 'next/link';
import Image from 'next/image';
import { logo } from '@/assets';

const Navbar = () => {
  return (
    <nav
      className={`fixed backdrop-blur-sm bg-primary top-0 left-0 right-0 z-50 h-16  flex items-center justify-between transition-all ease-in-out
    `}
    >
      <div className='container container-width mx-auto w-full'>
        <div className='flex justify-between items-center transition'>
          <Link href='/' className='flex items-center gap-4'>
            <Image src={logo} alt='logo' width={120} height={120} />
          </Link>

          <div className='flex items-center gap-4'>
            <Link href={`https://app.kayi.ng/login`} target='_blank'>
              <span className='text-[14px] leading-[24px] font-semibold text-white'>Login</span>
            </Link>
            <Link href={`https://app.kayi.ng/sign-up`} target='_blank'>
              <button className='bg-secondary flex items-center justify-center w-[95px] h-[29px] rounded-[4px]'>
                <span className='text-[14px] leading-[24px] font-semibold text-black'>signup</span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
