import { Container } from '@mantine/core'

import type { StatisticItem } from '../../../../shared/types/statistic'
import { StatisticCard } from '../../../../components/StatisticCard/StatisticCard'

import {
  StatisticsDescription,
  StatisticsGrid,
  StatisticsInner,
  StatisticsSectionWrapper,
  StatisticsTitle,
} from './StatisticsSection.styles'

interface StatisticsSectionProps {
  title: string
  description?: string
  statistics: StatisticItem[]
  backgroundImage?: string
}

export const StatisticsSection = ({
  title,
  description,
  statistics,
  backgroundImage,
}: StatisticsSectionProps) => {
  return (
    <StatisticsSectionWrapper>
      <Container>
        <StatisticsInner $backgroundImage={backgroundImage}>
          <StatisticsTitle>{title}</StatisticsTitle>

          {description && (
            <StatisticsDescription>{description}</StatisticsDescription>
          )}

          <StatisticsGrid>
            {statistics.map((statistic) => (
              <StatisticCard key={statistic.id} statistic={statistic} />
            ))}
          </StatisticsGrid>
        </StatisticsInner>
      </Container>
    </StatisticsSectionWrapper>
  )
}
