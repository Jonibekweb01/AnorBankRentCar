import styled from 'styled-components'

export const BrandSectionWrapper = styled.section`
  padding: 80px 0;
`

export const BrandList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  align-items: center;
  gap: 32px;

  padding: 48px 64px;

  background: #f7f7f7;
  border-radius: 32px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 32px;
  }
`

export const BrandItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const BrandImage = styled.img`
  max-width: 120px;
  width: 100%;
  height: 48px;
  object-fit: contain;
  opacity: 0.9;
  transition: 0.2s;

  &:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`
