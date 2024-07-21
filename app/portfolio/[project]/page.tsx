import CardList from '@/components/List/Card'
import PageTemplate from '@/components/Template/Page'
import { Portfolio } from '@/config/const'
import { tw } from '@/shared/lib'
import { notFound } from 'next/navigation'

type PortfolioProps = {
  params: {
    project: string
  }
}

const PortfolioPage = ({ params }: PortfolioProps) => {
  const project = Portfolio.find((item) => item.slug.includes(params.project))

  if (!project) {
    return notFound()
  }

  const others = Portfolio.filter((item) => item.slug !== project.slug)
  const portfolios = others.map((item) => ({
    title: item.name,
    description: 'Apartment · 3 Ruang · 47.2m2',
    className: tw('bg-white'),
    url: item.slug,
  }))

  return (
    <PageTemplate
      title={project.name}
      eyebrow={project.type}
      imageUrl='s'
      enhancedTitle
      headline={'This project uses a modern classic concept with a masculine touch, lorem\xA0ipsum.'} // prettier-ignore
    >
      <section>
        <div className='pb-28 pt-20 lg:pb-40 lg:pt-32'>
          <div className='mx-auto w-safe max-w-44 md:w-full md:max-w-[368px] lg:max-w-[456px]'>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-6 text-center md:grid-cols-4 lg:gap-x-6'>
              <li className='flex flex-col justify-center'>
                <div className='mx-auto h-32 w-20 bg-blue-200 lg:h-36 lg:w-24'></div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  Interior
                </p>
              </li>
              <li className='flex flex-col justify-center'>
                <div className='mx-auto h-32 w-20 bg-blue-200 lg:h-36 lg:w-24'></div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  3 Ruang
                </p>
              </li>
              <li className='flex flex-col justify-center'>
                <div className='mx-auto h-32 w-20 bg-blue-200 lg:h-36 lg:w-24'></div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  49 m<sup>2</sup>
                </p>
              </li>
              <li className='flex flex-col justify-center'>
                <div className='mx-auto h-32 w-20 bg-blue-200 lg:h-36 lg:w-24'></div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  Jakarta
                </p>
              </li>
            </ul>
          </div>
          <div className='mt-10 lg:mt-12'>
            <p className='mx-auto w-safe max-w-[290px] text-center md:max-w-[600px] md:text-lg lg:max-w-[663px] lg:text-xl lg:leading-normal'>
              As players fight for their lives in the toxic, devil-ridden
              environment of Vampire Survivors+, a whole new world of horror is
              unleashed. From dusk to dawn, night creatures will cross their
              paths, forcing them to rely on the goodwill of their fellow
              survivors in order to prevail. While garlic, a cross, and a magic
              wand are useful tools to defeat their enemies, the responsibility
              ultimately lies in their capable hands.
            </p>
            <button className='mx-auto mt-10 block rounded-full bg-gradient-to-br from-gold to-amber-600 px-6 py-2.5 font-semibold text-white md:text-lg lg:mt-16 lg:px-8 lg:py-4 lg:text-xl'>
              KONSUL
            </button>
          </div>
        </div>
      </section>
      <section>
        <div className='bg-zinc-100'>
          <CardList
            fullHeight
            title='Lainnya'
            items={portfolios}
            listClasses={tw('max-md:px-[calc(50vw_-_min(501px,_87.5vw)/2)]')}
            titleClasses={tw('max-md:max-w-[501px] mx-auto')}
          />
        </div>
      </section>
    </PageTemplate>
  )
}

export default PortfolioPage
