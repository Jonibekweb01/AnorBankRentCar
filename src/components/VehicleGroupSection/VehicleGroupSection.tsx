import { useSearchParams } from 'react-router'

import { cars } from '../../shared/data/cars'
import { CarsGrid } from '../CarsGrid/CarsGrid'
import {
  VehicleGroupSectionWrapper,
  VehicleGroupTab,
  VehicleGroupTabs,
  VehicleGroupTitle,
} from './VehicleGroupSection.styles'

const categories = [
  { label: 'All vehicles', value: 'all' },
  { label: 'Sedan', value: 'sedan' },
  { label: 'Cabriolet', value: 'cabriolet' },
  { label: 'Pickup', value: 'pickup' },
  { label: 'Suv', value: 'suv' },
  { label: 'Minivan', value: 'minivan' },
]

export const VehicleGroupSection = () => {
  const [searchParams] = useSearchParams()

  const currentCategory = searchParams.get('category') || 'all'

  const filteredCars =
    currentCategory === 'all'
      ? cars
      : cars.filter((car) => car.category.toLowerCase() === currentCategory)

  return (
    <VehicleGroupSectionWrapper>
      <VehicleGroupTitle>Select a vehicle group</VehicleGroupTitle>

      <VehicleGroupTabs>
        {categories.map((item) => (
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
