import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { IoIosClose } from 'react-icons/io';
import { IoLocationSharp, IoMenu } from 'react-icons/io5';

const News = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div>
      <header className='fixed top-0 z-50 w-full'>
        <div className='flex justify-end gap-10 bg-white px-6 py-3 xl:px-[150px]'>
          <Link href={'/'} className='text-xs md:text-sm'>
            Privacy Policy
          </Link>
          <Link href={'/'} className='text-xs md:text-sm'>
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
      {/* hero */}
      <div
        className='mt-[150px] flex flex-col items-center p-6 md:py-16 xl:mt-[155px] xl:px-[150px]'
        data-aos='fade-down'
      >
        <div className='flex items-center gap-3'>
          <Image src={'/menu-black.svg'} alt='menu' width={24} height={24} />
          <h2 className='font-medium'>Berita Terbaru</h2>
        </div>
        <h2 className='mt-6 text-center text-2xl font-semibold xl:max-w-[1100px] xl:text-5xl xl:leading-normal'>
          Ikuti Kabar dan Acara Terbaru dari UPA Laboratorium Terpadu
        </h2>
        <p className='mt-2 text-center text-xs text-[#454545] xl:max-w-[1100px] xl:text-base'>
          Tetap terupdate dengan berita terbaru dan event yang diadakan oleh
          laboratorium kami. Kami menyediakan informasi terkini seputar
          kegiatan, seminar, dan workshop yang bisa Anda ikuti.
        </p>
      </div>
      {/* highlight news */}
      <div className='flex flex-nowrap gap-6 overflow-x-auto bg-[#092044] px-6 py-9 md:gap-4 xl:grid xl:grid-cols-2 xl:grid-rows-2'>
        {/* item */}
        <div
          className='relative flex w-full shrink-0 items-center justify-center border border-white bg-[url("/news.png")] bg-cover bg-no-repeat px-9 py-14 text-white xl:row-span-2'
          data-aos='fade-right'
        >
          {/* overlay */}
          <div className='absolute inset-0 bg-[#092044] opacity-30'></div>
          <div className='relative z-10'>
            <div className='w-fit bg-[#F5CA44] px-3 py-1.5 text-xs text-black xl:px-6 xl:py-3 xl:text-base'>
              20 Februari 2025
            </div>
            <h3 className='mt-3 text-lg xl:mt-6 xl:text-3xl'>
              Hackathon Penelitian Terpadu Seluruh Civitas Unram 2024
            </h3>
            <p className='mt-2 text-xs xl:mt-3 xl:text-lg'>
              Hasil dari kegiatan ini adalah prototipe yang siap diuji lebih
              lanjut dan potensi pendanaan untuk pengembangan proyek.
            </p>
            <div className='mt-3 flex items-center gap-3 xl:mt-6'>
              <IoLocationSharp className='text-white xl:text-2xl' />
              <p className='text-xs xl:text-base'>Universitas Mataram</p>
            </div>
          </div>
        </div>
        {/* item */}
        <div
          className='relative flex w-full shrink-0 items-center justify-center border border-white bg-[url("/news.png")] bg-cover bg-no-repeat px-9 py-14 text-white'
          data-aos='fade-left'
        >
          {/* overlay */}
          <div className='absolute inset-0 bg-[#092044] opacity-30'></div>
          <div className='relative z-10'>
            <div className='w-fit bg-[#F5CA44] px-3 py-1.5 text-xs text-black'>
              20 Februari 2025
            </div>
            <h3 className='mt-3 text-lg xl:text-2xl'>
              Hackathon Penelitian Terpadu Seluruh Civitas Unram 2024
            </h3>
            <p className='mt-2 text-xs xl:text-sm'>
              Hasil dari kegiatan ini adalah prototipe yang siap diuji lebih
              lanjut dan potensi pendanaan untuk pengembangan proyek.
            </p>
            <div className='mt-3 flex items-center gap-3'>
              <IoLocationSharp className='text-white' />
              <p className='text-xs xl:text-sm'>Universitas Mataram</p>
            </div>
          </div>
        </div>
        {/* item */}
        <div
          className='relative flex w-full shrink-0 items-center justify-center border border-white bg-[url("/news.png")] bg-cover bg-no-repeat px-9 py-14 text-white'
          data-aos='fade-left'
        >
          {/* overlay */}
          <div className='absolute inset-0 bg-[#092044] opacity-30'></div>
          <div className='relative z-10'>
            <div className='w-fit bg-[#F5CA44] px-3 py-1.5 text-xs text-black'>
              20 Februari 2025
            </div>
            <h3 className='mt-3 text-lg xl:text-2xl'>
              Hackathon Penelitian Terpadu Seluruh Civitas Unram 2024
            </h3>
            <p className='mt-2 text-xs xl:text-sm'>
              Hasil dari kegiatan ini adalah prototipe yang siap diuji lebih
              lanjut dan potensi pendanaan untuk pengembangan proyek.
            </p>
            <div className='mt-3 flex items-center gap-3'>
              <IoLocationSharp className='text-white' />
              <p className='text-xs xl:text-sm'>Universitas Mataram</p>
            </div>
          </div>
        </div>
      </div>
      {/* news list */}
      <div className='px-10 py-12'>
        <h2 className='text-center text-3xl font-semibold'>Berita Terbaru</h2>
        <div className='mt-6 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3'>
          <div className='border border-black'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Maret 2025</p>
              <h3>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi....
              </h3>
              <button className='w-full bg-[#F5CA44] py-3'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className='border border-black'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Maret 2025</p>
              <h3>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi....
              </h3>
              <button className='w-full bg-[#F5CA44] py-3'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className='border border-black'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Maret 2025</p>
              <h3>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi....
              </h3>
              <button className='w-full bg-[#F5CA44] py-3'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className='border border-black'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Maret 2025</p>
              <h3>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi....
              </h3>
              <button className='w-full bg-[#F5CA44] py-3'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
        {/* pagination */}
        <div className='mt-8 flex w-full items-center justify-center gap-3'>
          <p className='text-sm'>Prev</p>
          <div className='w-full max-w-9 bg-[#092044] py-2 text-center text-sm text-white'>
            1
          </div>
          <div className='w-full max-w-9 border border-[#868686] py-2 text-center text-sm text-[#bcbcbc]'>
            2
          </div>
          <div className='w-full max-w-9 border border-[#868686] py-2 text-center text-sm text-[#bcbcbc]'>
            3
          </div>
          <div className='w-full max-w-9 border border-[#868686] py-2 text-center text-sm text-[#bcbcbc]'>
            4
          </div>
          <div className='w-full max-w-9 border border-[#868686] py-2 text-center text-sm text-[#bcbcbc]'>
            5
          </div>
          <p className='text-sm'>Next</p>
        </div>
      </div>
      {/* footer */}
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

export default News;
