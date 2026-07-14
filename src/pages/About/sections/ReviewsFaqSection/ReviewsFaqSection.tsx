import { Container } from '@mantine/core'

import CustomerOne from '../../../../assets/images/customer-review-image.svg'

import {
  ReviewsFaqSectionWrapper,
  SectionTitle,
  ReviewsGrid,
  ReviewCard,
  ReviewContent,
  QuoteIcon,
  ReviewText,
  ReviewFooter,
  ReviewAvatar,
  ReviewCompany,
  ReviewName,
  FaqWrapper,
  FaqList,
  FaqItem,
  FaqQuestion,
  FaqArrow,
  FaqAnswer,
} from './ReviewsFaqSection.styles'

const reviews = [
  {
    id: 1,
    text: 'Et aliquet netus at sapien pellentesque mollis nec dignissim maecenas. Amet erat volutpat quisque odio purus feugiat. In gravida neque.',
    company: 'Kuphal LLC',
    name: 'Emanuel Boyle',
    image: CustomerOne,
  },
  {
    id: 2,
    text: 'Purus consectetur varius quis urna phasellus enim mattis. Sem tincidunt tortor nunc egestas amet adipiscing ligula.',
    company: 'Glover - Orn',
    name: 'River Graves',
    image: CustomerOne,
  },
  {
    id: 3,
    text: 'Quam neque odio urna euismod felis. Sit egestas magna in quisque fames dapibus quis sapien magna. Nisl non eget sit pellentesque tristique.',
    company: 'Haag LLC',
    name: 'Ryder Malone',
    image: CustomerOne,
  },
]

const questions = [
  {
    id: 1,
    question: 'How does it works?',
    answer:
      'Imperdiet ut tristique viverra nunc. Ultrices orci vel auctor cursus turpis nibh placerat massa. Fermentum urna ut at et in. Turpis aliquet cras hendrerit enim condimentum.',
  },
  {
    id: 2,
    question: 'Can I rent a car without a credit card?',
    answer:
      'Yes, available payment methods depend on the rental conditions and location. Contact the rental office before booking.',
  },
  {
    id: 3,
    question: 'What are the requirements for renting a car?',
    answer:
      'You need a valid driving licence, an identity document and an accepted payment method.',
  },
  {
    id: 4,
    question:
      'Does Car Rental allow me to tow with or attach a hitch to the rental vehicle?',
    answer:
      'Towing is only permitted for vehicles specifically approved for that purpose and must be confirmed before rental.',
  },
  {
    id: 5,
    question:
      'Does Car Rental offer coverage products for purchase with my rental?',
    answer:
      'Yes, optional coverage products may be available during booking or at the rental location.',
  },
]

export const ReviewsFaqSection = () => {
  return (
    <ReviewsFaqSectionWrapper>
      <Container>
        <SectionTitle>Reviews from our customers</SectionTitle>

        <ReviewsGrid>
          {reviews.map(({ id, text, company, name, image }) => (
            <ReviewCard key={id}>
              <ReviewContent>
                <QuoteIcon>“</QuoteIcon>

                <ReviewText>{text}</ReviewText>
              </ReviewContent>

              <ReviewFooter>
                <ReviewAvatar src={image} alt={name} />

                <ReviewCompany>{company}</ReviewCompany>
                <ReviewName>{name}</ReviewName>
              </ReviewFooter>
            </ReviewCard>
          ))}
        </ReviewsGrid>

        <FaqWrapper>
          <SectionTitle>Top Car Rental Questions</SectionTitle>

          <FaqList>
            {questions.map(({ id, question, answer }, index) => (
              <FaqItem key={id} open={index === 0}>
                <FaqQuestion>
                  {question}
                  <FaqArrow>⌃</FaqArrow>
                </FaqQuestion>

                <FaqAnswer>{answer}</FaqAnswer>
              </FaqItem>
            ))}
          </FaqList>
        </FaqWrapper>
      </Container>
    </ReviewsFaqSectionWrapper>
  )
}