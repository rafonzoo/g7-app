import { Portfolio } from '@/config/const'
import { notFound } from 'next/navigation'

type PortfolioProps = {
  params: {
    project: string
  }
}

const PortfolioPage = ({ params }: PortfolioProps) => {
  const project = Portfolio.find((item) => item.slug.includes(params.project))
  if (!project) {
    return notFound()
  }
  return (
    <div>
      <p>Portfolio of {project.name}</p>
      <p>Owner: {project.owner}</p>
    </div>
  )
}

export default PortfolioPage
