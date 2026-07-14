import styled from 'styled-components'

interface HeroFormWrapperProps {
  backgroundColor?: string
  padding?: string
}

export const HeroFormWrapper = styled.div<HeroFormWrapperProps>`
  width: 100%;
  max-width: ${({ padding }) => (padding === '64px 32px 3px' ? '383px' : '343px')};
  padding: ${({ padding }) => padding ?? '34px 32px 33px'};
  background-color: ${({ backgroundColor }) => backgroundColor ?? '#ffffff'};
  border-radius: 18px;
  box-shadow: none;

  h2 {
    margin: 0 0 28px;
    font-family: 'Work Sans', sans-serif;
    font-size: 24px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
  }

  @media (max-width: 992px) {
    max-width: 500px;
  }

  @media (max-width: 576px) {
    padding: 28px 20px;
  }
`

export const HeroFormSelect = styled.div`
  .mantine-Select-input {
    height: 48px;
    padding: 0 16px;
    color: #202020;
    background-color: #f8f8f8;
    border: 1px solid transparent;
    border-radius: 12px;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      background-color 180ms ease;
  }

  .mantine-Select-input:focus {
    background-color: #ffffff;
    border-color: #b10045;
    box-shadow: 0 0 0 3px rgba(177, 0, 69, 0.12);
  }

  .mantine-Select-option {
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
  }
`

export const HeroFormDate = styled.div`
  .mantine-DatePickerInput-input {
    height: 48px;
    padding: 0 16px;
    color: #202020;
    background-color: #f8f8f8;
    border: 1px solid transparent;
    border-radius: 12px;
    font-family: 'Work Sans', sans-serif;
    font-size: 14px;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      background-color 180ms ease;
  }

  .mantine-DatePickerInput-input:focus {
    background-color: #ffffff;
    border-color: #b10045;
    box-shadow: 0 0 0 3px rgba(177, 0, 69, 0.12);
  }
`

export const HeroFormButton = styled.button`
  height: 48px;
  margin-top: 16px;
  color: #ffffff;
  background-color: #ff9d0a;
  border: 0;
  border-radius: 11px;
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  transition:
    background-color 180ms ease,
    transform 180ms ease;

  &:hover {
    background-color: #f08f00;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`
