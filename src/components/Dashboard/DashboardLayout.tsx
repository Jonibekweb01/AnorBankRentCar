import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Button } from '@mantine/core'
import { useProfile } from '../../hooks/useApi'
import { useAuthStore } from '../../store/authStore'
import { useQueryClient } from '@tanstack/react-query'
import {
  DashboardWrapper,
  Sidebar,
  SidebarTitle,
  SidebarNav,
  SidebarLink,
  MainContent,
  Header,
  HeaderUser,
  UserAvatar,
  Content,
} from './Dashboard.styles'
import { IconHome, IconPackage, IconTags } from '@tabler/icons-react'

export const DashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const logout = useAuthStore((state) => state.logout)
  const queryClient = useQueryClient()
  const { data: profile } = useProfile()

  const handleLogout = () => {
    logout()
    queryClient.clear()
    navigate('/login')
  }

  const isActive = (path: string) => location.pathname === path

  return (
    <DashboardWrapper>
      <Sidebar>
        <SidebarTitle>Admin</SidebarTitle>
        <SidebarNav>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard')}
            onClick={() => navigate('/dashboard')}
            style={{
              background: isActive('/dashboard') ? '#1a252f' : 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <IconHome size={20} />
            Dashboard
          </SidebarLink>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard/products')}
            onClick={() => navigate('/dashboard/products')}
            style={{
              background: isActive('/dashboard/products')
                ? '#1a252f'
                : 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <IconPackage size={20} />
            Products
          </SidebarLink>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard/categories')}
            onClick={() => navigate('/dashboard/categories')}
            style={{
              background: isActive('/dashboard/categories')
                ? '#1a252f'
                : 'transparent',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
            }}
          >
            <IconTags size={20} />
            Categories
          </SidebarLink>
        </SidebarNav>
      </Sidebar>

      <MainContent>
        <Header>
          <h1>Dashboard</h1>
          <HeaderUser>
            {profile && (
              <>
                <UserAvatar src={profile.avatar} alt={profile.name} />
                <span>{profile.name}</span>
              </>
            )}
            <Button
              variant="light"
              color="red"
              onClick={handleLogout}
              size="sm"
            >
              Logout
            </Button>
          </HeaderUser>
        </Header>

        <Content>
          <Outlet />
        </Content>
      </MainContent>
    </DashboardWrapper>
  )
}
