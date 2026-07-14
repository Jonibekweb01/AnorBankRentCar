import styled from 'styled-components'

export const DownloadAppWrapper = styled.section`
  padding: 150px 0;
  position: relative;
`

export const DownloadAppCard = styled.div`
  position: relative;

  display: grid;
  grid-template-columns: 320px 1fr;
  align-items: center;
  gap: 70px;

  min-height: 360px;
  padding: 60px 90px;

  background: #b10045;
  border-radius: 32px;
  overflow: visable;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 60px 40px;
  }
`

export const DownloadAppPhone = styled.div`
  position: relative;
  display: flex;
  justify-content: center;

  @media (min-width: 992px) {
    margin-top: -140px;
  }
`

export const DownloadAppImage = styled.img`
  position: absolute;
  bottom: -200px;
  z-index: 100;
  object-fit: contain;
  border-radius: 90px;
`

export const DownloadAppContent = styled.div`
  max-width: 520px;
`

export const DownloadAppSubtitle = styled.span`
  display: block;
  margin-bottom: 14px;

  color: rgba(255, 255, 255, 0.8);
  font-size: 13px;
  font-weight: 500;
  letter-spacing: 1px;
`

export const DownloadAppTitle = styled.h2`
  margin: 0 0 24px;

  color: #fff;
  font-size: 56px;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 42px;
  }
`

export const DownloadAppDescription = styled.p`
  margin: 0;

  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.8;
`

export const DownloadAppStores = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 32px;

  @media (max-width: 992px) {
    justify-content: center;
  }

  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`

export const DownloadAppStoreImage = styled.img`
  width: 170px;
  cursor: pointer;
`
