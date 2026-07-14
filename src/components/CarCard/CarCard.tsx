import type { Car } from '../../shared/types/car'
import {
  CarCardWrapper,
  CarCardImage,
  CarCardHeader,
  CarCardTitle,
  CarName,
  CarCategory,
  CarPrice,
  PriceValue,
  CarFeatureList,
  CarFeatureItem,
  CarFeatureIcon,
  CarCardButton,
} from './CarCard.styles'

interface CarCardProps {
  car: Car
}

export const CarCard = ({ car }: CarCardProps) => {
  return (
    <CarCardWrapper>
      <CarCardImage src={car.image} alt={car.name} width={368} height={240} />

      <CarCardHeader>
        <CarCardTitle>
          <CarName>{car.name}</CarName>
          <CarCategory>{car.category}</CarCategory>
        </CarCardTitle>

        <CarPrice>
          <PriceValue>${car.price}</PriceValue>
          <span>per day</span>
        </CarPrice>
      </CarCardHeader>

      <CarFeatureList>
        {car.features.map((feature) => (
          <CarFeatureItem key={feature.label}>
            <CarFeatureIcon src={feature.icon} alt={feature.label} />
            {feature.label}
          </CarFeatureItem>
        ))}
      </CarFeatureList>

      <CarCardButton type="button">View Details</CarCardButton>
    </CarCardWrapper>
  )
}
