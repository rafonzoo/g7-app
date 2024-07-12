import DisplayTitle from '@/components/Title/Display'
import { Portfolio, Services } from '@/config/const'

const PortfolioSection: RFZ<{ name: keyof typeof Services }> = ({ name }) => {
  return (
    <div className='mt-12 md:mt-20 lg:mt-[120px]'>
      <div className='mx-auto w-safe max-w-super'>
        <DisplayTitle
          as='h2'
          className='text-2xl capitalize md:text-3xl lg:text-4.5xl'
        >
          {name}
        </DisplayTitle>
      </div>
      <ul className='mx-auto flex space-x-3 overflow-auto px-[calc(50vw_-_min(1548px,_87.5vw)/2)] pt-2.5 lg:pt-4'>
        {Portfolio.filter((item) => item.type === name).map(
          (project, index) => (
            <li
              key={index}
              className='inline-block w-[260px] min-w-[260px] whitespace-normal text-sm tracking-normal md:w-[344px] md:min-w-[344px] md:-tracking-base lg:w-[260px] lg:min-w-[372px] lg:text-base lg:-tracking-base'
            >
              <figure className='h-[146px] rounded bg-zinc-100 md:h-[194px] lg:h-[210px]' />
              <div className='flex flex-col py-1.5 text-sm tracking-base'>
                <p>{project.name}</p>
                <p className='-mt-0.5 text-zinc-500'>{project.owner}</p>
              </div>
            </li>
          )
        )}
      </ul>
    </div>
  )
}

const PortfolioPage = () => {
  const projects = Object.keys(Services) as (keyof typeof Services)[]
  return (
    <>
      <section
        id='section-landing'
        className='relative overflow-hidden before:table after:table'
      >
        <div className='mx-auto mb-14 mt-16 w-safe max-w-super text-center md:mt-20 lg:mt-24'>
          <p className='mb-1 font-semibold uppercase tracking-wider text-zinc-600 lg:text-lg'>
            Portfolio
          </p>
          <DisplayTitle
            as='h2'
            className='mx-auto max-w-[320px] text-5xl !leading-[1.05] md:max-w-[590px] md:text-6.5xl lg:max-w-[720px] lg:text-7.5xl'
          >
            Amazing result for&nbsp;a nice dream.
          </DisplayTitle>
          <p className='mx-auto mt-4 max-w-[300px] md:max-w-[420px] md:text-xl md:leading-7 lg:mt-5 lg:max-w-[520px] lg:text-2xl lg:leading-8'>
            Private Cloud Compute sets a new standard for privacy in artificial
            intelligence
          </p>
        </div>
        <div className='relative mx-auto h-[276px] md:h-[600px] lg:h-[870px] lg:max-w-super'>
          <figure className='absolute left-1/2 top-0 mx-auto h-full w-[525px] -translate-x-1/2 rounded-2xl bg-zinc-100 md:w-large lg:w-super' />
        </div>
      </section>
      <section className='flex flex-col space-y-8 pb-12 md:space-y-10 md:pb-20 lg:space-y-12 lg:pb-[120px]'>
        {projects.map((project, index) => (
          <PortfolioSection key={index} name={project} />
        ))}
      </section>
    </>
  )
}

export default PortfolioPage
