import { BrandsSection } from '../../components/BrandsSection/BrandsSection'
import { ContactHeroSection } from './sections/ContactHeroSection/ContactHeroSection'
import { ContactInfoSection } from './sections/ContactInfoSection/ContactInfoSection'

export const Contact = () => {
  return (
    <main>
      <ContactHeroSection />
      <ContactInfoSection />
      <BrandsSection />
    </main>
  )
}
