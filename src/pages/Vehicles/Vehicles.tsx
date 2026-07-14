import { Container } from '@mantine/core'

import { VehicleGroupSection } from '../../components/VehicleGroupSection/VehicleGroupSection'
import { BrandsSection } from './sections'

export const Vehicles = () => {
  return (
    <main>
      <Container>
        <VehicleGroupSection />
        <BrandsSection />
      </Container>
    </main>
  )
}
