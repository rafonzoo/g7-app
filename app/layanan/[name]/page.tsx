import Link from 'next/link'
import DisplayTitle from '@/components/Title/Display'
import PageTemplate from '@/components/Template/Page'
import { Portfolio, Routes, Services } from '@/config/const'

type ServicesProps = {
  params: {
    name: keyof typeof Services
  }
}

const ServicesPage = ({ params }: ServicesProps) => {
  const service = Services[params.name]
  const projects = [...Portfolio].filter((item) => item.type === params.name)

  return (
    <PageTemplate
      title={service.title}
      eyebrow={params.name.replace(/-/g, ' ')}
      imageUrl={service.cardImage}
      headline={
        <>
          <p>{service.excerpt}</p>
          <Link
            href={Routes.contact}
            className='mt-6 rounded-full bg-navy px-6 py-2.5 text-base font-semibold text-amber-300'
          >
            Kontak
          </Link>
        </>
      }
    >
      {!!projects.length && (
        <section>
          <div className='md:py-20'>
            <div className='mx-auto max-w-[549px] px-6 py-8 text-center md:max-w-[880px] md:px-8 md:py-10 lg:max-w-[1180px]'>
              <ul className='grid grid-cols-1 gap-8'>
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className='overflow-hidden rounded-3xl bg-white'
                  >
                    <figure className='relative h-[286px] w-full bg-zinc-200 md:h-[545px] lg:h-[750px]' />
                    <div className='bg-navy p-8 md:pt-14 lg:pb-14 lg:pt-18'>
                      <DisplayTitle
                        as='h3'
                        className='mx-auto mb-7 max-w-[410px] text-2xl text-zinc-100 md:max-w-[620px] md:text-5xl lg:mb-10 lg:max-w-[780px] lg:text-6.5xl'
                      >
                        “{project.quote}”
                      </DisplayTitle>
                      <p className='text-xl font-semibold text-zinc-300 lg:text-2xl'>
                        {project.owner}
                      </p>
                      <p className='mb-6 mt-1 text-zinc-300 lg:mb-8'>
                        {project.name}
                      </p>
                      <Link
                        href={project.slug}
                        className='rounded-full bg-gold px-8 py-4 font-semibold text-navy'
                      >
                        Lihat projek
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}
    </PageTemplate>
  )
}

export default ServicesPage
