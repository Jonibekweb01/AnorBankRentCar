import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useAuthStore } from '../store/authStore'
import { $api } from '../api/api'

interface LoginResponse {
  access_token: string
  refresh_token: string
}

interface UserProfile {
  id: number
  email: string
  name: string
  avatar: string
  role: string
}

export interface Product {
  id: number
  title: string
  price: number
  description: string
  images: string[]
  category: Category
}

export interface Category {
  id: number
  name: string
  image: string
}

interface ProductFilters {
  offset: number
  limit: number
  categoryId?: number
  title?: string
}

export const useLogin = () => {
  const setTokens = useAuthStore((state) => state.setTokens)

  return useMutation({
    mutationFn: async (credentials: { email: string; password: string }) => {
      const response = await $api.post<LoginResponse>(
        '/auth/login',
        credentials
      )
      return response.data
    },
    onSuccess: (data) => {
      setTokens(data.access_token, data.refresh_token)
    },
  })
}

export const useProfile = () => {
  const accessToken = useAuthStore((state) => state.accessToken)

  return useQuery({
    queryKey: ['profile'],
    queryFn: async () => {
      const response = await $api.get<UserProfile>('/auth/profile')
      return response.data
    },
    enabled: !!accessToken,
  })
}

export const useProducts = (filters: ProductFilters) => {
  return useQuery({
    queryKey: ['products', filters],
    queryFn: async () => {
      const params = new URLSearchParams()
      params.append('offset', filters.offset.toString())
      params.append('limit', filters.limit.toString())
      if (filters.categoryId) {
        params.append('categoryId', filters.categoryId.toString())
      }
      if (filters.title) {
        params.append('title', filters.title)
      }

      const response = await $api.get<Product[]>(
        `/products?${params.toString()}`
      )
      return response.data
    },
  })
}

export const useProductsCount = () => {
  return useQuery({
    queryKey: ['products-count'],
    queryFn: async () => {
      const response = await $api.get<Product[]>('/products', {
        params: {
          offset: 0,
          limit: 500,
        },
      })
      return response.data.length
    },
    staleTime: 1000 * 60 * 5,
  })
}

export const useCategories = () => {
  return useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const response = await $api.get<Category[]>('/categories')
      return response.data
    },
  })
}

export const useCategoriesCount = () => {
  return useQuery({
    queryKey: ['categories-count'],
    queryFn: async () => {
      const response = await $api.get<Category[]>('/categories')
      return response.data.length
    },
  })
}

export const useAveragePrice = () => {
  return useQuery({
    queryKey: ['average-price'],
    queryFn: async () => {
      const response = await $api.get<Product[]>('/products', {
        params: {
          offset: 0,
          limit: 500,
        },
      })
      const products = response.data
      if (products.length === 0) return 0
      const total = products.reduce(
        (sum: number, p: Product) => sum + p.price,
        0
      )
      return Math.round(total / products.length)
    },
    staleTime: 1000 * 60 * 5,
  })
}

export const useCreateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (
      product:
        | Omit<Product, 'id'>
        | {
            title: string
            price: number
            description: string
            categoryId: number
            images: string[]
          }
    ) => {
      const response = await $api.post<Product>('/products', product)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['products-count'] })
      queryClient.invalidateQueries({ queryKey: ['average-price'] })
    },
  })
}

export const useUpdateProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      product,
    }: {
      id: number
      product:
        | Partial<Product>
        | {
            title?: string
            price?: number
            description?: string
            categoryId?: number
            images?: string[]
          }
    }) => {
      const response = await $api.put<Product>(`/products/${id}`, product)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['average-price'] })
    },
  })
}

export const useDeleteProduct = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await $api.delete(`/products/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] })
      queryClient.invalidateQueries({ queryKey: ['products-count'] })
      queryClient.invalidateQueries({ queryKey: ['average-price'] })
    },
  })
}

export const useCreateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (category: Omit<Category, 'id'>) => {
      const response = await $api.post<Category>('/categories', category)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      queryClient.invalidateQueries({ queryKey: ['categories-count'] })
    },
  })
}

export const useUpdateCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({
      id,
      category,
    }: {
      id: number
      category: Partial<Category>
    }) => {
      const response = await $api.put<Category>(`/categories/${id}`, category)
      return response.data
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
    },
  })
}

export const useDeleteCategory = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (id: number) => {
      await $api.delete(`/categories/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['categories'] })
      queryClient.invalidateQueries({ queryKey: ['categories-count'] })
    },
  })
}
