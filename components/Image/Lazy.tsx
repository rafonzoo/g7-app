'use client'

import { tw } from '@/shared/lib'
import { useRef, useEffect } from 'react'

const LazyImage: RFZ<{ imageUrl: string; className?: string }> = ({
  imageUrl,
  className,
}) => {
  const imgRef = useRef<HTMLImageElement | null>(null)
  const prefix = process.env.NEXT_PUBLIC_IMAGEKIT_URL ?? ''
  const url = [prefix + '/projects/g7' + imageUrl].join('')

  useEffect(() => {
    const img = imgRef.current

    if (img) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLImageElement
            const url = target.getAttribute('data-src')

            if (url) target.src = url
            observer.unobserve(target)
          }
        })
      })

      observer.observe(img)

      return () => {
        observer.unobserve(img)
      }
    }
  }, [])

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={imgRef}
      data-src={url}
      alt='Image'
      className={tw('block', className)}
    />
  )
}

export default LazyImage
