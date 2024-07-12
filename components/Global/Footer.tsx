import DisplayTitle from '@/components/Title/Display'
import { Brand, Submenus } from '@/config/const'

const GlobalFooter = () => {
  return (
    <footer className='flex flex-col bg-zinc-900 pt-10 text-sm tracking-normal text-zinc-400'>
      <div className='mx-auto grid w-full max-w-large grid-cols-1 gap-10 px-4 md:w-copy md:grid-cols-[auto,15%,15%,15%] md:gap-0 md:px-0'>
        <div>
          <DisplayTitle as='p' className='text-gold text-xl'>
            {Brand.Name}
          </DisplayTitle>
          <address className='mt-2 block not-italic'>
            Jl. Pangeran Antasari No.70, RW.8,
            <br />
            Cilandak Bar., Kec. Cilandak,
            <br />
            Kota Jakarta Selatan,
            <br />
            Daerah Khusus Ibukota Jakarta 12430
          </address>
          <p className='mt-4'>
            <b className='text-white'>Jam operasional</b>
          </p>
          <p>Senin – Sabtu (10.00-18.00)</p>
        </div>

        <div>
          <p className='text-white'>
            <b>Layanan</b>
          </p>
          <ul className='mt-2 space-y-1'>
            {Submenus.services.map((submenu, index) => (
              <li key={index}>{submenu.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className='text-white'>
            <b>Info</b>
          </p>
          <ul className='mt-2 space-y-1'>
            {[
              {
                name: 'Portfolio',
                path: '/',
              },
              {
                name: 'Mitra',
                path: '/',
              },
              {
                name: 'Tentang',
                path: '/',
              },
              {
                name: 'Kontak',
                path: '/',
              },
            ].map((submenu, index) => (
              <li key={index}>{submenu.name}</li>
            ))}
          </ul>
        </div>
        <div>
          <p className='text-white'>
            <b>Follow us</b>
          </p>
          <ul className='mt-2 space-y-1'>
            {[
              {
                name: 'Instagram',
                path: '/',
              },
              {
                name: 'Facebook',
                path: '/',
              },
              {
                name: 'Twitter/X',
                path: '/',
              },
              {
                name: 'TikTok',
                path: '/',
              },
            ].map((submenu, index) => (
              <li key={index}>{submenu.name}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className='mx-auto mt-3 w-full max-w-large border-t border-zinc-700 px-4 py-3 text-xs tracking-base md:w-copy md:px-0'>
        Copyright © 2024 CV. Gelora Tujuh Utama. All rights reserved.
      </div>
    </footer>
  )
}

export default GlobalFooter
