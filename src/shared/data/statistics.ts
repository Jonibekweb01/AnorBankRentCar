import type { StatisticItem } from '../types/statistic'
import Cal from '../../assets/images/stats-calendar-icon.svg'
import Mil from '../../assets/images/stats-mileage-icon.svg'
import Cus from '../../assets/images/stats-customers-icon.svg'
import Car7 from '../../assets/images/stats-car-icon.svg'

export const statistics: StatisticItem[] = [
  {
    id: 1,
    icon: Car7,
    value: '540+',
    label: 'Cars',
  },
  {
    id: 2,
    icon: Cus,
    value: '20k+',
    label: 'Customers',
  },
  {
    id: 3,
    icon: Cal,
    value: '25+',
    label: 'Years',
  },
  {
    id: 4,
    icon: Mil,
    value: '20m+',
    label: 'Miles',
  },
]