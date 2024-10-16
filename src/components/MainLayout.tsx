import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

type PropsType = {
  children: ReactNode;
};

const MainLayout = ({ children }: PropsType) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className='overflow-x-hidden'>
      <header className='fixed top-0 z-50 w-full'>
        <div className='flex justify-end gap-10 bg-white px-6 py-3 xl:px-[150px]'>
          <Link href={'/'} className='text-xs md:text-sm'>
            Privacy Policy
          </Link>
          <Link href={'/terms'} className='text-xs md:text-sm'>
            Terms of Use
          </Link>
          <Link href={'/'} className='text-xs md:text-sm'>
            About Us
          </Link>
          <Link href={'/'} className='text-xs md:text-sm'>
            Contact Us
          </Link>
        </div>
        <div className='bg-[#092044] p-6 xl:px-[150px]'>
          <div className='flex items-center justify-between'>
            <div className='flex items-center gap-4'>
              <div className='relative h-16 w-16'>
                <Image
                  src={'/logo.png'}
                  alt='logo'
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <h1 className='text-white'>
                UPA Laboratorium Terpadu <br /> Universitas Mataram
              </h1>
            </div>
            <div className='hidden items-center gap-12 text-white xl:flex'>
              <Link href={'/'}>Home</Link>
              <Link href={'/news'}>News</Link>
              <Link href={'/event'}>Event</Link>
              <Link href={'/research-facility'}>Research Facility</Link>
              <Link href={'/organization'}>Organization</Link>
              <Link
                href={'/login'}
                className='bg-[#F5CA44] px-3.5 py-3 font-medium text-black'
              >
                Login
              </Link>
            </div>
            <div
              className='block text-[50px] text-white xl:hidden'
              onClick={(e) => {
                e.stopPropagation();
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              {isMenuOpen ? <IoIosClose /> : <IoMenu className='text-[40px]' />}
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <div
          className={`absolute bottom-0 right-0 z-10 flex translate-y-full flex-col gap-8 overflow-hidden bg-[#092044] px-6 text-white transition-all xl:hidden ${isMenuOpen ? 'max-h-[500px] py-4' : 'max-h-0 py-0'}`}
        >
          <Link href={'/'}>Home</Link>
          <Link href={'/'}>News</Link>
          <Link href={'/'}>Event</Link>
          <Link href={'/'}>Research Facilities</Link>
          <Link href={'/'}>Organization</Link>
          <Link
            href={'/'}
            className='w-fit bg-[#F5CA44] px-3.5 py-3 text-sm text-black'
          >
            Login
          </Link>
        </div>
      </header>
      <div className='mt-[150px]'>{children}</div>
      <footer className='bg-[#092044] px-6 py-9 text-white xl:px-[150px]'>
        <div className='grid grid-cols-12 gap-5 xl:gap-10'>
          <div className='col-span-12 flex items-center gap-4 xl:col-span-4'>
            <div className='relative h-14 w-14'>
              <Image
                src={'/logo.png'}
                alt='logo'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className='text-sm font-medium xl:text-base'>
              UPA Laboratorium Terpadu <br /> Universitas Mataram
            </p>
          </div>
          <div className='col-span-5 col-start-1 text-xs xl:col-span-5 xl:w-80 xl:text-base'>
            <p>
              Jl. Majapahit No.62, Gomong, Kec. Selaparang, Kota Mataram, Nusa
              Tenggara Bar. 83115
            </p>
          </div>
          <div className='col-span-7 text-xs xl:col-span-3 xl:w-80 xl:text-base'>
            <p>upalaboratoriumterpadu.unram.ac.id</p>
            <p className='mt-2'>+62 (1780) 789992</p>
          </div>
        </div>
        <div className='xl:pt- mt-9 border-t border-white pt-2'>
          <p className='text-center text-xs xl:text-base'>
            Copyright © 2024 UPA Laboratorium Terpadu Universitas Mataram
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
