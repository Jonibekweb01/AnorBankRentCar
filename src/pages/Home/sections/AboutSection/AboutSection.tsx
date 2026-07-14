import { Container } from '@mantine/core'
import AboutImageSource from '../../../../assets/images/about-car.jpg'
import {
  AboutContent,
  AboutImage,
  AboutImageWrapper,
  AboutItem,
  AboutItemContent,
  AboutItemDescription,
  AboutItemNumber,
  AboutItemTitle,
  AboutList,
  AboutSectionInner,
  AboutSectionWrapper,
} from './AboutSection.styles'

const aboutItems = [
  {
    id: 1,
    title: 'Erat at semper',
    description:
      'Non amet fermentum est in enim at sit ullamcorper. Sit elementum rhoncus nullam feugiat. Risus sem fermentum...',
  },
  {
    id: 2,
    title: 'Urna nec vivamus risus duis arcu',
    description:
      'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper',
  },
  {
    id: 3,
    title: 'Lobortis euismod imperdiet tempus',
    description:
      'Viverra scelerisque mauris et nullam molestie et. Augue adipiscing praesent nisl cras nunc luctus viverra nisi',
  },
  {
    id: 4,
    title: 'Cras nulla aliquet nam eleifend amet et',
    description:
      'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum gravida ullamcorper sed integer. Quisque eleifend tincidunt vulputate libero',
  },
]

export const AboutSection = () => {
  return (
    <AboutSectionWrapper>
      <Container>
        <AboutSectionInner>
          <AboutImageWrapper>
            <AboutImage
              src={AboutImageSource}
              width={550}
              height={550}
              alt="About car rental service"
            />
          </AboutImageWrapper>

          <AboutContent>
            <AboutList>
              {aboutItems.map(({ id, title, description }) => (
                <AboutItem key={id}>
                  <AboutItemNumber>{id}</AboutItemNumber>

                  <AboutItemContent>
                    <AboutItemTitle>{title}</AboutItemTitle>

                    <AboutItemDescription>{description}</AboutItemDescription>
                  </AboutItemContent>
                </AboutItem>
              ))}
            </AboutList>
          </AboutContent>
        </AboutSectionInner>
      </Container>
    </AboutSectionWrapper>
  )
}
