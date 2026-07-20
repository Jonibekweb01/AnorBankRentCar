import axios from 'axios'

export interface CategoryItem {
  name: string
  slug: string
}

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 15000,
})

export const fetchCategories = async (): Promise<CategoryItem[]> => {
  const { data } = await api.get<CategoryItem[]>('/categories')
  return data
}
// https://api.escuelajs.co/api/v1/products
export const fetchProducts = async () => {
  const { data } = await api.get('/products')
  return data
}
