import styled from 'styled-components'

export const FeaturesSectionWrapper = styled.section`
  padding: 90px 0;
`

export const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`
