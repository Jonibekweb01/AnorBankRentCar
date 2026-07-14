import type { Car } from '../../shared/types/car'
import { CarCard } from '../CarCard/CarCard'
import { CarsGridWrapper } from './CarsGrid.styles'

interface CarsGridProps {
  cars: Car[]
}

export const CarsGrid = ({ cars }: CarsGridProps) => {
  return (
    <CarsGridWrapper>
      {cars.map((car) => (
        <CarCard key={car.id} car={car} />
      ))}
    </CarsGridWrapper>
  )
}
