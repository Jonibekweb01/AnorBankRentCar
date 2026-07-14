import styled from 'styled-components'
import Banner from '../../../../assets/images/statistics-banner.png'

interface StatisticsInnerProps {
  $backgroundImage?: string
}

export const StatisticsSectionWrapper = styled.section`
  padding: 96px 0;
`

export const StatisticsInner = styled.div<StatisticsInnerProps>`
  position: relative;
  min-height: 400px;
  padding: 52px 64px 58px;
  overflow: hidden;
  background-color: #b00046;
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage})` : 'none'};
  background-repeat: no-repeat;
  background-position: left bottom;
  background-size: cover;
  border-radius: 20px;
  background-image: url(${Banner});
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(176, 0, 70, 0.18);
    pointer-events: none;
  }

  > * {
    position: relative;
    z-index: 1;
  }
`

export const StatisticsTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: clamp(36px, 4vw, 52px);
  font-weight: 800;
  line-height: 1.05;
  text-align: center;
  letter-spacing: -1px;
`

export const StatisticsDescription = styled.p`
  max-width: 700px;
  margin: 18px auto 0;
  color: rgba(255, 255, 255, 0.92);
  font-size: 16px;
  font-weight: 400;
  line-height: 1.35;
  text-align: center;
`

export const StatisticsGrid = styled.div`
  margin-top: 70px;
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 52px;

  @media (max-width: 1100px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 24px;
  }

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`
