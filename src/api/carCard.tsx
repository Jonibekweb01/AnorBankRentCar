import type { CarCard } from '../types/car'
import { $api } from './api'

export const carCardapi = {
  get: () => $api.get<CarCard[]>('/products'),
}
