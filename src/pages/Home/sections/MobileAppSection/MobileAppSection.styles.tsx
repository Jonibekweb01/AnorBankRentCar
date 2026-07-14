import styled from 'styled-components'

export const MobileAppSectionWrapper = styled.section`
  padding: 96px 0;
`

export const MobileAppInner = styled.div`
  min-height: 480px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(380px, 520px);
  align-items: center;
  gap: 80px;
`

export const MobileAppContent = styled.div`
  max-width: 520px;
`

export const MobileAppTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: clamp(42px, 4vw, 58px);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1.5px;
`

export const MobileAppDescription = styled.p`
  max-width: 510px;
  margin: 30px 0 0;
  color: #777777;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.65;
`

export const MobileAppStores = styled.div`
  margin-top: 42px;
  display: flex;
  align-items: center;
  gap: 28px;
  flex-wrap: wrap;
`

export const MobileAppStoreLink = styled.a`
  display: inline-flex;
  align-items: center;
  border-radius: 8px;
  transition:
    transform 180ms ease,
    opacity 180ms ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(177, 0, 69, 0.22);
    outline-offset: 4px;
  }
`

export const MobileAppStoreImage = styled.img`
  display: block;
  width: auto;
  height: 48px;
  object-fit: contain;
`

export const MobileAppImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const MobileAppImage = styled.img`
  display: block;
  width: 100%;
  max-width: 470px;
  height: auto;
  object-fit: contain;
`
