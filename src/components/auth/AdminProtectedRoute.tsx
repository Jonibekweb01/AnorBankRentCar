import { Navigate } from 'react-router-dom'
import { useAuthStore } from '../../store/authStore'
import type { AuthState } from '../../store/authStore'

interface AdminProtectedRouteProps {
  children: React.ReactNode
}

export const AdminProtectedRoute = ({ children }: AdminProtectedRouteProps) => {
  const accessToken = useAuthStore((state: AuthState) => state.accessToken)

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return <>{children}</>
}
