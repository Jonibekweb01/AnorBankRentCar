import styled from 'styled-components'
import Herob from '../../../../assets/images/hero-main.png'

export const Hero = styled.section`
  padding: 10px 0 0;
`

export const HeroInner = styled.div`
  min-height: 545px;
  padding: 78px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 343px;
  align-items: center;
  gap: 80px;
  border-radius: 32px;

  background-color: #b10045;

  background-image: url(${Herob});

  background-repeat: no-repeat, no-repeat;
`
export const HeroContent = styled.div`
  max-width: 520px;
`

export const HeroTitle = styled.h1`
  margin: 0 0 27px 0;
  color: #ffffff;
  font-size: 55px;
  font-weight: bold;
  line-height: 1.08;
  letter-spacing: -1.5px;
`

export const HeroDescription = styled.p`
  max-width: 430px;
  margin-bottom: 33px;
  color: rgba(255, 255, 255, 0.92);
  font-size: 15px;
  font-weight: 400;
  line-height: 1.35;
`

export const HeroViewButton = styled.button`
  min-width: 128px;
  padding: 10px 24px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #ffffff;
  background-color: #ff9d0a;
  border: 0;
  border-radius: 10px;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease;

  &:hover {
    background-color: #f08f00;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 255, 255, 0.7);
    outline-offset: 3px;
  }
`

export const HeroForm = styled.form`
  width: 100%;
  padding: 34px 32px 33px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: #ffffff;
  border-radius: 18px;
`

export const SearchFormTitle = styled.h2`
  margin: 0 0 14px;
  color: #111111;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.2;
  text-align: center;
`

export const SearchFormField = styled.div`
  width: 100%;

  select,
  input {
    width: 100%;
    height: 48px;
    padding: 0 16px;
    color: #202020;
    background-color: #f8f8f8;
    border: 1px solid transparent;
    border-radius: 12px;
    font: inherit;
    font-size: 14px;
    outline: none;
    transition:
      border-color 180ms ease,
      box-shadow 180ms ease,
      background-color 180ms ease;
  }

  select {
    cursor: pointer;
  }

  input[type='date'] {
    cursor: pointer;
  }

  select:focus,
  input:focus {
    background-color: #ffffff;
    border-color: #b10045;
    box-shadow: 0 0 0 3px rgba(177, 0, 69, 0.12);
  }
`

export const HeroFormButton = styled.button`
  width: 100%;
  height: 48px;
  margin-top: 16px;
  color: #ffffff;
  background-color: #ff9d0a;
  border: 0;
  border-radius: 11px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition:
    transform 180ms ease,
    background-color 180ms ease;

  &:hover {
    background-color: #f08f00;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }

  &:focus-visible {
    outline: 3px solid rgba(255, 157, 10, 0.3);
    outline-offset: 3px;
  }
`
