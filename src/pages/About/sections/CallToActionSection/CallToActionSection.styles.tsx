import styled from 'styled-components'

interface CallToActionInnerProps {
  $background: string
}

export const CallToActionSectionWrapper = styled.section`
  padding: 96px 0;
`

export const CallToActionInner = styled.div<CallToActionInnerProps>`
  min-height: 340px;
  padding: 58px 64px;
  overflow: hidden;
  border-radius: 24px;

  background:
    url(${({ $background }) => $background}) center/cover no-repeat,
    #b10045;
  background-size: 1296px 415px;
  display: flex;
  align-items: center;
`

export const CallToActionContent = styled.div`
  max-width: 560px;
`

export const CallToActionTitle = styled.h2`
  margin: 0;
  color: #ffffff;
  font-size: 45px;
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -1.5px;
`

export const CallToActionDescription = styled.p`
  max-width: 520px;
  margin: 28px 0 0;

  color: rgba(255, 255, 255, 0.92);
  font-size: 18px;
  font-weight: 400;
  line-height: 1.5;
`

export const CallToActionForm = styled.form`
  width: 100%;
  max-width: 470px;
  height: 58px;
  margin-top: 40px;
  padding: 8px;

  display: flex;
  align-items: center;
  gap: 12px;

  background-color: #ffffff;
  border-radius: 16px;
`

export const CallToActionInput = styled.input`
  flex: 1;
  height: 100%;
  padding: 0 20px;

  border: 0;
  outline: none;

  color: #111111;
  font-size: 16px;
  font-weight: 500;
  background: transparent;

  &::placeholder {
    color: #8c8c8c;
  }
`

export const CallToActionButton = styled.button`
  min-width: 120px;
  height: 42px;

  border: 0;
  border-radius: 12px;

  background-color: #ff9d0a;
  color: #ffffff;

  font-size: 16px;
  font-weight: 600;

  cursor: pointer;

  transition:
    background-color 180ms ease,
    transform 180ms ease;

  &:hover {
    background-color: #f09000;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
