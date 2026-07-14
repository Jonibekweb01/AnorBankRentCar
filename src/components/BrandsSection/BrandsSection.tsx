import { Container } from '@mantine/core'

import { brands } from '../../shared/data/brands'

import {
  BrandSectionWrapper,
  BrandList,
  BrandItem,
  BrandImage,
} from './BrandsSection.styles'

export const BrandsSection = () => {
  return (
    <BrandSectionWrapper>
      <Container>
        <BrandList>
          {brands.map((brand) => (
            <BrandItem key={brand.alt}>
              <BrandImage src={brand.src} alt={brand.alt} />
            </BrandItem>
          ))}
        </BrandList>
      </Container>
    </BrandSectionWrapper>
  )
}
