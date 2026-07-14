import CarImage from '../../../../../assets/images/about-book-now-background.png'
import styled from 'styled-components'

export const BookNowWrapper = styled.section`
  padding: 100px 0;
`

export const BookNowCard = styled.div`
  position: relative;
  padding: 70px 80px;
  overflow: hidden;
  background-color: #b10045;
  background-image: url(${CarImage});
  background-size: 1296px 427px;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 24px;
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
    text-align: center;
  }

  &::before {
    content: '';

    position: absolute;
    top: 0;
    left: 0;

    width: 45%;
    height: 120px;

    background: url('/images/tire-pattern.png') no-repeat;
    opacity: 0.15;
  }
`

export const BookNowContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 515px;
`

export const BookNowSubtitle = styled.h2`
  margin: 0 0 12px;

  color: #fff;
  font-size: 50px;
  font-weight: 700;
  line-height: 1.1;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`

export const BookNowPhone = styled.div`
  margin-bottom: 20px;
  color: #fff;
  font-size: 40px;
  font-weight: 700;
`

export const BookNowDescription = styled.p`
  margin: 0 0 36px;

  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  line-height: 1.8;
`

export const BookNowButton = styled.button`
  padding: 14px 34px;

  color: #fff;
  font-size: 15px;
  font-weight: 600;

  background: #f6a000;
  border: none;
  border-radius: 10px;

  cursor: pointer;
`

export const BookNowImage = styled.img`
  position: absolute;
  right: 40px;
  bottom: 20px;

  width: 520px;
  object-fit: contain;

  @media (max-width: 992px) {
    position: static;
    width: 100%;
    max-width: 420px;
  }
`
