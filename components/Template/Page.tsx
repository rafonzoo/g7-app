import type { LandingTitleProps } from '@/components/Title/Landing'
import LandingTitle from '@/components/Title/Landing'

const PageTemplate: RF<LandingTitleProps> = ({ children, ...landingProps }) => {
  return (
    <>
      <LandingTitle {...landingProps} />
      {children}
    </>
  )
}

export default PageTemplate
