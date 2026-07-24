import { useQuery } from '@tanstack/react-query'
import { carCardapi } from '../api/carCard'
import type { CarCard } from '../types/car'

export const useCarCard = () => {
  return useQuery<CarCard[]>({
    queryKey: ['carCard'],
    queryFn: async () => {
      const { data } = await carCardapi.get()
      return data
    },
  })
}
