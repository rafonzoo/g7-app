'use client'

import type { ReactNode, JSX } from 'react'
import Link from 'next/link'
import LazyImage from '@/components/Lazy/Image'
import { tw } from '@/shared/lib'
import LazyVideo from '@/components/Lazy/Video'

export type CardProps = {
  as?: keyof JSX.IntrinsicElements
  url?: string
  className?: string
  children?: ReactNode
  cardImageUrl?: string
}

export type CardAttributes = CardProps & {
  title: ReactNode
  titleClasses?: string
  description: ReactNode
  descriptionClasses?: string
}

const Card: RFZ<CardProps> = ({
  as: Tag = 'div',
  url,
  className,
  children,
  cardImageUrl,
}) => {
  return (
    <Tag className={tw('relative overflow-hidden', className)}>
      <div className='relative z-[2]'>{children}</div>
      {url && (
        <Link
          href={url}
          aria-label='Go to page'
          className='absolute bottom-0 left-0 right-0 top-0 z-[3]'
        />
      )}

      {cardImageUrl ? (
        cardImageUrl.includes('.mp4') ? (
          <LazyVideo
            src={cardImageUrl}
            className='absolute left-0 top-0 h-full w-full object-cover'
          />
        ) : (
          <LazyImage
            src={cardImageUrl}
            className='absolute left-0 top-0 h-full w-full object-cover'
          />
        )
      ) : null}
    </Tag>
  )
}

export default Card
