import styled from 'styled-components'
import { Link, NavLink } from 'react-router'

export const HeaderWrapper = styled.header`
  width: 100%;
`

export const HeaderInner = styled.div`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  column-gap: 40px;
  min-height: 104px;
`

export const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`

export const HeaderLogo = styled(Link)`
  display: inline-flex;
  align-items: center;
  text-decoration: none;
`

export const HeaderLogoImage = styled.img`
  display: block;
  width: 180px;
  height: 48px;
  object-fit: contain;
`

export const HeaderCenter = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const HeaderNavList = styled.ul`
  display: flex;
  align-items: center;
  gap: 48px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const HeaderNavItem = styled.li`
  display: flex;
  align-items: center;
`

export const HeaderNavLink = styled(NavLink)`
  position: relative;
  display: inline-flex;
  align-items: center;
  padding: 12px 0;
  color: #111111;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.2;
  text-decoration: none;
  transition:
    color 180ms ease,
    font-weight 180ms ease;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 4px;
    left: 0;
    height: 2px;
    background-color: #b40046;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 180ms ease;
  }

  &:hover {
    color: #b40046;
  }

  &[aria-current='page'] {
    color: #111111;
    font-weight: 700;
  }

  &[aria-current='page']::after {
    transform: scaleX(1);
  }
`

export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 14px;
`

export const HeaderContactIcon = styled.img`
  display: block;
  width: 44px;
  height: 44px;
  flex-shrink: 0;
`

export const HeaderContact = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3px;
`

export const HeaderContactLabel = styled.span`
  color: #111111;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.2;
`

export const HeaderContactPhone = styled.a`
  color: #111111;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.2;
  text-decoration: none;
  white-space: nowrap;
  transition: color 180ms ease;

  &:hover {
    color: #b40046;
  }

  &:focus-visible {
    outline: 2px solid #b40046;
    outline-offset: 4px;
    border-radius: 2px;
  }
`

export const HeaderMenuButton = styled.button`
  display: none;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  padding: 0;
  color: #111111;
  background: transparent;
  border: 0;
  cursor: pointer;

  @media (max-width: 992px) {
    display: inline-flex;
  }
`

export const HeaderDesktopContent = styled.div`
  display: contents;

  @media (max-width: 992px) {
    display: none;
  }
`

export const HeaderResponsiveInner = styled(HeaderInner)`
  @media (max-width: 1200px) {
    column-gap: 24px;
  }

  @media (max-width: 992px) {
    min-height: 80px;
    grid-template-columns: 1fr auto;
  }
`

export const HeaderResponsiveNavList = styled(HeaderNavList)`
  @media (max-width: 1200px) {
    gap: 28px;
  }
`
