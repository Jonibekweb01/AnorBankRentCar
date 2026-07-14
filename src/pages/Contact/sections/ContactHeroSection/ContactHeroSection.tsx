import { Container } from '@mantine/core'

import ContactImg from '../../../../assets/images/contact-hero-image.jpg'
import { HeroForm } from '../../../../components/HeroForm/HeroForm'

import {
  ContactSectionWrapper,
  ContactHeading,
  ContactTitle,
  ContactBreadcrumbs,
  ContactBreadcrumbLink,
  ContactBreadcrumbCurrent,
  ContactContent,
  ContactFormWrapper,
  ContactImageWrapper,
  ContactImage,
} from './ContactHeroSection.styles'

export const ContactHeroSection = () => {
  return (
    <ContactSectionWrapper>
      <Container>
        <ContactHeading>
          <ContactTitle>Contact Us</ContactTitle>

          <ContactBreadcrumbs>
            <ContactBreadcrumbLink to="/">Home</ContactBreadcrumbLink>

            <span>/</span>

            <ContactBreadcrumbCurrent>Contact Us</ContactBreadcrumbCurrent>
          </ContactBreadcrumbs>
        </ContactHeading>

        <ContactContent>
          <ContactFormWrapper>
            <HeroForm backgroundColor="#A30041" />
          </ContactFormWrapper>

          <ContactImageWrapper>
            <ContactImage
              src={ContactImg}
              alt="Car rental contact"
              width={856}
              height={503}
            />
          </ContactImageWrapper>
        </ContactContent>
      </Container>
    </ContactSectionWrapper>
  )
}
