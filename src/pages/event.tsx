import MainLayout from '@/components/MainLayout';
import Image from 'next/image';
import React from 'react';

const EventPage = () => {
  return (
    <MainLayout>
      <div className='flex flex-col items-center justify-center p-6 md:px-[150px] md:py-16'>
        <div className='flex items-center gap-3' data-aos='fade-down'>
          <Image src={'/menu-black.svg'} alt='menu' width={24} height={24} />
          <h2 className='font-medium'>Event Terbaru</h2>
        </div>
        <h2
          className='mt-6 text-center text-2xl font-semibold md:text-3xl xl:text-5xl xl:leading-normal'
          data-aos='fade-down'
        >
          Event untuk Meningkatkan Ilmu dan Jaringan Profesional Anda
        </h2>
        <p
          className='mt-2 text-center text-xs text-[#454545] md:text-base xl:text-lg'
          data-aos='fade-down'
        >
          Bergabunglah dengan komunitas riset dan inovasi di Universitas
          Mataram.
        </p>
      </div>
      {/* highlight event */}
      <div className='flex flex-nowrap overflow-x-auto bg-[#092044] px-6 py-12'>
        <div className='flex w-full shrink-0 flex-col items-center md:w-1/2 xl:w-1/3'>
          <div className='relative h-[250px] w-[250px] border-2 border-white'>
            <Image
              src={'/event.jpeg'}
              alt='event'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='mt-8 flex w-full items-center justify-center gap-2'>
            <div className='h-0 w-full border border-white'></div>
            <div className='h-4 w-4 flex-shrink-0 rounded-full bg-white'></div>
            <div className='h-0 w-full border border-white'></div>
          </div>
          <h3 className='mt-4 text-center text-lg text-white xl:px-8'>
            15 Agustus 2024
          </h3>
          <p className='my-5 text-center text-sm text-white xl:px-8'>
            Universitas Mataram Kirim 3 PLP untuk Ikuti Workshop, Pelatihan, dan
            Rakernas PPLPI 2024 di Bandung
          </p>
          <button className='rounded-md bg-[#F5CA44] px-6 py-3 text-sm font-medium'>
            Selengkapnya
          </button>
        </div>
        <div className='flex w-full shrink-0 flex-col items-center md:w-1/2 xl:w-1/3'>
          <div className='relative h-[250px] w-[250px] border-2 border-white'>
            <Image
              src={'/event.jpeg'}
              alt='event'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='mt-8 flex w-full items-center justify-center gap-2'>
            <div className='h-0 w-full border border-white'></div>
            <div className='h-4 w-4 flex-shrink-0 rounded-full bg-white'></div>
            <div className='h-0 w-full border border-white'></div>
          </div>
          <h3 className='mt-4 text-center text-lg text-white xl:px-8'>
            15 Agustus 2024
          </h3>
          <p className='my-5 text-center text-sm text-white xl:px-8'>
            Universitas Mataram Kirim 3 PLP untuk Ikuti Workshop, Pelatihan, dan
            Rakernas PPLPI 2024 di Bandung
          </p>
          <button className='rounded-md bg-[#F5CA44] px-6 py-3 text-sm font-medium'>
            Selengkapnya
          </button>
        </div>
        <div className='flex w-full shrink-0 flex-col items-center md:w-1/2 xl:w-1/3'>
          <div className='relative h-[250px] w-[250px] border-2 border-white'>
            <Image
              src={'/event.jpeg'}
              alt='event'
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
          <div className='mt-8 flex w-full items-center justify-center gap-2'>
            <div className='h-0 w-full border border-white'></div>
            <div className='h-4 w-4 flex-shrink-0 rounded-full bg-white'></div>
            <div className='h-0 w-full border border-white'></div>
          </div>
          <h3 className='mt-4 text-center text-lg text-white xl:px-8 xl:text-2xl'>
            15 Agustus 2024
          </h3>
          <p className='my-5 text-center text-sm text-white xl:px-8 xl:text-base'>
            Universitas Mataram Kirim 3 PLP untuk Ikuti Workshop, Pelatihan, dan
            Rakernas PPLPI 2024 di Bandung
          </p>
          <button className='rounded-md bg-[#F5CA44] px-6 py-3 text-sm font-medium xl:text-base'>
            Selengkapnya
          </button>
        </div>
      </div>
      {/* event list */}
      <div className='px-6 py-12'>
        <h2 className='text-center text-3xl font-semibold' data-aos='fade-down'>
          Event Terbaru
        </h2>
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
    </MainLayout>
  );
};

export default EventPage;
