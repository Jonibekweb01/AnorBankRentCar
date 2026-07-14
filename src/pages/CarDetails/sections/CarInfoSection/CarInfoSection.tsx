import { Container } from '@mantine/core'

import DemoCarDetails from '../../../../assets/images/car-details-image-primary.png'
import DemoCarDetails2 from '../../../../assets/images/car-details-image-secondary.svg'

import TransmissionIcon from '../../../../assets/images/transmission-icon.svg'
import FuelIcon from '../../../../assets/images/fuel-icon.svg'
import AirIcon from '../../../../assets/images/climate-icon.svg'

import {
  CarDetailsSectionWrapper,
  CarDetailsGrid,
  CarDetailsLeft,
  CarDetailsTitle,
  CarDetailsPrice,
  CarDetailsImage,
  CarDetailsGallery,
  CarDetailsGalleryImage,
  CarDetailsRight,
  TechnicalTitle,
  TechnicalGrid,
  TechnicalCard,
  TechnicalIcon,
  TechnicalLabel,
  TechnicalValue,
  RentButton,
  EquipmentWrapper,
  EquipmentTitle,
  EquipmentGrid,
  EquipmentItem,
  EquipmentCheck,
} from './CarInfoSection.styles'

const technicalSpecifications = [
  {
    icon: TransmissionIcon,
    label: 'Gear Box',
    value: 'Automat',
  },
  {
    icon: FuelIcon,
    label: 'Fuel',
    value: 'Petrol',
  },
  {
    icon: FuelIcon,
    label: 'Doors',
    value: '2',
  },
  {
    icon: AirIcon,
    label: 'Air Conditioner',
    value: 'Yes',
  },
  {
    icon: TransmissionIcon,
    label: 'Seats',
    value: '5',
  },
  {
    icon: AirIcon,
    label: 'Distance',
    value: '500',
  },
]

const equipment = [
  'ABS',
  'ABS',
  'Air Bags',
  'Air Bags',
  'Cruise Control',
  'Air Conditioner',
]

export const CarInfoSection = () => {
  return (
    <CarDetailsSectionWrapper>
      <Container>
        <CarDetailsGrid>
          <CarDetailsLeft>
            <CarDetailsTitle>BMW</CarDetailsTitle>

            <CarDetailsPrice>
              $25 <span>/ day</span>
            </CarDetailsPrice>

            <CarDetailsImage
              width={636}
              height={303}
              src={DemoCarDetails}
              alt="BMW"
            />

            <CarDetailsGallery>
              <CarDetailsGalleryImage src={DemoCarDetails2} alt="BMW view 1" />
              <CarDetailsGalleryImage src={DemoCarDetails2} alt="BMW view 2" />
              <CarDetailsGalleryImage src={DemoCarDetails2} alt="BMW view 3" />
            </CarDetailsGallery>
          </CarDetailsLeft>

          <CarDetailsRight>
            <TechnicalTitle>Technical Specification</TechnicalTitle>

            <TechnicalGrid>
              {technicalSpecifications.map(({ icon, label, value }) => (
                <TechnicalCard key={label}>
                  <TechnicalIcon src={icon} alt="" />

                  <TechnicalLabel>{label}</TechnicalLabel>

                  <TechnicalValue>{value}</TechnicalValue>
                </TechnicalCard>
              ))}
            </TechnicalGrid>

            <RentButton type="button">Rent a car</RentButton>

            <EquipmentWrapper>
              <EquipmentTitle>Car Equipment</EquipmentTitle>

              <EquipmentGrid>
                {equipment.map((item, index) => (
                  <EquipmentItem key={`${item}-${index}`}>
                    <EquipmentCheck>✓</EquipmentCheck>
                    {item}
                  </EquipmentItem>
                ))}
              </EquipmentGrid>
            </EquipmentWrapper>
          </CarDetailsRight>  
        </CarDetailsGrid>
      </Container>
    </CarDetailsSectionWrapper>
  )
}
