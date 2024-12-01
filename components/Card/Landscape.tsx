import type { ReactNode } from 'react'
import type { CardProps } from '@/components/Card'
import Card from '@/components/Card'
import { tw } from '@/shared/lib'
import LazyImage from '@/components/Image/Lazy'

type CardLandscapeProps = CardProps & {
  description: ReactNode
  title: ReactNode
}

const CardLandscape: RFZ<CardLandscapeProps> = ({
  title,
  description,
  cardImageUrl,
  ...cardProps
}) => {
  return (
    <Card
      {...cardProps}
      className={tw(
        'inline-block w-[260px] min-w-[260px] whitespace-normal text-sm tracking-normal md:w-[344px] md:min-w-[344px] md:-tracking-base lg:w-[260px] lg:min-w-[372px] lg:text-base lg:-tracking-base',
        cardProps.className
      )}
    >
      <figure className='relative h-[146px] overflow-hidden rounded bg-zinc-100 md:h-[194px] lg:h-[210px]'>
        {cardImageUrl && (
          <LazyImage
            imageUrl={cardImageUrl}
            className='absolute left-0 top-0 z-[1] h-full w-full object-cover object-center'
          />
        )}
      </figure>
      <div className='flex flex-col py-1.5 text-sm tracking-base'>
        <p>{title}</p>
        <p className='-mt-0.5 text-zinc-500'>{description}</p>
      </div>
    </Card>
  )
}

export default CardLandscape
