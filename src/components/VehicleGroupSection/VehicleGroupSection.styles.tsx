import styled from 'styled-components'
import { NavLink } from 'react-router'

export const VehicleGroupSectionWrapper = styled.section`
  padding: 50px 0;
`

export const VehicleGroupTitle = styled.h2`
  margin-bottom: 40px;
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
`

export const VehicleGroupTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 60px;
  flex-wrap: wrap;
`
export const VehicleGroupTab = styled(NavLink)<{
  $active?: boolean
}>`
  padding: 16px 32px;
  border-radius: 999px;
  text-decoration: none;

  background: ${({ $active }) => ($active ? '#b10045' : '#f5f5f5')};

  color: ${({ $active }) => ($active ? '#fff' : '#111')};

  transition: 0.2s;
`
