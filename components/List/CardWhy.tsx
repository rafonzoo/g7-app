import CardList from '@/components/List/Card'
import { tw } from '@/shared/lib'

const CardListWhy = () => {
  return (
    <CardList
      title={'Why we are the best\xA0brand\xA0for\xA0you.'}
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
  )
}

export default CardListWhy
