import type { FC, ReactNode } from 'react'
import { Playfair_Display } from 'next/font/google'
import { tw } from '@/shared/lib'

type DisplayTitleProps = {
  children?: ReactNode
  className?: string
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'p'
}

const playfair = Playfair_Display({ subsets: ['latin'] })

const DisplayTitle: FC<DisplayTitleProps> = ({
  children,
  className,
  as: DynamicComponent = 'h3',
}) => {
  return (
    <DynamicComponent
      className={tw(
        playfair.className,
        '!font-bold !leading-[1.17] !tracking-normal',
        className
      )}
    >
      {children}
    </DynamicComponent>
  )
}

export default DisplayTitle
