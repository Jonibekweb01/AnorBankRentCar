import { Container } from '@mantine/core'

import MemoriesImage from '../../../../assets/images/about-memories-image.png'

import {
  MemoriesSectionWrapper,
  MemoriesGrid,
  MemoriesContent,
  MemoriesTitle,
  MemoriesDescription,
  MemoriesList,
  MemoriesItem,
  MemoriesCheck,
  MemoriesItemText,
  MemoriesImageWrapper,
  MemoriesImageElement,
} from './AboutMemoriesSection.styles'

const memoriesItems = [
  'Velit semper morbi. Purus non eu cursus porttitor tristique et gravida.',
  'Purus non eu cursus porttitor tristique et gravida. Quis nunc interdum.',
  'Aliquam adipiscing velit semper morbi. Purus non eu cursus porttitor.',
  'Quis nunc interdum gravida ullamcorper.',
]

export const AboutMemoriesSection = () => {
  return (
    <MemoriesSectionWrapper>
      <Container>
        <MemoriesGrid>
          <MemoriesContent>
            <MemoriesTitle>
              Unlock unforgettable
              <br />
              memories on the road
            </MemoriesTitle>

            <MemoriesDescription>
              Aliquam adipiscing velit semper morbi. Purus non eu cursus
              porttitor tristique et gravida. Quis nunc interdum gravida
              ullamcorper.
            </MemoriesDescription>

            <MemoriesList>
              {memoriesItems.map((item) => (
                <MemoriesItem key={item}>
                  <MemoriesCheck>✓</MemoriesCheck>

                  <MemoriesItemText>{item}</MemoriesItemText>
                </MemoriesItem>
              ))}
            </MemoriesList>
          </MemoriesContent>

          <MemoriesImageWrapper>
            <MemoriesImageElement
              src={MemoriesImage}
              alt="Car driving on the road"
            />
          </MemoriesImageWrapper>
        </MemoriesGrid>
      </Container>
    </MemoriesSectionWrapper>
  )
}
