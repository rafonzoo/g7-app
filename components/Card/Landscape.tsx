import type { ReactNode } from 'react'
import type { CardProps } from '@/components/Card'
import Card from '@/components/Card'
import { tw } from '@/shared/lib'

type CardLandscapeProps = CardProps & {
  description: ReactNode
  title: ReactNode
}

const CardLandscape: RFZ<CardLandscapeProps> = ({
  title,
  description,
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
      <figure className='h-[146px] rounded bg-zinc-100 md:h-[194px] lg:h-[210px]' />
      <div className='flex flex-col py-1.5 text-sm tracking-base'>
        <p>{title}</p>
        <p className='-mt-0.5 text-zinc-500'>{description}</p>
      </div>
    </Card>
  )
}

export default CardLandscape
