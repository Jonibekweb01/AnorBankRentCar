import styled from 'styled-components'

export const ReviewsFaqSectionWrapper = styled.section`
  padding: 80px 0 100px;
`

export const SectionTitle = styled.h2`
  margin: 0 0 40px;
  color: #111111;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`

export const ReviewsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`

export const ReviewCard = styled.article`
  display: flex;
  flex-direction: column;
  min-height: 320px;
  overflow: hidden;
  background-color: #f7f7f7;
  border-radius: 16px;
`

export const ReviewContent = styled.div`
  flex: 1;
  padding: 34px 32px 28px;
`

export const QuoteIcon = styled.span`
  display: block;
  height: 46px;
  color: #6847ff;
  font-size: 58px;
  font-weight: 700;
  line-height: 1;
`

export const ReviewText = styled.p`
  margin: 12px 0 0;
  color: #111111;
  font-size: 15px;
  font-weight: 400;
  line-height: 1.45;
  text-align: center;
`

export const ReviewFooter = styled.div`
  position: relative;
  min-height: 90px;
  padding: 42px 20px 18px;
  color: #ffffff;
  text-align: center;
  background-color: #b10045;
`

export const ReviewAvatar = styled.img`
  position: absolute;
  top: 0;
  left: 50%;
  width: 58px;
  height: 58px;
  object-fit: cover;
  border: 4px solid #f7f7f7;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`

export const ReviewCompany = styled.span`
  display: block;
  margin-bottom: 3px;
  color: rgba(255, 255, 255, 0.75);
  font-size: 12px;
  line-height: 1.2;
`

export const ReviewName = styled.strong`
  display: block;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.2;
`

export const FaqWrapper = styled.div`
  margin-top: 100px;
`

export const FaqList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`

export const FaqItem = styled.details`
  overflow: hidden;
  background-color: #ffffff;
  border: 1px solid #b7bec8;
  border-radius: 14px;

  &[open] ${'' /* faqat ochilgan FAQ uchun */} {
  }
`

export const FaqQuestion = styled.summary`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  min-height: 78px;
  padding: 22px 28px;
  color: #111111;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  list-style: none;
  cursor: pointer;

  &::-webkit-details-marker {
    display: none;
  }
`

export const FaqArrow = styled.span`
  color: #111111;
  font-size: 16px;
  transition: transform 180ms ease;

  ${FaqItem}[open] & {
    transform: rotate(180deg);
  }
`

export const FaqAnswer = styled.p`
  margin: 0;
  padding: 0 28px 26px;
  color: #777777;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;
`