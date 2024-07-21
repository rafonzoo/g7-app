import type { FC, ReactNode } from 'react'
import type { CardPortraitProps } from '@/components/Card/Portrait'
import type { CardAutoHeightProps } from '@/components/Card/AutoHeight'
import DisplayTitle from '@/components/Title/Display'
import CardPortrait from '@/components/Card/Portrait'
import CardAutoHeight from '@/components/Card/AutoHeight'
import { tw } from '@/shared/lib'

type CardListProps = {
  items: (Pick<CardPortraitProps, 'eyebrow'> & CardAutoHeightProps)[]
  title: ReactNode
  titleClasses?: string
  className?: string
  fullHeight?: boolean
  listClasses?: string
}

const CardList: FC<CardListProps> = ({
  items,
  title,
  titleClasses,
  className,
  fullHeight,
  listClasses,
}) => {
  return (
    <div
      className={tw(
        'card-list py-24 md:py-32 lg:py-40 [.card-list_+_&]:pt-0',
        className
      )}
    >
      <div className='mx-auto w-safe max-w-super'>
        <DisplayTitle
          as='h2'
          className={tw('text-3xl md:text-5xl lg:text-5.5xl', titleClasses)}
        >
          {title}
        </DisplayTitle>
      </div>
      <ul
        style={{ transform: 'translateZ(0)' }}
        className={tw(
          'mx-auto flex space-x-5 overflow-auto px-[calc(50vw_-_min(1548px,_87.5vw)/2)] pt-6 md:pt-12 lg:pt-14',
          listClasses
        )}
      >
        {items.map(({ eyebrow, icon, ...item }, index) =>
          fullHeight ? (
            <CardPortrait as='li' key={index} eyebrow={eyebrow} {...item} />
          ) : (
            <CardAutoHeight as='li' key={index} icon={icon} {...item} />
          )
        )}
      </ul>
    </div>
  )
}

export default CardList
