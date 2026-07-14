import styled from 'styled-components'
import { Link } from 'react-router'

export const FooterWrapper = styled.footer`
  padding: 80px 0 40px;
`

export const FooterTop = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 40px;
  padding-bottom: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const FooterInfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const FooterInfoIcon = styled.img`
  width: 50px;
  height: 50px;
`

export const FooterInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const FooterInfoLabel = styled.span`
  font-size: 16px;
  color: #555;
`

export const FooterInfoText = styled.span`
  font-size: 16px;
  font-weight: 700;
  color: #111;
`

export const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr 1fr 1fr;
  gap: 60px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 40px;
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const FooterBrand = styled.div`
  max-width: 280px;
`

export const FooterLogo = styled.img`
  width: 180px;
`

export const FooterDescription = styled.p`
  margin: 0;
  color: #111;
  font-size: 20px;
  font-weight: 700;
  line-height: 1.6;
`

export const FooterSocials = styled.div`
  display: flex;
  gap: 14px;
  margin-top: 30px;
`

export const FooterSocialLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  color: #111;
  text-decoration: none;
  font-size: 14px;
  font-weight: 700;
  transition: 0.2s;

  &:hover {
    background: #b10045;
    color: #fff;
  }
`

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`

export const FooterTitle = styled.h3`
  margin: 0 0 24px;
  font-size: 20px;
  font-weight: 700;
  color: #111;
`

export const FooterList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0;
  padding: 0;
  list-style: none;
`

export const FooterListItem = styled.li`
  color: #444;
  font-size: 16px;
`

export const FooterLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    color: #b10045;
  }
`

export const FooterStoreImage = styled.img`
  width: 180px;
  margin-bottom: 16px;
  cursor: pointer;
`

export const FooterBottom = styled.div`
  margin-top: 70px;
  text-align: center;
  color: #888;
  font-size: 14px;
`
