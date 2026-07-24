import styled from 'styled-components'

export const DashboardWrapper = styled.div`
  display: flex;
  height: 100vh;
  background-color: #f8f9fa;
`

export const Sidebar = styled.div`
  width: 250px;
  background-color: #2c3e50;
  color: white;
  padding: 20px;
  overflow-y: auto;

  @media (max-width: 768px) {
    width: 200px;
  }
`

export const SidebarTitle = styled.h2`
  margin: 0 0 30px 0;
  font-size: 20px;
  font-weight: 600;
`

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const SidebarLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 15px;
  color: ${(props) => (props.$active ? '#fff' : '#b8bec5')};
  text-decoration: none;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? '#1a252f' : 'transparent')};
  transition: all 0.3s ease;

  &:hover {
    background-color: #1a252f;
    color: #fff;
  }
`

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const Header = styled.div`
  background-color: white;
  padding: 20px 30px;
  border-bottom: 1px solid #e9ecef;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`

export const UserAvatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`

export const Content = styled.div`
  flex: 1;
  padding: 30px;
  overflow-y: auto;
`
