import { Container } from '@mantine/core'
import { Link } from 'react-router'

import { CarsGrid } from '../../../../components/CarsGrid/CarsGrid'

import {
  VehiclesHeader,
  VehiclesLink,
  VehiclesSectionWrapper,
  VehiclesTitle,
} from './VehiclesSection.styles'
import { useCarCard } from '../../../../hooks/useCarCard'
import type { Car, CarCard } from '../../../../types/car'

export const VehiclesSection = () => {
  const { data, isLoading, isError } = useCarCard()

  const cars: Car[] =
    data?.map((item: CarCard) => ({
      id: item.id,
      name: item.title,
      category: item.category.name,
      price: item.price,
      image:
        item.images?.[0] || 'https://picsum.photos/seed/car-default/600/400',
      transmission: 'Automatic',
      fuel: 'Petrol',
      features: [
        { icon: 'https://placehold.co/24', label: 'Brand New' },
        { icon: 'https://placehold.co/24', label: 'Available' },
      ],
    })) || []

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

        {isLoading && <p>Loading cars...</p>}
        {isError && <p>Failed to load cars.</p>}

        <CarsGrid cars={cars.slice(0, 6)} />
      </Container>
    </VehiclesSectionWrapper>
  )
}
