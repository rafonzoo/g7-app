'use client'

import CardList from '@/components/List/Card'
import CardListHow from '@/components/List/CardHow'
import CardListWhy from '@/components/List/CardWhy'
import DisplayTitle from '@/components/Title/Display'
import { Brand, Portfolio, Services } from '@/config/const'
import { tw } from '@/shared/lib'
import { capitalize, keys } from '@/tools/helpers'
import LazyImage from '@/components/Image/Lazy'

export default function Home() {
  const servicesItems = keys(Services).map((servicesKey) => ({
    url: Services[servicesKey].path,
    cardImageUrl: Services[servicesKey].cardImage,
    title: servicesKey.replace(/-/g, ' '),
    description: Services[servicesKey].tagline,
    titleClasses: tw('capitalize'),
    className: tw('bg-zinc-100'),
  }))

  const portfolios = [Portfolio[0], Portfolio[2], Portfolio[3], Portfolio[4]]
    .filter(Boolean)
    .map((item) => ({
      url: item.slug,
      title: capitalize(item.name),
      className: tw('bg-zinc-100'),
      eyebrow: <span className='mb-2 block font-semibold'>{item.owner}</span>,
      cardImageUrl: item.galleries[0],
      description: (
        <>
          {capitalize(item.subtype)} · {item.concept}
          {item.wide ? (
            <>
              {' '}
              · {item.wide} m<sup>2</sup>
            </>
          ) : null}
        </>
      ),
    }))

  return (
    <>
      <section>
        <div className='mx-auto mt-16 w-safe max-w-super md:mt-20 lg:mt-28'>
          <div className='flex flex-col md:flex-row md:items-end md:justify-between'>
            <DisplayTitle
              as='h1'
              className='max-w-[280px] flex-grow text-5xl md:max-w-[470px] md:text-6.5xl lg:text-7.5xl'
            >
              {Brand.Name}
            </DisplayTitle>
            <p
              className={tw(
                'mt-2 text-xl font-semibold tracking-tight',
                'md:mt-0 md:w-full md:pb-1 md:text-right md:text-2xl md:!leading-[1.2]',
                'lg:pb-3 lg:text-2.5xl'
              )}
            >
              {Brand.Tagline}
            </p>
          </div>
        </div>
        <div className='relative mt-14 overflow-hidden bg-zinc-100 pt-[56.25%] md:mt-18'>
          <LazyImage
            imageUrl='https://ik.imagekit.io/jowwgz1mq/projects/g7/home.jpg'
            className='absolute left-0 top-0 h-full w-full object-cover'
          />
        </div>
      </section>
      <section>
        <CardList fullHeight title='Layanan kami' items={servicesItems} />
        {!!portfolios.length && (
          <CardList fullHeight title='Portfolio' items={portfolios} />
        )}
      </section>
      <section>
        <div className='bg-zinc-100'>
          <CardListWhy />
          <CardListHow />
        </div>
      </section>
    </>
  )
}
