import Link from 'next/link'
import DisplayTitle from '@/components/Title/Display'
import { Brand, Menus, Submenus } from '@/config/const'

const GlobalFooter = () => {
  return (
    <footer className='flex flex-col bg-zinc-900 pt-10 text-sm tracking-normal text-zinc-400'>
      <div className='mx-auto grid w-full max-w-large grid-cols-1 gap-10 px-4 md:w-copy md:grid-cols-[auto,15%,15%,15%] md:gap-0 md:px-0'>
        <div>
          <DisplayTitle as='p' className='text-xl text-gold'>
            {Brand.Name}
          </DisplayTitle>
          <address className='mt-2 block not-italic'>
            Jems Garden Residence, Ruko Jl. Inpres
            <br />
            Raya No. 1D, RT.003 / RW. 004, Gaga,
            <br />
            Kec. Larangan, Kota Tangerang,
            <br />
            Banten&nbsp;15154
          </address>
          <p className='mt-4'>
            <b className='text-white'>Jam operasional</b>
          </p>
          <p>Senin – Jumat (09.00-17.00)</p>
        </div>

        <div>
          <p className='text-white'>
            <b>Layanan</b>
          </p>
          <ul className='mt-2 space-y-1'>
            {Submenus.services.map((submenu, index) => (
              <li key={index}>
                <Link href={submenu.path as string}>{submenu.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className='text-white'>
            <b>Info</b>
          </p>
          <ul className='mt-2 space-y-1'>
            {Menus.filter((item) => item.name !== 'Layanan').map(
              (submenu, index) => (
                <li key={index}>
                  <Link href={submenu.path as string}>{submenu.name}</Link>
                </li>
              )
            )}
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
                path: 'https://www.instagram.com/geloratujuhutama',
              },
              {
                name: 'Youtube',
                path: 'https://www.youtube.com/@Gelora7Utama',
              },
              {
                name: 'TikTok',
                path: 'https://www.tiktok.com/geloratujuhutama',
              },
              {
                name: 'Pinterest',
                path: 'https://id.pinterest.com/gelora7utama',
              },
            ].map((submenu, index) => (
              <li key={index}>
                <Link href={submenu.path} target='_blank'>
                  {submenu.name}
                </Link>
              </li>
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
