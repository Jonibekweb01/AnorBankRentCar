import { Container } from '@mantine/core'

import MemoriesImage from '../../../../assets/images/iphone-14-pro-silver-portrait.jpg'
import AppleStore from '../../../../assets/images/app-store.svg'
import PlayMarket from '../../../../assets/images/google-play.svg'

import {
  DownloadAppWrapper,
  DownloadAppCard,
  DownloadAppPhone,
  DownloadAppImage,
  DownloadAppContent,
  DownloadAppSubtitle,
  DownloadAppTitle,
  DownloadAppDescription,
  DownloadAppStores,
  DownloadAppStoreImage,
} from './DownloadAppSection.styles'

export const DownloadAppSection = () => {
  return (
    <DownloadAppWrapper>
      <Container>
        <DownloadAppCard>
          <DownloadAppPhone>
            <DownloadAppImage
              width={247}
              height={540}
              src={MemoriesImage}
              alt="Car rental mobile app"
            />
          </DownloadAppPhone>

          <DownloadAppContent>
            <DownloadAppSubtitle>DOWNLOAD OUR APP</DownloadAppSubtitle>

            <DownloadAppTitle>Download our app</DownloadAppTitle>

            <DownloadAppDescription>
              Turpis morbi enim nisi pulvinar leo dui tellus. Faucibus egestas
              semper diam rutrum dictumst ut donec. Nisi nisi morbi vel in
              vulputate. Nulla nam eget urna fusce vulputate at risus.
            </DownloadAppDescription>

            <DownloadAppStores>
              <DownloadAppStoreImage
                src={AppleStore}
                alt="Download on App Store"
              />

              <DownloadAppStoreImage
                src={PlayMarket}
                alt="Get it on Google Play"
              />
            </DownloadAppStores>
          </DownloadAppContent>
        </DownloadAppCard>
      </Container>
    </DownloadAppWrapper>
  )
}
