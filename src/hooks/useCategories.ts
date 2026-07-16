import { useQuery } from '@tanstack/react-query'

import { $api } from '../api/api'

export const CATEGORIES_KEY = 'categories-key'

export type ApiCategory = {
  id: number
  name: string
  image: string
  slug: string
}

export const useCategories = () =>
  useQuery({
    queryKey: [CATEGORIES_KEY],
    queryFn: () => $api.get<ApiCategory[]>('/categories').then((resp) => resp.data),
  })