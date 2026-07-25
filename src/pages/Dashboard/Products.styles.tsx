import styled from 'styled-components'

export const ProductsPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const ProductsHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 22px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(177, 0, 69, 0.06),
    rgba(255, 157, 10, 0.1)
  );
  border: 1px solid rgba(177, 0, 69, 0.08);
  box-shadow: 0 10px 24px rgba(17, 17, 17, 0.04);

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

export const FiltersWrapper = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  align-items: center;
  padding: 16px 18px;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(177, 0, 69, 0.08);
  box-shadow: 0 8px 20px rgba(17, 17, 17, 0.03);

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;

    > * {
      flex: 1;
      min-width: 150px;
    }
  }
`

export const TableWrapper = styled.div`
  background: rgba(255, 255, 255, 0.95);
  border-radius: 20px;
  border: 1px solid rgba(177, 0, 69, 0.08);
  overflow: hidden;
  box-shadow: 0 10px 24px rgba(17, 17, 17, 0.04);
`

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;

  thead {
    background: linear-gradient(90deg, #fff7fa, #fff5ea);
  }

  th {
    padding: 14px 16px;
    text-align: left;
    font-weight: 700;
    color: #6b7280;
    font-size: 13px;
    text-transform: uppercase;
    letter-spacing: 0.04em;
  }

  td {
    padding: 14px 16px;
    border-top: 1px solid #f1f3f5;
    font-size: 14px;
    color: #374151;
  }

  tbody tr:hover {
    background-color: #fff8fb;
  }
`

export const ProductImage = styled.img`
  width: 54px;
  height: 54px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid #f3f4f6;
`

export const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
`

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
`

export const EmptyState = styled.div`
  text-align: center;
  padding: 60px 24px;
  color: #6b7280;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(177, 0, 69, 0.08);
  box-shadow: 0 8px 20px rgba(17, 17, 17, 0.03);

  h3 {
    margin: 0 0 10px 0;
    color: #111827;
  }
`

export const LoadingState = styled.div`
  text-align: center;
  padding: 60px 20px;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.9);
  border: 1px solid rgba(177, 0, 69, 0.08);
`
