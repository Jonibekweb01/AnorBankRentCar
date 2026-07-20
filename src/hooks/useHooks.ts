import { useQuery } from '@tanstack/react-query'

import { fetchProducts, type ProductItem } from '../api/api'

export const PRODUCTS_KEY = 'products-key'

export const useProducts = () =>
  useQuery<ProductItem[]>({
    queryKey: [PRODUCTS_KEY],
    queryFn: fetchProducts,
  })
