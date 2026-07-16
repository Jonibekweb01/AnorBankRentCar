import { useSearchParams } from 'react-router'

import { useCategories } from '../../hooks/useCategories'
import { cars } from '../../shared/data/cars'
import { CarsGrid } from '../CarsGrid/CarsGrid'
import {
  VehicleGroupSectionWrapper,
  VehicleGroupTab,
  VehicleGroupTabs,
  VehicleGroupTitle,
} from './VehicleGroupSection.styles'

export const VehicleGroupSection = () => {
  const [searchParams] = useSearchParams()
  const { data: apiCategories = [], isLoading, isError, error } = useCategories()

  const currentCategory = searchParams.get('category') || 'all'

  const tabs = [
    { label: 'All vehicles', value: 'all' },
    ...apiCategories.map((item) => ({
      label: item.name,
      value: item.slug,
    })),
  ]

  const filteredCars =
    currentCategory === 'all'
      ? cars
      : cars.filter((car) => car.category.toLowerCase() === currentCategory)

  return (
    <VehicleGroupSectionWrapper>
      <VehicleGroupTitle>Select a vehicle group</VehicleGroupTitle>

      <VehicleGroupTabs>
        {tabs.map((item) => (
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

      {isLoading && <p style={{ marginTop: '16px' }}>Loading categories...</p>}
      {isError && (
        <p style={{ marginTop: '16px' }}>
          {(error as Error)?.message || 'Failed to load categories'}
        </p>
      )}

      <CarsGrid cars={filteredCars} />
    </VehicleGroupSectionWrapper>
  )
}
