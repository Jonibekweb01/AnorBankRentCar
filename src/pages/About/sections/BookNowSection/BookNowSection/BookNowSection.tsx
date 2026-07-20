import { Container } from '@mantine/core'

import {
  BookNowWrapper,
  BookNowCard,
  BookNowContent,
  BookNowSubtitle,
  BookNowPhone,
  BookNowDescription,
  BookNowButton,
} from './BookNowSection.styles'

export const BookNowSection = () => {
  return (
    <BookNowWrapper>
      <Container>
        <BookNowCard>
          <BookNowContent>
            <BookNowSubtitle>Looking for a car?</BookNowSubtitle>

            <BookNowPhone>+537 547-6401</BookNowPhone>

            <BookNowDescription>
              Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien
              bibendum ullamcorper in...
            </BookNowDescription>

            <BookNowButton type="button">Book now</BookNowButton>
          </BookNowContent>
        </BookNowCard>
      </Container>
    </BookNowWrapper>
  )
}
