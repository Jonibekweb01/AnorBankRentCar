import styled from 'styled-components'
import { Link } from 'react-router'

export const AboutSectionWrapper = styled.section`
  padding: 64px 0 80px;
`

export const AboutHeading = styled.div`
  margin-bottom: 72px;
  text-align: center;

  h1 {
    margin: 0 0 14px;
    color: #111111;
    font-size: 42px;
    font-weight: 700;
    line-height: 1.2;
  }
`

export const AboutBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #9b9b9b;
  font-size: 13px;
`

export const AboutBreadcrumbLink = styled(Link)`
  color: #9b9b9b;
  text-decoration: none;

  &:hover {
    color: #b10045;
  }
`

export const AboutBreadcrumbCurrent = styled.span`
  color: #111111;
`

export const AboutContentGrid = styled.div`
  display: grid;
  grid-template-columns: 290px minmax(0, 1fr);
  gap: 80px;
  align-items: start;
  margin-bottom: 64px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`

export const AboutMainTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.05;

  @media (max-width: 576px) {
    font-size: 34px;
  }
`

export const AboutFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 34px 70px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 28px;
  }
`

export const AboutFeature = styled.article``

export const AboutFeatureTitle = styled.h3`
  margin: 0 0 12px;
  color: #111111;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.2;
`

export const AboutFeatureText = styled.p`
  max-width: 310px;
  margin: 0;
  color: #333333;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
`

export const AboutVideo = styled.div`
  position: relative;
  height: 500px;
  overflow: hidden;
  border-radius: 18px;

  @media (max-width: 768px) {
    height: 340px;
  }

  @media (max-width: 576px) {
    height: 260px;
  }
`

export const AboutVideoImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const AboutPlayButton = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;
  padding-left: 4px;
  color: #ffffff;
  font-size: 24px;
  background-color: #b10045;
  border: 0;
  border-radius: 50%;
  cursor: pointer;
  transform: translate(-50%, -50%);
  transition:
    background-color 180ms ease,
    transform 180ms ease;

  &:hover {
    background-color: #900038;
    transform: translate(-50%, -50%) scale(1.06);
  }
`

export const AboutStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 48px;

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const AboutStat = styled.div`
  text-align: center;
`

export const AboutStatValue = styled.div`
  margin-bottom: 8px;
  color: #b10045;
  font-size: 52px;
  font-weight: 700;
  line-height: 1;
`

export const AboutStatLabel = styled.div`
  color: #111111;
  font-size: 13px;
  font-weight: 700;
`