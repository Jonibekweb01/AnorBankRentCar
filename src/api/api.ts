import axios from 'axios'

export interface CategoryItem {
  name: string
  slug: string
}

export interface ProductCategory {
  name?: string
  slug?: string
}

export interface ProductItem {
  id: number
  title: string
  price: number
  images?: string[]
  category?: ProductCategory
}

const api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1',
  timeout: 15000,
})

export const fetchCategories = async (): Promise<CategoryItem[]> => {
  const { data } = await api.get<CategoryItem[]>('/categories')
  return data
}

export const fetchProducts = async (): Promise<ProductItem[]> => {
  const { data } = await api.get<ProductItem[]>('/products')
  return data
}
