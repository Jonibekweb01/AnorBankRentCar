import { Container } from '@mantine/core'
import { CarsGrid } from '../../components/CarsGrid/CarsGrid'
import { useCarCard } from '../../hooks/useCarCard'
import type { Car, CarCard } from '../../types/car'
import { CarInfoSection } from './sections/CarInfoSection/CarInfoSection'

export const CarDetails = () => {
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
    <main>
      <CarInfoSection />
      <Container>
        {isLoading && <p>Loading products...</p>}
        {isError && <p>Failed to load products.</p>}
        <CarsGrid cars={cars.slice(0, 6)} />
      </Container>
    </main>
  )
}
