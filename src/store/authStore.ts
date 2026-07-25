import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export interface AuthState {
  accessToken: string | null
  refreshToken: string | null
  setTokens: (accessToken: string, refreshToken: string) => void
  logOut: () => void
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      accessToken: null,
      refreshToken: null,
      setTokens: (accessToken, refreshToken) =>
        set({ accessToken, refreshToken }),
      logOut: () => set({ accessToken: null, refreshToken: null }),
    }),
    { name: 'auth-store' }
  )
)
