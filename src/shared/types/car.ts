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
