import styled from 'styled-components'

export const StatisticCardWrapper = styled.article`
  min-height: 84px;
  padding: 14px;
  display: flex;
  align-items: center;
  gap: 14px;
  background-color: #ffffff;
  border-radius: 16px;
`

export const StatisticCardIcon = styled.div`
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  background-color: #ff9d0a;
  border-radius: 12px;

  img {
    width: 32px;
    height: 32px;
    object-fit: contain;
  }
`

export const StatisticCardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const StatisticCardValue = styled.strong`
  color: #111111;
  font-size: 24px;
  font-weight: 700;
  line-height: 1;
`

export const StatisticCardLabel = styled.span`
  color: #6f6f6f;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.2;
`
