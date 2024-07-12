import DisplayTitle from '@/components/Title/Display'
import { Portfolio, Routes, Services } from '@/config/const'
import Link from 'next/link'

type ServicesProps = {
  params: {
    name: keyof typeof Services
  }
}

const ServicesPage = ({ params }: ServicesProps) => {
  const service = Services[params.name]
  const projects = [...Portfolio].filter((item) => item.type === params.name)

  return (
    <>
      <section>
        <div
          style={{ backgroundImage: 'url(https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)' }} // prettier-ignore
          className='relative flex h-screen max-h-[980px] min-h-[790px] items-start bg-[#E6E2E1] bg-cover bg-center bg-no-repeat md:h-screen'
        >
          <div className='absolute left-0 top-0 h-2/3 w-full bg-gradient-to-b from-[#E6E2E1]/80 from-30% via-[#E6E2E1]/50 to-transparent' />
          <div className='relative z-[1] mx-auto mt-14 max-w-[320px] text-center md:mt-[calc(48px_+_32px)] md:max-w-[680px] lg:max-w-large'>
            <h1 className='sr-only'>Gelora Tujuh {params.name}</h1>
            <p className='mb-2 font-semibold uppercase tracking-wider text-zinc-600 lg:text-lg'>
              {params.name}
            </p>
            <DisplayTitle
              as='p'
              className='text-4.5xl font-bold md:text-5.5xl lg:text-7.5xl'
            >
              {service.title}
            </DisplayTitle>
            <div className='mt-6 flex flex-col items-center justify-center space-y-6 md:flex-row md:space-x-6 md:space-y-0 lg:mt-10'>
              <Link
                href={Routes.contact}
                className='bg-navy rounded-full px-6 py-2.5 font-semibold text-amber-300'
              >
                Kontak
              </Link>
              <span className='hidden h-12 w-px bg-black md:block'></span>
              <p className='mx-auto flex max-w-[80%] justify-center text-xs tracking-base md:max-w-[320px] md:text-left md:text-sm md:tracking-normal lg:max-w-[500px] lg:text-lg lg:leading-6'>
                {service.excerpt}
              </p>
            </div>
          </div>
        </div>
      </section>
      {!!projects.length && (
        <section className='bg-zinc-100 before:table after:table'>
          <div className='mx-6 mb-8 mt-6 pt-0 text-center md:mx-auto md:mt-0 md:max-w-[880px] md:px-5 md:pt-6 lg:max-w-[1180px] lg:pt-10'>
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
                      className='bg-gold text-navy rounded-full px-8 py-4 font-semibold'
                    >
                      Lihat projek
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  )
}

export default ServicesPage
