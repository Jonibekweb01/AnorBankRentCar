import axios from 'axios'
import { useAuthStore } from '../store/authStore'
export const $api = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1/',
})

$api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }
  return config
})

$api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true
      const refreshToken = useAuthStore.getState().refreshToken

      if (refreshToken) {
        try {
          const response = await $api.post('/auth/refresh-token', {
            refreshToken,
          })
          const { access_token, refresh_token } = response.data
          useAuthStore.getState().setTokens(access_token, refresh_token)
          originalRequest.headers.Authorization = `Bearer ${access_token}`
          return $api(originalRequest)
        } catch {
          useAuthStore.getState().logOut()
        }
      }
    }

    return Promise.reject(error)
  }
)
