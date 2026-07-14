import type { StatisticItem } from '../../shared/types/statistic'

import {
  StatisticCardContent,
  StatisticCardIcon,
  StatisticCardLabel,
  StatisticCardValue,
  StatisticCardWrapper,
} from './Statistic.styles'

interface StatisticCardProps {
  statistic: StatisticItem
}

export const StatisticCard = ({ statistic }: StatisticCardProps) => {
  return (
    <StatisticCardWrapper>
      <StatisticCardIcon>
        <img src={statistic.icon} alt="" aria-hidden="true" />
      </StatisticCardIcon>

      <StatisticCardContent>
        <StatisticCardValue>{statistic.value}</StatisticCardValue>
        <StatisticCardLabel>{statistic.label}</StatisticCardLabel>
      </StatisticCardContent>
    </StatisticCardWrapper>
  )
}
