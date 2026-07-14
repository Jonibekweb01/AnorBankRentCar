import { Container } from '@mantine/core'

import Logo from '../../assets/images/logo.svg'
import Location from '../../assets/images/footer-location-icon.svg'
import Mail from '../../assets/images/footer-mail-icon.svg'
import Phone from '../../assets/images/footer-phone-icon.svg'
import AppleStore from '../../assets/images/app-store.svg'
import PlayMarket from '../../assets/images/google-play.svg'
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa'
import { RiTwitterXFill } from 'react-icons/ri'

import {
  FooterWrapper,
  FooterTop,
  FooterInfoItem,
  FooterInfoIcon,
  FooterInfoContent,
  FooterInfoLabel,
  FooterInfoText,
  FooterGrid,
  FooterBrand,
  FooterLogo,
  FooterDescription,
  FooterSocials,
  FooterSocialLink,
  FooterColumn,
  FooterTitle,
  FooterList,
  FooterListItem,
  FooterLink,
  FooterStoreImage,
  FooterBottom,
} from './Footer.styles'

export const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <FooterTop>
          <FooterLogo src={Logo} alt="Car Rental" />

          <FooterInfoItem>
            <FooterInfoIcon src={Location} alt="" />

            <FooterInfoContent>
              <FooterInfoLabel>Address</FooterInfoLabel>
              <FooterInfoText>Oxford Ave. Cary, NC 27511</FooterInfoText>
            </FooterInfoContent>
          </FooterInfoItem>

          <FooterInfoItem>
            <FooterInfoIcon src={Mail} alt="" />

            <FooterInfoContent>
              <FooterInfoLabel>Email</FooterInfoLabel>
              <FooterInfoText>nwiger@yahoo.com</FooterInfoText>
            </FooterInfoContent>
          </FooterInfoItem>

          <FooterInfoItem>
            <FooterInfoIcon src={Phone} alt="" />

            <FooterInfoContent>
              <FooterInfoLabel>Phone</FooterInfoLabel>
              <FooterInfoText>+537 547-6401</FooterInfoText>
            </FooterInfoContent>
          </FooterInfoItem>
        </FooterTop>

        <FooterGrid>
          <FooterBrand>
            <FooterDescription>
              Faucibus faucibus pellentesque dictum turpis. Id pellentesque
              turpis massa a id iaculis lorem tincidunt.
            </FooterDescription>

            <FooterSocials>
              <FooterSocialLink>
                <FaFacebookF />
              </FooterSocialLink>
              <FooterSocialLink>
                <FaInstagram />
              </FooterSocialLink>
              <FooterSocialLink>
                <RiTwitterXFill />
              </FooterSocialLink>
              <FooterSocialLink>
                <FaYoutube />
              </FooterSocialLink>
            </FooterSocials>
          </FooterBrand>

          <FooterColumn>
            <FooterTitle>Useful links</FooterTitle>

            <FooterList>
              <FooterListItem>
                <FooterLink to="/about">About us</FooterLink>
              </FooterListItem>

              <FooterListItem>
                <FooterLink to="/contact">Contact us</FooterLink>
              </FooterListItem>

              <FooterListItem>
                <FooterLink to="/gallery">Gallery</FooterLink>
              </FooterListItem>

              <FooterListItem>
                <FooterLink to="/blog">Blog</FooterLink>
              </FooterListItem>

              <FooterListItem>
                <FooterLink to="/faq">F.A.Q</FooterLink>
              </FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Vehicles</FooterTitle>

            <FooterList>
              <FooterListItem>Sedan</FooterListItem>
              <FooterListItem>Cabriolet</FooterListItem>
              <FooterListItem>Pickup</FooterListItem>
              <FooterListItem>Minivan</FooterListItem>
              <FooterListItem>SUV</FooterListItem>
            </FooterList>
          </FooterColumn>

          <FooterColumn>
            <FooterTitle>Download App</FooterTitle>

            <FooterStoreImage src={AppleStore} alt="App Store" />

            <FooterStoreImage src={PlayMarket} alt="Google Play" />
          </FooterColumn>
        </FooterGrid>

        <FooterBottom>
          © Copyright Car Rental 2024. Design by Figma.guru
        </FooterBottom>
      </Container>
    </FooterWrapper>
  )
}
