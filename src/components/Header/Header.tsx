import { Container } from '@mantine/core'

import Logo from '../../assets/images/logo.svg'
import Call from '../../assets/images/call-icon.svg'

import {
  HeaderCenter,
  HeaderContact,
  HeaderContactIcon,
  HeaderContactLabel,
  HeaderContactPhone,
  HeaderDesktopContent,
  HeaderLeft,
  HeaderLogo,
  HeaderLogoImage,
  HeaderNavItem,
  HeaderNavLink,
  HeaderResponsiveInner,
  HeaderResponsiveNavList,
  HeaderRight,
  HeaderWrapper,
} from './Header.styles'

const navigationItems = [
  {
    label: 'Home',
    path: '/',
    end: true,
  },
  {
    label: 'Vehicles',
    path: '/vehicles',
  },
  {
    label: 'Details',
    path: '/details',
  },
  {
    label: 'About Us',
    path: '/about',
  },
  {
    label: 'Contact Us',
    path: '/contact',
  },
]

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderResponsiveInner>
          <HeaderLeft>
            <HeaderLogo to="/" aria-label="Car Rental home">
              <HeaderLogoImage
                src={Logo}
                alt="Car Rental"
                width={180}
                height={48}
              />
            </HeaderLogo>
          </HeaderLeft>

          <HeaderDesktopContent>
            <HeaderCenter aria-label="Main navigation">
              <HeaderResponsiveNavList>
                {navigationItems.map(({ label, path, end }) => (
                  <HeaderNavItem key={path}>
                    <HeaderNavLink to={path} end={end}>
                      {label}
                    </HeaderNavLink>
                  </HeaderNavItem>
                ))}
              </HeaderResponsiveNavList>
            </HeaderCenter>

            <HeaderRight>
              <HeaderContactIcon
                src={Call}
                alt=""
                width={44}
                height={44}
                aria-hidden="true"
              />

              <HeaderContact>
                <HeaderContactLabel>Need help?</HeaderContactLabel>

                <HeaderContactPhone href="tel:+9962471680">
                  +996 247-1680
                </HeaderContactPhone>
              </HeaderContact>
            </HeaderRight>
          </HeaderDesktopContent>
        </HeaderResponsiveInner>
      </Container>
    </HeaderWrapper>
  )
}
