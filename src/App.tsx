import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Layout } from './pages/Layout/Layout'
import { Vehicles } from './pages/Vehicles/Vehicles'
import { CarDetails } from './pages/CarDetails/CarDetails'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { theme } from './config/theme'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Login } from './pages/AdminLogin/AdminLogin'
import { DashboardLayout } from './components/Dashboard/DashboardLayout'
import { DashboardHome } from './pages/Dashboard/DashboardHome'
import { Products } from './pages/Dashboard/Products'
import { Categories } from './pages/Dashboard/Categories'
import { AdminProtectedRoute } from './components/auth/AdminProtectedRoute'

const router = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/dashboard',
    element: (
      <AdminProtectedRoute>
        <DashboardLayout />
      </AdminProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <DashboardHome />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'categories',
        element: <Categories />,
      },
    ],
  },
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'details',
        element: <CarDetails />,
      },
      {
        path: 'vehicles',
        element: <Vehicles />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
])
const client = new QueryClient()
function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <ModalsProvider>
          <RouterProvider router={router} />
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
