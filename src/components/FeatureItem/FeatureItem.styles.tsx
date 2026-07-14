import styled from 'styled-components'

export const FeatureCard = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`

export const FeatureIcon = styled.div`
  width: 72px;
  height: 72px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 64px;
    height: 64px;
    object-fit: contain;
  }
`

export const FeatureTitle = styled.h3`
  margin: 0;
  margin-bottom: 12px;
  color: #111827;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
`

export const FeatureDescription = styled.p`
  margin: 0;

  color: black;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.7;
`
