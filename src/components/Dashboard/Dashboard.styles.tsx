import styled from 'styled-components'

export const DashboardWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  background: linear-gradient(135deg, #fffafc 0%, #fff5e8 100%);
`

export const Sidebar = styled.div`
  width: 280px;
  background: linear-gradient(160deg, #b10045 0%, #8b0034 100%);
  color: white;
  padding: 24px 20px;
  overflow-y: auto;
  box-shadow: 12px 0 40px rgba(177, 0, 69, 0.14);

  @media (max-width: 768px) {
    width: 240px;
  }
`

export const SidebarTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  font-weight: 700;
  letter-spacing: -0.02em;
`

export const SidebarSubtitle = styled.p`
  margin: 4px 0 0;
  color: rgba(255, 255, 255, 0.72);
  font-size: 12px;
`

export const SidebarNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 24px;
`

export const SidebarLink = styled.a<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 14px;
  color: ${(props) => (props.$active ? '#fff' : 'rgba(255,255,255,0.78)')};
  text-decoration: none;
  border-radius: 12px;
  cursor: pointer;
  background-color: ${(props) => (props.$active ? 'rgba(255,255,255,0.16)' : 'transparent')};
  box-shadow: ${(props) => (props.$active ? 'inset 0 0 0 1px rgba(255,255,255,0.12)' : 'none')};
  transition: all 0.25s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.16);
    color: #fff;
    transform: translateX(2px);
  }
`

export const MainContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.82);
`

export const Header = styled.div`
  background: rgba(255, 255, 255, 0.9);
  padding: 22px 28px;
  border-bottom: 1px solid rgba(177, 0, 69, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(12px);
`

export const HeaderUser = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const UserAvatar = styled.img`
  width: 42px;
  height: 42px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid #ff9d0a;
`

export const Content = styled.div`
  flex: 1;
  padding: 28px;
  overflow-y: auto;
`
