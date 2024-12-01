'use client'

import Masonry from 'masonry-layout'
import { useEffect } from 'react'

const Galleries: RF<{ urls: string[] }> = ({ urls }) => {
  useEffect(() => {
    const msnry = new Masonry('#masonry', {
      itemSelector: '.grid-item',
      percentPosition: true,
    })

    setTimeout(() => msnry.layout?.(), 2_000)

    return () => {
      msnry.destroy?.()
    }
  }, [])

  return urls.map((url, index) => (
    <a key={index} href={url} className='grid-item p-1 md:w-1/2'>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={url} alt='#image' className='rounded' />
    </a>
  ))
}

export default Galleries
