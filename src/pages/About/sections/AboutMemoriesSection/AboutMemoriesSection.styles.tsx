import styled from 'styled-components'

export const MemoriesSectionWrapper = styled.section`
  padding: 90px 0;
`

export const MemoriesGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(0, 1.15fr) minmax(380px, 0.85fr);
  align-items: center;
  gap: 80px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`

export const MemoriesContent = styled.div`
  min-width: 0;
`

export const MemoriesTitle = styled.h2`
  margin: 0 0 30px;
  color: #111111;
  font-size: 52px;
  font-weight: 700;
  line-height: 1.08;

  @media (max-width: 768px) {
    font-size: 42px;
  }

  @media (max-width: 576px) {
    font-size: 34px;
  }
`

export const MemoriesDescription = styled.p`
  max-width: 720px;
  margin: 0;
  color: #777777;
  font-size: 17px;
  font-weight: 400;
  line-height: 1.45;
`

export const MemoriesList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 40px 55px;
  margin-top: 42px;

  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`

export const MemoriesItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 14px;
`

export const MemoriesCheck = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  flex-shrink: 0;
  margin-top: 1px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  background-color: #b10045;
  border-radius: 50%;
`

export const MemoriesItemText = styled.p`
  margin: 0;
  color: #777777;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.4;
`

export const MemoriesImageWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 20px;
`

export const MemoriesImageElement = styled.img`
  display: block;
  width: 100%;
  height: 560px;
  object-fit: cover;

  @media (max-width: 992px) {
    height: 460px;
  }

  @media (max-width: 576px) {
    height: 330px;
  }
`
