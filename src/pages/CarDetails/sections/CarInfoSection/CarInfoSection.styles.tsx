import styled from 'styled-components'

export const CarDetailsSectionWrapper = styled.section`
  padding: 80px 0;
`

export const CarDetailsGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 0.95fr);
  gap: 48px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

export const CarDetailsLeft = styled.div``

export const CarDetailsTitle = styled.h2`
  margin: 0 0 12px;
  color: #111111;
  font-size: 38px;
  font-weight: 700;
  line-height: 1.2;
`

export const CarDetailsPrice = styled.div`
  margin-bottom: 24px;
  color: #b10045;
  font-size: 28px;
  font-weight: 700;

  span {
    color: #777777;
    font-size: 16px;
    font-weight: 500;
  }
`

export const CarDetailsImage = styled.img`
  width: 100%;
  max-width: 560px;
  height: auto;
  margin-bottom: 20px;
  border-radius: 20px;
  object-fit: cover;
`

export const CarDetailsGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 12px;
`

export const CarDetailsGalleryImage = styled.img`
  width: 100%;
  height: 96px;
  border-radius: 14px;
  object-fit: cover;
`

export const CarDetailsRight = styled.div``

export const TechnicalTitle = styled.h2`
  margin: 0 0 32px;
  color: #111111;
  font-size: 22px;
  font-weight: 700;
  line-height: 1.3;
`

export const TechnicalGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 20px;

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`

export const TechnicalCard = styled.div`
  min-height: 112px;
  padding: 20px;
  background-color: #f7f7f7;
  border-radius: 10px;
`

export const TechnicalIcon = styled.img`
  width: 22px;
  height: 22px;
  margin-bottom: 16px;
  object-fit: contain;
`

export const TechnicalLabel = styled.h3`
  margin: 0 0 8px;
  color: #111111;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
`

export const TechnicalValue = styled.p`
  margin: 0;
  color: #777777;
  font-size: 13px;
  line-height: 1.2;
`

export const RentButton = styled.button`
  width: 245px;
  min-height: 48px;
  margin-top: 48px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  background-color: #b10045;
  border: 0;
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: #900038;
  }
`

export const EquipmentWrapper = styled.div`
  margin-top: 48px;
`

export const EquipmentTitle = styled.h2`
  margin: 0 0 28px;
  color: #111111;
  font-size: 22px;
  font-weight: 700;
`

export const EquipmentGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 180px));
  gap: 18px 44px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const EquipmentItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #777777;
  font-size: 14px;
`

export const EquipmentCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
  color: #ffffff;
  font-size: 12px;
  font-weight: 700;
  background-color: #b10045;
  border-radius: 50%;
`