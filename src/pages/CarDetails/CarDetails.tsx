import { Container } from '@mantine/core'
import { CarsGrid } from '../../components/CarsGrid/CarsGrid'
import { cars } from '../../shared/data/cars'
import { CarInfoSection } from './sections/CarInfoSection/CarInfoSection'

export const CarDetails = () => {
  return (
    <main>
      <CarInfoSection />
      <Container>
        <CarsGrid cars={cars} />
      </Container>
    </main>
  )
}
