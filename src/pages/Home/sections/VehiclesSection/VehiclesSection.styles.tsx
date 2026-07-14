import styled from 'styled-components'

export const VehiclesSectionWrapper = styled.section`
  padding: 96px 0;
`

export const VehiclesHeader = styled.div`
  margin-bottom: 36px;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 24px;
`

export const VehiclesTitle = styled.h2`
  margin: 0;
  color: #111111;
  font-size: clamp(36px, 4vw, 52px);
  font-weight: bold;
  line-height: 1.05;
  letter-spacing: -1.4px;
`

export const VehiclesLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  color: #111111;
  font-size: 14px;
  font-weight: 700;
  text-decoration: none;
  transition: color 180ms ease;

  span {
    font-size: 20px;
    line-height: 1;
  }

  &:hover {
    color: #b00046;
  }
`
