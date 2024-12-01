'use client'

import { tw } from '@/shared/lib'
import { useRef, useEffect } from 'react'

const LazyVideo: RFZ<{ src: string; className?: string }> = ({
  src,
  className,
}) => {
  const vidRef = useRef<HTMLVideoElement | null>(null)

  useEffect(() => {
    const video = vidRef.current

    if (video) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLImageElement
            const url = target.getAttribute('data-src')

            if (url) {
              target.src = url
              target.onload = () => {
                target.removeAttribute('data-src')
              }
            }

            observer.unobserve(target)
          }
        })
      })

      observer.observe(video)

      return () => {
        observer.unobserve(video)
      }
    }
  }, [])

  return (
    <video
      ref={vidRef}
      data-src={src}
      loop
      playsInline
      muted
      autoPlay
      className={tw('block', className)}
    />
  )
}

export default LazyVideo
