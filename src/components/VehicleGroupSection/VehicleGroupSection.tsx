import { useSearchParams } from 'react-router'

import { CarsGrid } from '../CarsGrid/CarsGrid'
import {
  VehicleGroupSectionWrapper,
  VehicleGroupTab,
  VehicleGroupTabs,
  VehicleGroupTitle,
} from './VehicleGroupSection.styles'
import { useCategory } from '../../hooks/useCategory'
import { useCarCard } from '../../hooks/useCarCard'
import type { Car, CarCard } from '../../types/car'
import type { category as CategoryType } from '../../types/category'

export const VehicleGroupSection = () => {
  const [searchParams] = useSearchParams()
  const currentCategory = searchParams.get('category') || 'all'

  const { data: categoryData } = useCategory()
  const { data: carData } = useCarCard()

  const categories = [
    { label: 'All categories', value: 'all' },
    ...(categoryData?.map((item: CategoryType) => ({
      label: item.name,
      value: item.slug || item.name.toLowerCase(),
    })) || []),
  ]

  const cars: Car[] =
    carData?.map((item: CarCard) => ({
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

  const filteredCars =
    currentCategory === 'all'
      ? cars
      : cars.filter(
          (car) => car.category.toLowerCase() === currentCategory.toLowerCase()
        )

  return (
    <VehicleGroupSectionWrapper>
      <VehicleGroupTitle>Select a vehicle category</VehicleGroupTitle>

      <VehicleGroupTabs>
        {categories.slice(0, 5).map((item) => (
          <VehicleGroupTab
            key={item.value}
            to={
              item.value === 'all'
                ? '/vehicles'
                : `/vehicles?category=${item.value}`
            }
            $active={currentCategory === item.value}
          >
            {item.label}
          </VehicleGroupTab>
        ))}
      </VehicleGroupTabs>

      <CarsGrid cars={filteredCars} />
    </VehicleGroupSectionWrapper>
  )
}
