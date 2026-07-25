import { Outlet, useNavigate, useLocation } from 'react-router-dom'
import { Badge, Box, Button, Group, Text, ThemeIcon } from '@mantine/core'
import { useProfile } from '../../hooks/useApi'
import { useAuthStore } from '../../store/authStore'
import { useQueryClient } from '@tanstack/react-query'
import {
  DashboardWrapper,
  Sidebar,
  SidebarTitle,
  SidebarSubtitle,
  SidebarNav,
  SidebarLink,
  MainContent,
  Header,
  HeaderUser,
  UserAvatar,
  Content,
} from './Dashboard.styles'
import {
  IconHome,
  IconPackage,
  IconTags,
  IconShieldCheck,
  IconLogout,
} from '@tabler/icons-react'
import logo from '../../assets/logo/images.png'

export const DashboardLayout = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const logout = useAuthStore((state) => state.logOut)
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
        <Box style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <img
            src={logo}
            alt="AnorBank logo"
            style={{ width: 44, height: 44, objectFit: 'contain' }}
          />
          <Box>
            <SidebarTitle>Anor Admin</SidebarTitle>
            <SidebarSubtitle>Control panel</SidebarSubtitle>
          </Box>
        </Box>

        <SidebarNav>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard')}
            onClick={() => navigate('/dashboard')}
            aria-label="Go to dashboard home"
            style={{ border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            <IconHome size={18} />
            Dashboard
          </SidebarLink>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard/products')}
            onClick={() => navigate('/dashboard/products')}
            aria-label="Go to products page"
            style={{ border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            <IconPackage size={18} />
            Products
          </SidebarLink>
          <SidebarLink
            as="button"
            $active={isActive('/dashboard/categories')}
            onClick={() => navigate('/dashboard/categories')}
            aria-label="Go to categories page"
            style={{ border: 'none', textAlign: 'left', cursor: 'pointer' }}
          >
            <IconTags size={18} />
            Categories
          </SidebarLink>
        </SidebarNav>

        <Box
          mt="xl"
          p="md"
          style={{
            background: 'rgba(255,255,255,0.12)',
            borderRadius: 16,
            border: '1px solid rgba(255,255,255,0.16)',
          }}
        >
          <Group gap={8} align="center">
            <ThemeIcon size={32} radius="xl" color="orange.4" variant="light">
              <IconShieldCheck size={18} color="#b10045" />
            </ThemeIcon>
            <Text size="sm" fw={600}>
              Secure access
            </Text>
          </Group>
          <Text size="xs" mt={6} style={{ color: 'rgba(255,255,255,0.78)' }}>
            Only authorized admins can manage the catalog.
          </Text>
        </Box>
      </Sidebar>

      <MainContent>
        <Header>
          <Box>
            <Text size="xs" tt="uppercase" c="dimmed" fw={700}>
              Admin dashboard
            </Text>
            <Text size="xl" fw={700} style={{ color: '#111111' }}>
              Welcome back
            </Text>
          </Box>

          <HeaderUser>
            {profile && (
              <Group gap="sm">
                <UserAvatar src={profile.avatar} alt={profile.name} />
                <Box>
                  <Text size="sm" fw={600}>
                    {profile.name}
                  </Text>
                  <Badge color="orange" variant="light" size="sm">
                    Active
                  </Badge>
                </Box>
              </Group>
            )}
            <Button
              variant="light"
              color="red"
              onClick={handleLogout}
              size="sm"
              leftSection={<IconLogout size={16} />}
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
