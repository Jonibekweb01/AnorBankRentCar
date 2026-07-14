import { Container } from '@mantine/core'
import { Link } from 'react-router'

import { HeroForm } from '../../../../components/HeroForm/HeroForm'

import {
  Hero,
  HeroContent,
  HeroDescription,
  HeroInner,
  HeroTitle,
  HeroViewButton,
} from './HeroSection.styles'

export const HeroSection = () => {
  return (
    <Hero>
      <Container>
        <HeroInner>
          <HeroContent>
            <HeroTitle>
              Experience the road
              <br />
              like never before
            </HeroTitle>

            <HeroDescription>
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper.
            </HeroDescription>

            <HeroViewButton as={Link} to="/vehicles">
              View all cars
            </HeroViewButton>
          </HeroContent>

          <HeroForm backgroundColor="#fff" />
        </HeroInner>
      </Container>
    </Hero>
  )
}
