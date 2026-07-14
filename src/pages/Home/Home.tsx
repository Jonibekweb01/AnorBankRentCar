import { statistics } from '../../shared/data/statistics'

import {
  AboutSection,
  CallToActionSection,
  FeaturesSection,
  HeroSection,
  MobileAppSection,
  StatisticsSection,
  VehiclesSection,
} from './sections'

export const Home = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <VehiclesSection />
      <StatisticsSection
        title="Facts in numbers"
        description="Amet cras hac orci lacus. Faucibus ipsum arcu lectus nibh sapien bibendum ullamcorper in. Diam tincidunt tincidunt erat at semper fermentum"
        statistics={statistics}
      />
      <MobileAppSection />
      <CallToActionSection />
    </main>
  )
}
