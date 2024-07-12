import SectionLanding from '@/app/_partials/SectionLanding'
import SectionPortfolio from '@/app/_partials/SectionPortfolio'
import SectionServices from '@/app/_partials/SectionServices'

export default function Home() {
  return (
    <div className='flex flex-col'>
      <SectionLanding />
      <SectionServices />
      <SectionPortfolio />
    </div>
  )
}
