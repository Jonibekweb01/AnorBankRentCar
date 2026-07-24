export interface CarFeature {
  icon: string
  label: string
}

export interface Car {
  id: number
  name: string
  category: string
  price: number
  image: string
  transmission: string
  fuel: string
  features: CarFeature[]
}

export interface CarCard {
  id: number
  title: string
  slug: string
  price: number
  description: string
  category: {
    id: number
    name: string
    slug: string
    image: string
    creationAt: string
    updatedAt: string
  }
  images: string[]
  creationAt: string
  updatedAt: string
}
