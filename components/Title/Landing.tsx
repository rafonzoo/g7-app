import type { ReactNode } from 'react'
import DisplayTitle from '@/components/Title/Display'
import LazyImage from '@/components/Image/Lazy'
import { tw } from '@/shared/lib'

export type LandingTitleProps = {
  title: ReactNode
  eyebrow?: string
  imageUrl?: string
  headline?: ReactNode
  disableBorder?: boolean
  enhancedTitle?: boolean
}

const LandingTitle: RFZ<LandingTitleProps> = ({
  title,
  eyebrow,
  headline,
  imageUrl,
  disableBorder,
  enhancedTitle,
}) => {
  const validImage = !!imageUrl
    ?.toLowerCase()
    ?.match(/.(png|jpg|jpeg|mov|mp4)/g)

  return (
    <section>
      <div
        className='relative overflow-hidden'
        data-template-elevated={!!imageUrl ? '' : void 0}
        data-typography-enhanced={!!enhancedTitle ? '' : void 0}
      >
        <div
          className={tw(
            'mx-auto my-[60px] w-safe max-w-large text-center md:my-[77px]',
            // Elevated
            '[[data-template-elevated]_&]:md:my-20 [[data-template-elevated]_&]:lg:my-24',
            '[[data-template-elevated]_&]:my-[70px] [[data-template-elevated]_&]:max-w-super',
            // Enhanced
            '[[data-typography-enhanced]_&]:max-lg:mb-12 [[data-typography-enhanced]_&]:max-lg:mt-14'
          )}
        >
          {eyebrow && (
            <p className='mb-2.5 text-sm font-semibold uppercase tracking-wider text-zinc-600 md:text-lg'>
              {eyebrow}
            </p>
          )}
          <DisplayTitle
            as='h2'
            className={tw(
              'mx-auto w-safe whitespace-pre-line text-4xl md:w-full md:text-4.5xl lg:text-5xl',
              // Elevated
              '[[data-template-elevated]_&]:max-w-[320px] [[data-template-elevated]_&]:md:max-w-[540px] [[data-template-elevated]_&]:lg:max-w-[980px]',
              '[[data-template-elevated]_&]:text-4.5xl [[data-template-elevated]_&]:md:text-6xl [[data-template-elevated]_&]:lg:text-7.5xl',
              // Enhanced
              '[[data-typography-enhanced]_&]:!leading-none [[data-typography-enhanced]_&]:max-lg:text-[54px]'
            )}
          >
            {title}
          </DisplayTitle>
          {headline && (
            <div
              className={tw(
                'mx-auto mt-5 text-lg !leading-normal md:mt-7 md:text-xl lg:mt-8',
                // Elevated
                '[[data-template-elevated]_&]:max-w-[370px] [[data-template-elevated]_&]:md:max-w-[480px]',
                '[[data-template-elevated]_&]:lg:max-w-[980px] [[data-template-elevated]_&]:lg:text-2xl'
              )}
            >
              {headline}
            </div>
          )}
        </div>
        {!validImage || !imageUrl ? (
          disableBorder ? null : (
            <div className='mx-auto mb-[60px] w-safe max-w-large md:mb-[77px] md:w-copy'>
              <hr />
            </div>
          )
        ) : (
          <div className={tw('relative mx-auto max-w-super pt-[75%]')}>
            {imageUrl.includes('.mp4') ? (
              <video
                src={imageUrl}
                loop
                playsInline
                muted
                autoPlay
                className='absolute left-0 top-0 h-full w-full object-cover'
              />
            ) : (
              <LazyImage
                imageUrl={imageUrl}
                className='absolute left-0 top-0 h-full w-full object-cover'
              />
            )}
          </div>
        )}
      </div>
    </section>
  )
}

export default LandingTitle
