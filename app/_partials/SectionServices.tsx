import CardList from '@/components/Cards/List'
import { tw } from '@/shared/lib'

const SectionServices = () => {
  return (
    <section id='section-services'>
      <CardList
        fullHeight
        title={<>Explore our&nbsp;services</>}
        items={[
          {
            title: 'Interior',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: 'Exterior',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: 'Furnitur',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: 'Jasa Desain',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', // prettier-ignore
            className: tw('bg-zinc-100'),
          },
        ]}
      />
      <CardList
        fullHeight
        title={<>They’re all proudly said</>}
        items={[
          {
            title: '“Because of you, my dream comes true”',
            description: 'Apartment · 3 Ruang · 47.2m2', // prettier-ignore
            eyebrow: <span className='mb-2 block font-semibold'>Sahilla Hisyam</span>, // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: '“Because of you, my dream comes true”',
            description: 'Apartment · 3 Ruang · 47.2m2', // prettier-ignore
            eyebrow: <span className='mb-2 block font-semibold'>Sahilla Hisyam</span>, // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: '“Because of you, my dream comes true”',
            description: 'Apartment · 3 Ruang · 47.2m2', // prettier-ignore
            eyebrow: <span className='mb-2 block font-semibold'>Sahilla Hisyam</span>, // prettier-ignore
            className: tw('bg-zinc-100'),
          },
          {
            title: '“Because of you, my dream comes true”',
            description: 'Apartment · 3 Ruang · 47.2m2', // prettier-ignore
            eyebrow: <span className='mb-2 block font-semibold'>Sahilla Hisyam</span>, // prettier-ignore
            className: tw('bg-zinc-100'),
          },
        ]}
      />
    </section>
  )
}

export default SectionServices
