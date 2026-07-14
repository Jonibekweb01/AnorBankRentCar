import { AboutHeroSection } from './sections/AboutHeroSection/AboutHeroSection'
import { AboutMemoriesSection } from './sections/AboutMemoriesSection/AboutMemoriesSection'
import { BookNowSection } from './sections/BookNowSection/BookNowSection/BookNowSection'
import { DownloadAppSection } from './sections/DownloadAppSection/DownloadAppSection'
import { ReviewsFaqSection } from './sections/ReviewsFaqSection/ReviewsFaqSection'

export const About = () => {
  return (
    <main>
      <AboutHeroSection />
      <AboutMemoriesSection />
      <DownloadAppSection />
      <ReviewsFaqSection />
      <BookNowSection />
    </main>
  )
}
