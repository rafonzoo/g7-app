'use client'

import type { ReactNode, JSX } from 'react'
import Link from 'next/link'
import LazyImage from '@/components/Image/Lazy'
import { tw } from '@/shared/lib'

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

      {cardImageUrl && (
        <LazyImage
          imageUrl={cardImageUrl}
          className='absolute left-0 top-0 z-[1] h-full w-full object-cover object-center'
        />
      )}
    </Tag>
  )
}

export default Card
