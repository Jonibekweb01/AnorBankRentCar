import styled from 'styled-components'

export const CarCardWrapper = styled.article`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: #fafafa;
  border-radius: 24px;
  transition:
    transform 180ms ease,
    box-shadow 180ms ease;

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const CarCardImage = styled.img`
  width: 100%;
  height: 232px;
  object-fit: cover;
  border-radius: 20px;
`

export const CarCardHeader = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
`

export const CarCardTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const CarName = styled.h3`
  margin: 0;
  font-size: 22px;
  font-weight: 700;
  color: #111111;
`

export const CarCategory = styled.span`
  color: #7c7c7c;
  font-size: 14px;
`

export const CarPrice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;
  white-space: nowrap;

  span {
    font-size: 14px;
    color: #7c7c7c;
  }
`

export const PriceValue = styled.strong`
  font-size: 24px;
  color: #b10045;
`

export const CarFeatureList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0;
`

export const CarFeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  color: #555;
  font-size: 14px;
`

export const CarFeatureIcon = styled.img`
  width: 20px;
  height: 20px;
`

export const CarCardButton = styled.button`
  width: 100%;
  padding: 14px 20px;
  border: 0;
  border-radius: 15px;
  background: #b10045;
  color: #fff;
  font-size: 15px;
  font-weight: 700;
  cursor: pointer;
  transition:
    background 180ms ease,
    transform 180ms ease;

  &:hover {
    background: #93003b;
    transform: translateY(-1px);
  }
`
