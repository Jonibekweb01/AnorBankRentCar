import styled from 'styled-components'
import { Link } from 'react-router'

export const ContactSectionWrapper = styled.section`
  padding: 64px 0 100px;
`

export const ContactHeading = styled.div`
  margin-bottom: 90px;
  text-align: center;
`

export const ContactTitle = styled.h1`
  margin: 0 0 14px;
  color: #111111;
  font-size: 42px;
  font-weight: 700;
  line-height: 1.2;

  @media (max-width: 576px) {
    font-size: 34px;
  }
`

export const ContactBreadcrumbs = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  color: #999999;
  font-size: 14px;
`

export const ContactBreadcrumbLink = styled(Link)`
  color: #999999;
  text-decoration: none;
  transition: color 180ms ease;

  &:hover {
    color: #b10045;
  }
`

export const ContactBreadcrumbCurrent = styled.span`
  color: #111111;
`

export const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 380px minmax(0, 1fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

export const ContactFormWrapper = styled.div`
  min-width: 0;

  > * {
    height: 100%;
  }
`

export const ContactImageWrapper = styled.div`
  min-width: 0;
  min-height: 460px;
  overflow: hidden;
  border-radius: 18px;

  @media (max-width: 768px) {
    min-height: 360px;
  }

  @media (max-width: 576px) {
    min-height: 280px;
  }
`

export const ContactImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
