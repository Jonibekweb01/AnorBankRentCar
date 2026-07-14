import '@mantine/core/styles.css'
import '@mantine/dates/styles.css'
import '@mantine/notifications/styles.css'

import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { Home } from './pages/Home/Home'
import { NotFound } from './pages/NotFound/NotFound'
import { Layout } from './pages/Layout/Layout'
import { Vehicles } from './pages/Vehicles/Vehicles'
import { CarDetails } from './pages/CarDetails/CarDetails'
import { About } from './pages/About/About'
import { Contact } from './pages/Contact/Contact'
import { theme } from './shared/config/theme'

const client = new QueryClient()

const router = createBrowserRouter([
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

function App() {
  return (
    <QueryClientProvider client={client}>
      <MantineProvider theme={theme}>
        <RouterProvider router={router} />
      </MantineProvider>
    </QueryClientProvider>
  )
}

export default App
