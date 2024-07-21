import type { CardAttributes } from '@/components/Card'
import type { ReactNode } from 'react'
import DisplayTitle from '@/components/Title/Display'
import Card from '@/components/Card'
import { tw } from '@/shared/lib'

export type CardPortraitProps = CardAttributes & {
  eyebrow?: ReactNode
}

const CardPortrait: RFZ<CardPortraitProps> = ({
  eyebrow,
  title,
  titleClasses,
  description,
  descriptionClasses,
  ...cardProps
}) => {
  return (
    <Card
      {...cardProps}
      className={tw(
        'inline-block whitespace-normal rounded-2xl p-6 text-sm tracking-normal md:p-7 md:-tracking-base lg:p-8 lg:text-base lg:-tracking-base',
        'w-[260px] min-w-[260px] md:w-[344px] md:min-w-[344px] lg:w-[260px] lg:min-w-[372px]',
        'h-[520px] md:h-[656px] lg:h-[744px]',
        cardProps.className
      )}
    >
      <span className='mb-2 block font-semibold'>{eyebrow}</span>
      <DisplayTitle
        className={tw(
          'mb-2 text-xl -tracking-base md:text-2xl lg:text-2.5xl',
          titleClasses
        )}
      >
        {title}
      </DisplayTitle>
      <p className={tw('md:text-base md:-tracking-base', descriptionClasses)}>
        {description}
      </p>
    </Card>
  )
}

export default CardPortrait
