import MainLayout from '@/components/MainLayout';
import React from 'react';

const TermsPage = () => {
  return (
    <MainLayout>
      <div className='grid px-[60px] py-6 md:grid-cols-2 md:gap-6 md:p-16 xl:gap-16 xl:px-[250px]'>
        <div className=''>
          <h1 className='text-2xl font-semibold'>
            Syarat dan Ketentuan Pengguna
          </h1>
          <p className='my-3 text-sm text-[#454545] xl:text-base'>
            Dengan mengakses dan menggunakan platform Uniport, Anda setuju untuk
            terikat oleh syarat dan ketentuan berikut. Pastikan Anda memahami
            ketentuan ini sebelum melanjutkan.
          </p>
        </div>
        <div className=''>
          <h2 className='font-medium md:text-lg xl:text-xl'>
            Penggunaan Layanan
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Layanan kami hanya dapat digunakan untuk tujuan penelitian,
            pendidikan, dan pengembangan. Setiap pelanggaran terhadap penggunaan
            yang sesuai akan dikenakan tindakan hukum.
          </p>
          <h2 className='mt-3 font-medium md:text-lg xl:text-xl'>
            Hak Kekayaan Intelektual
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Semua konten, termasuk teks, gambar, dan data yang ada di platform
            ini dilindungi oleh hak cipta. Dilarang menggunakan atau
            mendistribusikan konten tanpa izin tertulis.
          </p>
          <h2 className='mt-3 font-medium md:text-lg xl:text-xl'>
            Akses dan Batasan
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Akses ke layanan hanya diberikan kepada pengguna yang terdaftar.
            Setiap upaya untuk mengakses layanan tanpa izin dapat berakibat pada
            penghentian akun.
          </p>
          <h2 className='mt-3 font-medium md:text-lg xl:text-xl'>
            Perubahan Ketentuan
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Kami berhak untuk mengubah syarat dan ketentuan ini kapan saja.
            Setiap perubahan akan diberitahukan melalui platform, dan pengguna
            diharapkan untuk selalu memeriksa pembaruan.
          </p>
          <h2 className='mt-3 font-medium md:text-lg xl:text-xl'>
            Kebijakan Privasi
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Informasi pribadi yang Anda berikan dilindungi oleh kebijakan
            privasi kami. Kami tidak akan membagikan data Anda kepada pihak
            ketiga tanpa persetujuan.
          </p>
          <h2 className='mt-3 font-medium md:text-lg xl:text-xl'>
            Penyelesaian Sengketa
          </h2>
          <p className='mt-3 text-xs text-[#454545] md:text-sm'>
            Setiap sengketa yang timbul dari penggunaan layanan ini akan
            diselesaikan melalui jalur hukum sesuai dengan undang-undang yang
            berlaku di Indonesia.
          </p>
          <button className='mt-3 w-full bg-[#F5CA44] px-3 py-3 text-sm font-medium'>
            Saya Setuju dengan Syarat dan Ketentuan
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsPage;
