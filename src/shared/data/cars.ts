import type { Car } from '../types/car'
import CarsImg from '../../assets/images/car-grid-placeholder.png'
import TransmissionIcon from '../../assets/images/transmission-icon.svg'
import FuelIcon from '../../assets/images/fuel-icon.svg'
import SnowIcon from '../../assets/images/climate-icon.svg'

export const cars: Car[] = [
  {
    id: 1,
    name: 'Mercedes',
    category: 'Sedan',
    price: 25,
    image: CarsImg,
    transmission: 'Automat',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 2,
    name: 'Mercedes',
    category: 'Sport',
    price: 50,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 3,
    name: 'Mercedes',
    category: 'Sedan',
    price: 45,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 4,
    name: 'Porsche',
    category: 'SUV',
    price: 40,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 5,
    name: 'Toyota',
    category: 'Sedan',
    price: 35,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 6,
    name: 'Porsche',
    category: 'SUV',
    price: 50,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 7,
    name: 'Mercedes',
    category: 'Van',
    price: 50,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 8,
    name: 'Toyota',
    category: 'Sport',
    price: 60,
    image: CarsImg,
    transmission: 'Manual',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Manual',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
  {
    id: 9,
    name: 'Maybach',
    category: 'Sedan',
    price: 70,
    image: CarsImg,
    transmission: 'Automatic',
    fuel: 'PB 95',
    features: [
      {
        icon: TransmissionIcon,
        label: 'Automat',
      },
      {
        icon: FuelIcon,
        label: 'PB 95',
      },
      {
        icon: SnowIcon,
        label: 'Air Conditioner',
      },
    ],
  },
]
