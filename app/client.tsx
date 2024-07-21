import { useRef, useState, useLayoutEffect } from 'react'
import { FaPause, FaPlay } from 'react-icons/fa6'

export const HomeVideo = () => {
  const vidRef = useRef<HTMLVideoElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  useLayoutEffect(() => {
    if (vidRef.current) {
      const target = vidRef.current
      const plays = () => setIsPlaying(true)

      target.addEventListener('play', plays)
      return () => target.removeEventListener('play', plays)
    }
  }, [])

  return (
    <div className='relative mt-14 h-[690px] overflow-hidden rounded-3xl bg-zinc-100 md:mt-18 md:h-auto md:pt-[75%] lg:mt-20 lg:h-[744px]'>
      <video
        ref={vidRef}
        className='absolute left-0 top-0 h-full w-full object-cover object-bottom'
        muted
        loop
        autoPlay
        playsInline
      >
        <source
          type='video/mp4'
          src={[
            process.env.NEXT_PUBLIC_IMAGEKIT_URL,
            '/projects/g7/video/intro.mp4?tr=q-50',
          ].join('')}
        ></source>
      </video>
      <button
        className='absolute bottom-4 right-4 inline-block rounded-full border-[3px] border-white p-2 text-xl text-white'
        onClick={async () => {
          const video = vidRef.current

          if (video) {
            const isVideoPlaying = !!(
              video.currentTime > 0 &&
              video.readyState > 2 &&
              !video.paused &&
              !video.ended
            )

            if (isVideoPlaying) {
              video.pause()
              setIsPlaying(false)

              return
            }

            await video.play()
            setIsPlaying(true)
          }
        }}
      >
        {isPlaying ? <FaPause /> : <FaPlay className='translate-x-px' />}
      </button>
    </div>
  )
}
