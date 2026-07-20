import { useSearchParams } from 'react-router'
import type { CategoryItem } from '../../api/api'
import { useCategories } from '../../hooks/useCategories'
import { useProducts } from '../../hooks/useHooks'
import { CarsGrid } from '../CarsGrid/CarsGrid'
import {
  VehicleGroupSectionWrapper,
  VehicleGroupTab,
  VehicleGroupTabs,
  VehicleGroupTitle,
} from './VehicleGroupSection.styles'

export const VehicleGroupSection = () => {
  const [searchParams] = useSearchParams()
  const { data: apiCategories = [], isLoading: isCatsLoading } = useCategories()
  const {
    data: products = [],
    isLoading: isProdsLoading,
    isError,
  } = useProducts()

  const currentCategory = searchParams.get('category') || 'all'

  const tabs = [
    { label: 'All categories', value: 'all' },
    ...apiCategories.map((item: CategoryItem) => ({
      label: item.name,
      value: item.slug || item.name.toLowerCase(),
    })),
  ]

  const filteredCars = (
    currentCategory === 'all'
      ? products
      : products.filter(
          (prod: any) =>
            prod.category?.name?.toLowerCase() ===
              currentCategory.toLowerCase() ||
            prod.category?.slug?.toLowerCase() === currentCategory.toLowerCase()
        )
  ).map((prod: any) => ({
    id: prod.id,
    name: prod.title,
    category: prod.category?.name || 'Uncategorized',
    price: prod.price,
    image: prod.images?.[0] || 'https://placehold.co/600x400',
    features: [
      { label: 'Brand New', icon: 'https://placehold.co/24' },
      { label: 'Available', icon: 'https://placehold.co/24' },
    ],
  }))

  const isLoading = isCatsLoading || isProdsLoading

  return (
    <VehicleGroupSectionWrapper>
      <VehicleGroupTitle>Select a vehicle category</VehicleGroupTitle>

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

      {isLoading && <p style={{ marginTop: '16px' }}>Loading data...</p>}
      {isError && <p style={{ marginTop: '16px' }}>Failed to load products</p>}

      <CarsGrid cars={filteredCars} />
    </VehicleGroupSectionWrapper>
  )
}
