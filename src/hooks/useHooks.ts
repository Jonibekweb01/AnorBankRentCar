import { useQuery } from '@tanstack/react-query'
import { fetchProducts } from '../api/api'

export const PRODUCTS_KEY = 'products-key'

export const useProducts = () =>
  useQuery({
    queryKey: [PRODUCTS_KEY],
    queryFn: fetchProducts,
  })
