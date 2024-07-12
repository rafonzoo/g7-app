import DisplayTitle from '@/components/Title/Display'
import { Brand } from '@/config/const'
import { tw } from '@/shared/lib'

const SectionLanding = () => {
  return (
    <section
      id='section-landing'
      className='mx-auto mt-16 w-safe max-w-super md:mt-20 lg:mt-24'
    >
      <div>
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
      <figure className='mt-14 h-[690px] rounded-3xl bg-zinc-100 md:mt-18 lg:mt-20'></figure>
    </section>
  )
}

export default SectionLanding
