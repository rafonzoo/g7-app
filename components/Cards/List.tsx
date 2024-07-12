import type { FC, ReactNode } from 'react'
import { tw } from '@/shared/lib'
import DisplayTitle from '@/components/Title/Display'

type CardListItemProps = {
  eyebrow?: ReactNode
  title: ReactNode
  description: ReactNode
  className?: string
}

type CardListProps = {
  items: CardListItemProps[]
  title: ReactNode
  className?: string
  cta?: ReactNode
  fullHeight?: boolean
}

const CardList: FC<CardListProps> = ({
  title,
  cta,
  items,
  className,
  fullHeight,
}) => {
  return (
    <div className={tw('my-[96px] md:my-[120px] lg:my-[150px]', className)}>
      <div className='mx-auto w-safe max-w-super'>
        <DisplayTitle as='h2' className='text-3xl md:text-5xl lg:text-5.5xl'>
          {title}
        </DisplayTitle>
        {cta}
      </div>
      <ul className='mx-auto flex space-x-5 overflow-auto px-[calc(50vw_-_min(1548px,_87.5vw)/2)] pt-10 md:pt-16 lg:pt-20'>
        {items.map((item, index) => (
          <li
            key={index}
            className={tw(
              'inline-block w-[260px] min-w-[260px] whitespace-normal rounded-2xl p-6 text-sm tracking-normal md:w-[344px] md:min-w-[344px] md:p-7 md:-tracking-base lg:w-[260px] lg:min-w-[372px] lg:p-8 lg:text-base lg:-tracking-base',
              fullHeight && 'h-[520px] md:h-[656px] lg:h-[744px]',
              item.className
            )}
          >
            {item.eyebrow}
            <DisplayTitle className='mb-2 text-xl -tracking-base md:text-2xl lg:text-2.5xl'>
              {item.title}
            </DisplayTitle>
            <p className={tw(!fullHeight && 'md:text-base md:-tracking-base')}>
              {item.description}
            </p>
          </li>
        ))}
      </ul>
      <nav className='mx-auto mt-12 flex w-safe max-w-super justify-end space-x-2'>
        <button
          className='h-9 w-9 rounded-full bg-zinc-200'
          aria-label='Prev'
        ></button>
        <button
          className='h-9 w-9 rounded-full bg-zinc-200'
          aria-label='Next'
        ></button>
      </nav>
    </div>
  )
}

export default CardList
