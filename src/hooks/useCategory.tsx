import { useQuery } from '@tanstack/react-query'
import { categoryApi } from '../api/category'

export const useCategory = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: async () => {
      const { data } = await categoryApi.get()
      return data
    },
  })
}
