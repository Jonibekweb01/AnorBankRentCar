import { Container } from '@mantine/core'

import Phone from '../../../../assets/images/mobile-app-phone.png'
import AppleStore from '../../../../assets/images/app-store.svg'
import PlayMarket from '../../../../assets/images/google-play.svg'

import {
  MobileAppContent,
  MobileAppDescription,
  MobileAppImage,
  MobileAppImageWrapper,
  MobileAppInner,
  MobileAppSectionWrapper,
  MobileAppStoreImage,
  MobileAppStoreLink,
  MobileAppStores,
  MobileAppTitle,
} from './MobileAppSection.styles'

export const MobileAppSection = () => {
  return (
    <MobileAppSectionWrapper>
      <Container>
        <MobileAppInner>
          <MobileAppContent>
            <MobileAppTitle>
              Download
              <br />
              mobile app
            </MobileAppTitle>

            <MobileAppDescription>
              Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor
              cursus turpis nibh placerat massa. Fermentum urna ut at et in.
              Turpis aliquet cras hendrerit enim condimentum. Condimentum
              interdum risus bibendum urna.
            </MobileAppDescription>

            <MobileAppStores>
              <MobileAppStoreLink href="#" aria-label="Download on App Store">
                <MobileAppStoreImage
                  src={AppleStore}
                  alt="Download on the App Store"
                />
              </MobileAppStoreLink>

              <MobileAppStoreLink href="#" aria-label="Get it on Google Play">
                <MobileAppStoreImage
                  src={PlayMarket}
                  alt="Get it on Google Play"
                />
              </MobileAppStoreLink>
            </MobileAppStores>
          </MobileAppContent>

          <MobileAppImageWrapper>
            <MobileAppImage src={Phone} alt="Mobile application preview" />
          </MobileAppImageWrapper>
        </MobileAppInner>
      </Container>
    </MobileAppSectionWrapper>
  )
}
