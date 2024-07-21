import CardList from '@/components/List/Card'
import { tw } from '@/shared/lib'

const CardListHow = () => {
  return (
    <CardList
      title='Get to know our work'
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
  )
}

export default CardListHow
