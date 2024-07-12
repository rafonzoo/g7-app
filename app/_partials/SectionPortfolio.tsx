import CardList from '@/components/Cards/List'
import { tw } from '@/shared/lib'

const SectionPortfolio = () => {
  return (
    <section id='section-portfolio' className='bg-zinc-100'>
      <CardList
        title={<>Why we are the best&nbsp;brand&nbsp;for&nbsp;you.</>}
        items={[
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Free
                <br />
                Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Free
                <br />
                Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Free
                <br />
                Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Free
                <br />
                Consultation
              </>
            ),
          },
        ]}
      />
      <CardList
        title={<>Get to know our work</>}
        items={[
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque. Morbi non malesuada neque. Aenean eu lacinia arcu, non bibendum lacus.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Design Guides
                <br />
                And Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque. Morbi non malesuada neque. Aenean eu lacinia arcu, non bibendum lacus.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Design Guides
                <br />
                And Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque. Morbi non malesuada neque. Aenean eu lacinia arcu, non bibendum lacus.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Design Guides
                <br />
                And Consultation
              </>
            ),
          },
          {
            className: tw('bg-white !pb-14'),
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar mi et mauris pretium scelerisque. Morbi non malesuada neque. Aenean eu lacinia arcu, non bibendum lacus.', // prettier-ignore
            eyebrow: <span className='mb-2 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-blue-200' />, // prettier-ignore
            title: (
              <>
                Design Guides
                <br />
                And Consultation
              </>
            ),
          },
        ]}
      />
    </section>
  )
}

export default SectionPortfolio
