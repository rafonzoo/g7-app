'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { tw } from '@/shared/lib'
import { useRouter } from 'next/navigation'
import { CgMenuGridO } from 'react-icons/cg'
import { Menus } from '@/config/const'

const MobileHeader = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (!showMenu && showSubmenu) {
      setShowSubmenu(false)
    }
  }, [showMenu, showSubmenu])

  return (
    <header
      className={tw(
        'fixed left-0 right-0 top-0 border-b border-zinc-200 bg-zinc-100 md:hidden',
        'z-50 transition-[height] duration-500',
        showMenu ? 'h-screen overflow-auto' : 'h-12 overflow-hidden'
      )}
    >
      <div className='flex justify-between'>
        <button
          className='inline-flex h-12 w-12 items-center justify-center text-3xl'
          aria-label='Toggle menu'
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <CgMenuGridO />
        </button>
        <Link
          href='/'
          className='inline-flex h-12 w-12 items-center justify-center'
          title='Home'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/g7-logo.svg' alt='Logo' />
        </Link>
        <span className='inline-block h-12 w-12'></span>
      </div>
      <nav className='flex flex-col divide-y-[1px] px-8 pt-8'>
        {Menus.map((menuItem, index) => (
          <div key={index} className='border-zinc-200'>
            {Array.isArray(menuItem.path) ? (
              <div className='group'>
                <button
                  className='flex h-12 w-full items-center justify-between'
                  onClick={() => setShowSubmenu((prev) => !prev)}
                >
                  <span>{menuItem.name}</span>
                  <span>+</span>
                </button>
                <div
                  className={tw(
                    'min-w-[120px] flex-col space-y-2 overflow-hidden rounded-lg px-3',
                    'transition-[height] duration-300',
                    showSubmenu ? 'h-[170px]' : 'h-0'
                  )}
                >
                  {menuItem.path.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.path as string}
                      className='flex h-8 items-center'
                      onClick={() => setShowMenu(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                href={menuItem.path}
                className='flex h-12 items-center'
                onClick={() => setShowMenu(false)}
              >
                {menuItem.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </header>
  )
}

const DesktopHeader = () => {
  return (
    <header className='fixed left-0 right-0 top-0 z-50 hidden border-b border-zinc-200 bg-zinc-100 md:block'>
      <div className='mx-auto flex h-12 w-copy max-w-large items-center justify-between md:pr-4 lg:px-0'>
        <Link
          href='/'
          className='inline-flex h-12 w-12 items-center'
          title='Home'
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src='/g7-logo.svg' alt='Logo' />
        </Link>
        <nav className='flex space-x-6'>
          {Menus.map((menuItem, index) => (
            <div key={index} className='text-sm'>
              {Array.isArray(menuItem.path) ? (
                <div className='group relative'>
                  <p className='cursor-pointer'>{menuItem.name}</p>
                  <div className='absolute left-1/2 top-5 hidden min-w-[120px] -translate-x-1/2 flex-col space-y-2 rounded-lg bg-white py-3 shadow group-hover:flex'>
                    {menuItem.path.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.path as string}
                        className='px-3 py-1 hover:bg-zinc-100'
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link href={menuItem.path}>{menuItem.name}</Link>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  )
}

const GlobalHeader = () => {
  return (
    <>
      <MobileHeader />
      <DesktopHeader />
    </>
  )
}

export default GlobalHeader
