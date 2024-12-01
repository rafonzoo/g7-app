import CardList from '@/components/List/Card'
import CardListWhy from '@/components/List/CardWhy'
import PageTemplate from '@/components/Template/Page'
import { Services } from '@/config/const'
import { tw } from '@/shared/lib'
import { keys } from '@/tools/helpers'

const AboutPage = () => {
  const servicesItems = keys(Services).map((key) => ({
    title: key.replace(/-/g, ' '),
    url: Services[key].path,
    cardImageUrl: Services[key].cardImage,
    description: Services[key].tagline,
    titleClasses: tw('capitalize'),
    className: tw('bg-zinc-100'),
  }))

  return (
    <PageTemplate
      eyebrow='Tentang'
      title={'Gelora Tujuh\xA0Utama'}
      headline='Architecture Design and General Contractor'
    >
      <section className='-mt-[70px] md:-mt-20 lg:-mt-24'>
        <CardList fullHeight title='Layanan kami' items={servicesItems} />
      </section>
      <section>
        <div className='bg-zinc-100'>
          <CardListWhy />
        </div>
      </section>
    </PageTemplate>
  )
}

export default AboutPage
