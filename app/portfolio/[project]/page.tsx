import CardList from '@/components/List/Card'
import PageTemplate from '@/components/Template/Page'
import { Portfolio } from '@/config/const'
import { tw } from '@/shared/lib'
import { capitalize } from '@/tools/helpers'
import dynamic from 'next/dynamic'
import { notFound } from 'next/navigation'

type PortfolioProps = {
  params: {
    project: string
  }
}

const Galleries = dynamic(() => import('@/components/Galleries'), {
  ssr: false,
})

const PortfolioPage = ({ params }: PortfolioProps) => {
  const project = Portfolio.find((item) => item.slug.includes(params.project))

  if (!project) {
    return notFound()
  }

  const others = Portfolio.filter(
    (item) => item.slug !== project.slug && item.type === project.type
  )
  const portfolios = others.map((item) => ({
    title: item.name,
    className: tw('bg-white'),
    url: item.slug,
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
    <PageTemplate
      title={project.name}
      eyebrow={project.type}
      imageUrl={project.galleries[0]}
      enhancedTitle
      headline={project.excerpt} // prettier-ignore
    >
      <section>
        <div className='pb-28 pt-20 lg:pb-40 lg:pt-32'>
          <div className='mx-auto w-safe max-w-44 md:w-full md:max-w-[368px] lg:max-w-[456px]'>
            <ul className='grid grid-cols-2 gap-x-4 gap-y-6 text-center will-change-transform md:grid-cols-4 lg:gap-x-6'>
              <li className='mb-auto flex flex-col justify-center'>
                <div className='mx-auto flex h-32 w-20 items-end justify-center lg:h-36 lg:w-24'>
                  <svg
                    width={80}
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M7.50001 2L10 9H14L16.5 2H7.50001ZM11.29 10L6.92001 22H7.98401L11.5 12.344V22H12.5V12.35L16.012 22H17.076L12.71 10H11.29Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  {project.concept}
                </p>
              </li>
              {project.wide ? (
                <li className='mb-auto flex flex-col justify-center'>
                  <div className='mx-auto flex h-32 w-20 items-end justify-center lg:h-36 lg:w-24'>
                    <svg
                      width={80}
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M18 16V13H15V22H13V2H15V11H18V8L22 12L18 16ZM2 12L6 16V13H9V22H11V2H9V11H6V8L2 12Z'
                        fill='black'
                      />
                    </svg>
                  </div>
                  <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                    {project.wide} m<sup>2</sup>
                  </p>
                </li>
              ) : null}
              <li className='mb-auto flex flex-col justify-center'>
                <div className='mx-auto flex h-32 w-20 items-end justify-center lg:h-36 lg:w-24'>
                  <svg
                    width={80}
                    viewBox='0 0 16 16'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M8 1.75C7.00544 1.75 6.05161 2.14509 5.34835 2.84835C4.64509 3.55161 4.25 4.50544 4.25 5.5C4.25 7.5715 8 14.56 8 14.56C8 14.56 11.75 7.572 11.75 5.5C11.75 4.50544 11.3549 3.55161 10.6517 2.84835C9.94839 2.14509 8.99456 1.75 8 1.75ZM8 7.292C7.52473 7.292 7.06893 7.1032 6.73286 6.76714C6.3968 6.43107 6.208 5.97527 6.208 5.5C6.208 5.02473 6.3968 4.56893 6.73286 4.23286C7.06893 3.8968 7.52473 3.708 8 3.708C8.47527 3.708 8.93107 3.8968 9.26714 4.23286C9.6032 4.56893 9.792 5.02473 9.792 5.5C9.792 5.97527 9.6032 6.43107 9.26714 6.76714C8.93107 7.1032 8.47527 7.292 8 7.292Z'
                      fill='black'
                    />
                  </svg>
                </div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  {project.location}
                </p>
              </li>
              <li className='mb-auto flex flex-col justify-center'>
                <div className='mx-auto flex h-32 w-20 items-end justify-center lg:h-36 lg:w-24'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    height={80}
                    viewBox='0 0 16 16'
                  >
                    <g clipPath='url(#a)'>
                      <path
                        fill='#000'
                        d='M9.594 3.627c.246 0 .473.048.68.143.614.309.977.897.982 1.552v4.514c-.116.718-.937.523-.957 0V5.574c-.073-.243-.542-.142-.554 0v9.784c-.119.999-1.41.705-1.443-.017V9.35c-.082-.387-.626-.211-.638.017.023 1.99.017 3.982.017 5.974-.129.994-1.413.74-1.443.017L6.22 5.574c-.075-.238-.51-.147-.52 0v4.262c-.115.718-.937.523-.957 0V5.322c.012-.627.242-1.256.79-1.552a1.38 1.38 0 0 1 .654-.143h3.406Zm-.017-2.05a1.577 1.577 0 1 1-3.154 0 1.577 1.577 0 0 1 3.154 0Z'
                      />
                    </g>
                    <defs>
                      <clipPath id='a'>
                        <path fill='#fff' d='M0 0h16v16H0z' />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p className='mt-1 text-sm font-semibold tracking-normal lg:text-base lg:-tracking-base'>
                  {project.owner}
                </p>
              </li>
            </ul>
          </div>
          <div className='mt-10 lg:mt-12'>
            <p className='mx-auto w-safe max-w-[390px] text-center md:max-w-[600px] md:text-lg lg:max-w-[663px] lg:text-xl lg:leading-normal'>
              {project.description}
            </p>
            {project.galleries.length > 1 && (
              <div className='mx-1 mt-20 lg:mt-32' id='masonry'>
                <Galleries urls={project.galleries} />
              </div>
            )}
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
