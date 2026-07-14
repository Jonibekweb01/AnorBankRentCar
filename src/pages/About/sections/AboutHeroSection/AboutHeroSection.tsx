import { Container } from '@mantine/core'

import AboutImage from '../../../../assets/images/about-hero-button-image.png'

import {
  AboutSectionWrapper,
  AboutHeading,
  AboutBreadcrumbs,
  AboutBreadcrumbLink,
  AboutBreadcrumbCurrent,
  AboutContentGrid,
  AboutMainTitle,
  AboutFeatures,
  AboutFeature,
  AboutFeatureTitle,
  AboutFeatureText,
  AboutVideo,
  AboutVideoImage,
  AboutPlayButton,
  AboutStats,
  AboutStat,
  AboutStatValue,
  AboutStatLabel,
} from './AboutHeroSection.styles'

const features = [
  {
    title: 'Variety Brands',
    text: 'Platea non auctor fermentum sollicitudin. Eget adipiscing augue sit quam natoque ornare cursus viverra odio.',
  },
  {
    title: 'Awesome Support',
    text: 'Eget adipiscing augue sit quam natoque ornare cursus viverra odio. Diam quam gravida ultricies velit.',
  },
  {
    title: 'Maximum Freedom',
    text: 'Diam quam gravida ultricies velit duis consequat integer. Est aliquam posuere vel rhoncus massa volutpat in.',
  },
  {
    title: 'Flexibility On The Go',
    text: 'Vitae pretium nulla sed quam id nisi semper. Vel non in proin egestas dis, faucibus rhoncus.',
  },
]

const stats = [
  {
    value: '20k+',
    label: 'Happy customers',
  },
  {
    value: '540+',
    label: 'Count of cars',
  },
  {
    value: '25+',
    label: 'Years of experience',
  },
]

export const AboutHeroSection = () => {
  return (
    <AboutSectionWrapper>
      <Container>
        <AboutHeading>
          <h1>About Us</h1>

          <AboutBreadcrumbs>
            <AboutBreadcrumbLink to="/">Home</AboutBreadcrumbLink>

            <span>/</span>

            <AboutBreadcrumbCurrent>About Us</AboutBreadcrumbCurrent>
          </AboutBreadcrumbs>
        </AboutHeading>

        <AboutContentGrid>
          <AboutMainTitle>
            Where every
            <br />
            drive feels
            <br />
            extraordinary
          </AboutMainTitle>

          <AboutFeatures>
            {features.map(({ title, text }) => (
              <AboutFeature key={title}>
                <AboutFeatureTitle>{title}</AboutFeatureTitle>
                <AboutFeatureText>{text}</AboutFeatureText>
              </AboutFeature>
            ))}
          </AboutFeatures>
        </AboutContentGrid>

        <AboutVideo>
          <AboutVideoImage src={AboutImage} alt="Car rental presentation" />

          <AboutPlayButton type="button" aria-label="Play video">
            ▶
          </AboutPlayButton>
        </AboutVideo>

        <AboutStats>
          {stats.map(({ value, label }) => (
            <AboutStat key={label}>
              <AboutStatValue>{value}</AboutStatValue>
              <AboutStatLabel>{label}</AboutStatLabel>
            </AboutStat>
          ))}
        </AboutStats>
      </Container>
    </AboutSectionWrapper>
  )
}
