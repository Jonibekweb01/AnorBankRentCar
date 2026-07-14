import { Container } from '@mantine/core'
import { FeaturesGrid, FeaturesSectionWrapper } from './FeaturesSection.styles'
import { FeatureItem } from '../../../../components/FeatureItem/FeatureItem'
import carIcon from '../../../../assets/images/feature-car-icon.svg'
import walletIcon from '../../../../assets/images/wallet-icon.svg'
import locationIcon from '../../../../assets/images/location-icon.svg'

export const FeaturesSection = () => {
  return (
    <FeaturesSectionWrapper>
      <Container>
        <FeaturesGrid>
          <FeatureItem
            icon={carIcon}
            title="Availability"
            description="Diam tincidunt tincidunt erat at semper fermentum. Id ultricies quis"
          />

          <FeatureItem
            icon={walletIcon}
            title="Comfort"
            description="Gravida auctor fermentum morbi vulputate ac egestas orcietium convallis"
          />

          <FeatureItem
            icon={locationIcon}
            title="Savings"
            description="Pretium convallis id diam sed commodo vestibulum lobortis volutpat"
          />
        </FeaturesGrid>
      </Container>
    </FeaturesSectionWrapper>
  )
}
