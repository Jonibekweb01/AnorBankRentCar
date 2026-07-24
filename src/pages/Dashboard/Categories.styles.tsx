import styled from 'styled-components'

export const CategoriesPageWrapper = styled.div``

export const CategoriesHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`

export const TableWrapper = styled.div`
  background-color: white;
  border-radius: 8px;
  border: 1px solid #e9ecef;
  overflow: x-auto;
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background-color: #f8f9fa;
    border-bottom: 2px solid #dee2e6;
  }

  th {
    padding: 15px;
    text-align: left;
    font-weight: 600;
    color: #495057;
    font-size: 14px;
  }

  td {
    padding: 15px;
    border-bottom: 1px solid #dee2e6;
    font-size: 14px;
  }

  tbody tr:hover {
    background-color: #f8f9fa;
  }
`

export const CategoryImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #868e96;

  h3 {
    margin: 0 0 10px 0;
  }
`

export const LoadingState = styled.div`
  text-align: center;
  padding: 60px 20px;
`
