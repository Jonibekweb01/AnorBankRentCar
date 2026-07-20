import { useQuery } from '@tanstack/react-query'

import { fetchCategories, type CategoryItem } from '../api/api'

export const CATEGORIES_KEY = 'categories-key'

export const useCategories = () =>
  useQuery<CategoryItem[]>({
    queryKey: [CATEGORIES_KEY],
    queryFn: fetchCategories,
    select: (categories) => categories.slice(0, 5),
  })
