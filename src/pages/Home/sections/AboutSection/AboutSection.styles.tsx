import styled from 'styled-components'

export const AboutSectionWrapper = styled.section``

export const AboutSectionInner = styled.div`
  display: flex;
  align-items: center;
  padding: 96px 0px 96px 72px;
  gap: 110px;
`

export const AboutImageWrapper = styled.div`
  width: 100%;
  max-width: 520px;
  aspect-ratio: 1 / 1;
  overflow: hidden;
  border-radius: 18px;
`

export const AboutImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutContent = styled.div`
  width: 100%;
`

export const AboutList = styled.div`
  display: flex;
  flex-direction: column;
  //   gap: 34px;
`

export const AboutItem = styled.article`
  display: grid;
  grid-template-columns: 30px minmax(0, 1fr);
  align-items: flex-start;
  gap: 16px;
`

export const AboutItemNumber = styled.span`
  width: 30px;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  color: #ffffff;
  background-color: #b10045;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
`

export const AboutItemContent = styled.div`
  min-width: 0;
`

export const AboutItemTitle = styled.h3`
  margin: 0px 0 20px 0;
  color: #111111;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.25;
`

export const AboutItemDescription = styled.p`
  margin: 0 0 28px 0;
  color: #777777;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
`
