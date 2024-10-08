import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBuilding } from 'react-icons/fa';
import { IoIosClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';

const index = () => {
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
      <div className='relative mt-[150px] flex h-[386px] w-full flex-col items-center justify-center px-16 py-[90px] md:h-[450px] xl:mt-[155px] xl:h-[600px]'>
        <Image
          src={'/hero.png'}
          alt={'hero'}
          fill
          style={{ objectFit: 'cover' }}
          className='-z-10'
        />
        <h1 className='text-center text-2xl font-medium text-white md:text-3xl xl:max-w-[900px] xl:text-6xl xl:leading-normal'>
          Unram Integrated Portal for Reserach and Technology
        </h1>
        <p className='mb-6 mt-2 text-center text-xs font-light text-white md:mt-4 xl:mb-10 xl:text-lg'>
          Explore our services and find the best solutions for your research
          needs
        </p>
        <button className='bg-[#F5CA44] p-3 font-medium xl:px-5 xl:text-xl'>
          Start Your Research
        </button>
      </div>
      {/* abous us */}
      <div className='flex flex-col items-center gap-8 px-6 py-9 xl:flex-row xl:pl-[150px] xl:pr-0'>
        <div className=''>
          <div className='flex items-center gap-3'>
            <Image src={'/menu-black.svg'} alt='menu' width={24} height={24} />
            <h2 className='font-medium'>Tentang Kami</h2>
          </div>
          <div className='mt-6'>
            <h3 className='text-3xl font-semibold xl:text-5xl'>
              Layanan Terintegrasi
            </h3>
            <p className='mt-3 text-xs text-[#454545] xl:mt-6 xl:text-lg'>
              UPA Laboratorium Terpadu Universitas Mataram menyediakan manajemen
              dan layanan terintegrasi, mempermudah pemesanan ruang dan
              pengujian alat laboratorium melalui Uniport.
            </p>
          </div>
        </div>
        <div className='relative h-[200px] w-full xl:h-[300px]'>
          <Image
            src={'/aboutus.png'}
            alt='about-us-img'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
      </div>
      <div className='bg-[#092044] px-6 py-16 text-white xl:flex xl:items-center xl:gap-20 xl:pl-0 xl:pr-[150px]'>
        <div className='relative h-[640px] w-full xl:w-[514px]'>
          <Image
            src={'/service.png'}
            alt='service'
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className=''>
          <div className='mt-20 xl:mt-0'>
            <div className='flex items-center gap-3'>
              <Image
                src={'/menu-white.svg'}
                alt='menu'
                width={24}
                height={24}
              />
              <h2>Layanan Kami</h2>
            </div>
            <div className='my-9'>
              <h2 className='text-3xl font-medium'>
                Layanan Penting Laboratorium Terpadu
              </h2>
              <p className='mt-2 text-xs'>
                UPA Laboratorium Terpadu mendukung penelitian, pendidikan, dan
                manajemen laboratorium dengan layanan yang efisien dan lengkap
              </p>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-14'>
            {/* grid item */}
            <div className=''>
              <div className=''>
                <div className='w-fit rounded-lg bg-white p-3'>
                  <Image src={'brain.svg'} alt='brain' width={24} height={24} />
                </div>
                <h3 className='mb-3 mt-5 font-medium'>
                  Manajemen Pembelajaran Mahasiswa
                </h3>
                <p className='text-xs'>
                  Mengawasi kegiatan pembelajaran mahasiswa di lingkungan
                  laboratorium.
                </p>
              </div>
            </div>
            {/* grid item */}
            <div className=''>
              <div className=''>
                <div className='w-fit rounded-lg bg-white p-3'>
                  <Image src={'brain.svg'} alt='brain' width={24} height={24} />
                </div>
                <h3 className='mb-3 mt-5 font-medium'>
                  Manajemen Pembelajaran Mahasiswa
                </h3>
                <p className='text-xs'>
                  Mengawasi kegiatan pembelajaran mahasiswa di lingkungan
                  laboratorium.
                </p>
              </div>
            </div>
            {/* grid item */}
            <div className=''>
              <div className=''>
                <div className='w-fit rounded-lg bg-white p-3'>
                  <Image src={'brain.svg'} alt='brain' width={24} height={24} />
                </div>
                <h3 className='mb-3 mt-5 font-medium'>
                  Manajemen Pembelajaran Mahasiswa
                </h3>
                <p className='text-xs'>
                  Mengawasi kegiatan pembelajaran mahasiswa di lingkungan
                  laboratorium.
                </p>
              </div>
            </div>
            {/* grid item */}
            <div className=''>
              <div className=''>
                <div className='w-fit rounded-lg bg-white p-3'>
                  <Image src={'brain.svg'} alt='brain' width={24} height={24} />
                </div>
                <h3 className='mb-3 mt-5 font-medium'>
                  Manajemen Pembelajaran Mahasiswa
                </h3>
                <p className='text-xs'>
                  Mengawasi kegiatan pembelajaran mahasiswa di lingkungan
                  laboratorium.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='px-6 py-12 xl:px-[150px]'>
        <div className='flex items-center gap-3'>
          <Image src={'/menu-black.svg'} alt='menu' width={24} height={24} />
          <h2>Alat Penunjang Penelitian</h2>
        </div>
        <div className='xl:flex xl:items-center xl:justify-between'>
          <div className='mb-6 mt-9 xl:max-w-[848px]'>
            <h2 className='text-3xl font-semibold xl:text-5xl xl:leading-normal'>
              Berbagai Alat Laboratorium untuk Penelitian Anda
            </h2>
            <p className='mt-2 text-[#454545] xl:text-lg'>
              Kami menyediakan beragam alat laboratorium yang paling sering
              digunakan oleh mahasiswa dan peneliti.
            </p>
          </div>
          <button className='h-fit rounded bg-[#F5CA44] px-6 py-3 font-medium'>
            Lihat Alat yang Tersedia
          </button>
        </div>
        <div className='mt-14 flex flex-nowrap gap-6 overflow-x-auto md:gap-4 xl:gap-6'>
          <div className='w-[250px] shrink-0 rounded bg-[#F6F6F6] p-6 md:w-1/3 xl:w-1/4'>
            <div className='relative h-[200px] w-[200px]'>
              <Image
                src={'/tool.png'}
                alt='tools'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className='mt-3 text-lg font-medium'>
              HPLC waters 2489 UV/Visible
            </p>
            <p className='mt-2'>Rp - </p>
            <div className='mt-2 w-fit rounded bg-[#31BE15] px-3 py-1.5 text-xs text-white'>
              Tersedia
            </div>
            <div className='mt-4 flex items-center gap-3'>
              <FaBuilding className='text-xl' />
              <p className='text-[10px]'>
                Laboratorium Agama - Fakultas Ekonomi dan Bisnis
              </p>
            </div>
            <button className='mt-4 w-full rounded bg-[#F5CA44] py-3 font-medium'>
              Ajukan Permintaan
            </button>
          </div>
          <div className='w-[250px] shrink-0 rounded bg-[#F6F6F6] p-6 md:w-1/3 xl:w-1/4'>
            <div className='relative h-[200px] w-[200px]'>
              <Image
                src={'/tool.png'}
                alt='tools'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <p className='mt-3 text-lg font-medium'>
              HPLC waters 2489 UV/Visible
            </p>
            <p className='mt-2'>Rp - </p>
            <div className='mt-2 w-fit rounded bg-[#31BE15] px-3 py-1.5 text-xs text-white'>
              Tersedia
            </div>
            <div className='mt-4 flex items-center gap-3'>
              <FaBuilding className='text-xl' />
              <p className='text-[10px]'>
                Laboratorium Agama - Fakultas Ekonomi dan Bisnis
              </p>
            </div>
            <button className='mt-4 w-full rounded bg-[#F5CA44] py-3 font-medium'>
              Ajukan Permintaan
            </button>
          </div>
        </div>
      </div>
      <div className='bg-[#092044] p-6 text-white xl:px-[150px] xl:py-12'>
        <div className='flex items-center gap-3'>
          <Image src={'/menu-white.svg'} alt='menu' width={24} height={24} />
          <h2 className=''>Fasilitas Penelitian</h2>
        </div>
        <div className='xl:flex xl:items-center xl:justify-between'>
          <div className='mb-6 mt-9 xl:max-w-[848px]'>
            <h2 className='text-3xl font-semibold xl:text-5xl xl:leading-normal'>
              Berbagai Departemen yang Ada di Universitas Mataram
            </h2>
            <p className='mt-2 text-xs xl:text-base'>
              UPA Laboratorium Terpadu Universitas Mataram memiliki berbagai
              departemen dengan fasilitas laboratorium yang lengkap.
            </p>
          </div>
          <button className='mt-6 rounded bg-[#F5CA44] px-6 py-3 font-medium text-black'>
            Lihat Selengkapnya
          </button>
        </div>
        <div className='mt-14 flex flex-nowrap gap-6 overflow-x-auto md:gap-4 xl:gap-6'>
          <div className="flex h-[280px] w-full shrink-0 flex-col justify-end rounded bg-[url('/agricultural.png')] bg-cover bg-no-repeat p-6 md:w-1/3 xl:w-1/4">
            <h1 className='text-2xl font-semibold text-white'>
              Agricultural Science
            </h1>
            <button className='mt-6 w-fit bg-[#F5CA44] px-3.5 py-3 text-black'>
              Lihat Detail
            </button>
          </div>
          <div className="flex h-[280px] w-full shrink-0 flex-col justify-end rounded bg-[url('/agricultural.png')] bg-cover bg-no-repeat p-6 md:w-1/3 xl:w-1/4">
            <h1 className='text-2xl font-semibold text-white'>
              Agricultural Science
            </h1>
            <button className='mt-6 w-fit bg-[#F5CA44] px-3.5 py-3 text-black'>
              Lihat Detail
            </button>
          </div>
        </div>
      </div>
      <div className='px-6 py-16 xl:px-[150px]'>
        <div className='flex items-center justify-center gap-3'>
          <Image src={'/menu-black.svg'} alt='menu' width={24} height={24} />
          <h2 className='font-medium'>Berita Terbaru</h2>
        </div>
        <div className='flex flex-col items-center justify-center'>
          <h2 className='mt-9 text-center text-3xl font-semibold xl:w-[1030px] xl:text-5xl xl:leading-normal'>
            Ikuti Kabar dan Acara Terbaru dari UPA Laboratorium Terpadu
          </h2>
          <p className='mt-2 text-center text-xs xl:w-[1030px] xl:text-base'>
            Tetap terupdate dengan berita terbaru dan event yang diadakan oleh
            laboratorium kami. Kami menyediakan informasi terkini seputar
            kegiatan, seminar, dan workshop yang bisa Anda ikuti.
          </p>
        </div>
        <div className='mt-14 flex flex-nowrap gap-6 overflow-x-auto md:gap-4 xl:gap-6'>
          <div className='w-10/12 shrink-0 border-2 border-black md:w-1/3 xl:w-1/4'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news-img'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Juli 2024</p>
              <p className='mt-3 line-clamp-2 text-xl'>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nam, velit.
              </p>
              <button className='mt-3 w-full rounded bg-[#F5CA44] py-3 font-medium'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
          <div className='w-10/12 shrink-0 border-2 border-black md:w-1/3 xl:w-1/4'>
            <div className='relative h-[180px] w-full'>
              <Image
                src={'/news.png'}
                alt='news-img'
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className='p-6'>
              <p>20 Juli 2024</p>
              <p className='mt-3 line-clamp-2 text-xl'>
                UPA. Lab Terpadu Universitas Mataram Gelar Sertifikasi Lorem
                ipsum dolor sit amet consectetur adipisicing elit. Nam, velit.
              </p>
              <button className='mt-3 w-full rounded bg-[#F5CA44] py-3 font-medium'>
                Baca Selengkapnya
              </button>
            </div>
          </div>
        </div>
      </div>
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

export default index;
