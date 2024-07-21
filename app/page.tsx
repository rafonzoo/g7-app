'use client'

import CardList from '@/components/List/Card'
import CardListHow from '@/components/List/CardHow'
import CardListWhy from '@/components/List/CardWhy'
import DisplayTitle from '@/components/Title/Display'
import { HomeVideo } from '@/app/client'
import { Brand, Portfolio, Services } from '@/config/const'
import { tw } from '@/shared/lib'
import { keys } from '@/tools/helpers'

export default function Home() {
  const servicesItems = keys(Services).map((servicesKey) => ({
    url: Services[servicesKey].path,
    cardImageUrl: Services[servicesKey].cardImage,
    title: servicesKey.replace(/-/g, ' '),
    description: Services[servicesKey].tagline,
    titleClasses: tw('capitalize'),
    className: tw('bg-zinc-100'),
  }))

  const portfolios = [
    Portfolio[0],
    Portfolio[2],
    Portfolio[3],
    Portfolio[4],
  ].map((item) => ({
    url: item.slug,
    title: `“${item.quote}”`,
    description: 'Apartment · 3 Ruang · 47.2m2',
    className: tw('bg-zinc-100'),
    eyebrow: <span className='mb-2 block font-semibold'>{item.owner}</span>,
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
          <HomeVideo />
        </div>
      </section>
      <section>
        <CardList
          fullHeight
          title={'Explore our\xA0services'}
          items={servicesItems}
        />
        <CardList
          fullHeight
          title='They’re all proudly said'
          items={portfolios}
        />
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
