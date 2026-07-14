import { Container } from '@mantine/core'
import Banner from '../../../../assets/images/about-banner.png'

import {
  CallToActionContent,
  CallToActionDescription,
  CallToActionForm,
  CallToActionInput,
  CallToActionSectionWrapper,
  CallToActionTitle,
  CallToActionButton,
  CallToActionInner,
} from './CallToActionSection.styles'

export const CallToActionSection = () => {
  return (
    <CallToActionSectionWrapper>
      <Container>
        <CallToActionInner $background={Banner}>
          <CallToActionContent>
            <CallToActionTitle>
              Enjoy every mile with
              <br />
              adorable companionship.
            </CallToActionTitle>

            <CallToActionDescription>
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in. Diam tincidunt tincidunt erat
            </CallToActionDescription>

            <CallToActionForm>
              <CallToActionInput type="text" placeholder="City" />

              <CallToActionButton type="submit">Search</CallToActionButton>
            </CallToActionForm>
          </CallToActionContent>
        </CallToActionInner>
      </Container>
    </CallToActionSectionWrapper>
  )
}
