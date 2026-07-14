import { Container } from '@mantine/core'
import { Link } from 'react-router'

import { CarsGrid } from '../../../../components/CarsGrid/CarsGrid'
import { cars } from '../../../../shared/data/cars'

import {
  VehiclesHeader,
  VehiclesLink,
  VehiclesSectionWrapper,
  VehiclesTitle,
} from './VehiclesSection.styles'

export const VehiclesSection = () => {
  return (
    <VehiclesSectionWrapper>
      <Container>
        <VehiclesHeader>
          <VehiclesTitle>
            Choose the car that
            <br />
            suits you
          </VehiclesTitle>

          <VehiclesLink as={Link} to="/vehicles">
            View All <span>→</span>
          </VehiclesLink>
        </VehiclesHeader>

        <CarsGrid cars={cars.slice(0, 6)} />
      </Container>
    </VehiclesSectionWrapper>
  )
}
