import DisplayTitle from '@/components/Title/Display'
import PageTemplate from '@/components/Template/Page'
import CardLandscape from '@/components/Card/Landscape'
import { Portfolio, Services } from '@/config/const'
import { keys } from '@/tools/helpers'

const PortfolioPage = () => {
  const projects = keys(Services)

  return (
    <PageTemplate
      imageUrl='s'
      eyebrow='Portfolio'
      title={'Dream\xA0it. Make\xA0it\xA0real.'}
      headline='Private Cloud Compute sets a new standard for privacy in artificial intelligence.'
    >
      <section className='-mt-[70px] md:-mt-20 lg:-mt-24'>
        <div className='flex flex-col space-y-8 pb-12 md:space-y-10 md:pb-20 lg:space-y-12 lg:pb-[120px]'>
          {projects.map((name, index) => (
            <div key={index} className='mt-12 md:mt-20 lg:mt-[120px]'>
              {!!Portfolio.filter((item) => item.type === name).length && (
                <div className='mx-auto w-safe max-w-super'>
                  <DisplayTitle
                    as='h2'
                    className='text-2xl capitalize md:text-3xl lg:text-4.5xl'
                  >
                    {name.replace(/-/g, ' ')}
                  </DisplayTitle>
                </div>
              )}
              <ul className='mx-auto flex space-x-3 overflow-auto px-[calc(50vw_-_min(1548px,_87.5vw)/2)] pt-2.5 will-change-transform lg:pt-4'>
                {Portfolio.filter((item) => item.type === name).map(
                  (project, index) => (
                    <CardLandscape
                      key={index}
                      as='li'
                      title={project.name}
                      description={project.owner}
                      url={project.slug}
                      cardImageUrl={project.galleries[0]}
                    />
                  )
                )}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </PageTemplate>
  )
}

export default PortfolioPage
