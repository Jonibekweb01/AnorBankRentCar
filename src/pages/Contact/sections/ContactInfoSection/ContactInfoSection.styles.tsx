import styled from 'styled-components'

export const ContactInfoWrapper = styled.section`
  padding: 100px 0;
`

export const ContactInfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 32px;
  margin-bottom: 120px;

  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

export const ContactInfoCard = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`

export const ContactInfoIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 60px;
  height: 60px;

  color: white;

  background: #f59e0b;
  border-radius: 50%;
`

export const ContactInfoContent = styled.div``

export const ContactInfoLabel = styled.p`
  margin: 0 0 6px;

  color: #444;
  font-size: 15px;
`

export const ContactInfoValue = styled.p`
  margin: 0;

  color: #111;
  font-size: 15px;
  font-weight: 700;
`

export const BlogSection = styled.div``

export const BlogTitle = styled.h2`
  margin-bottom: 60px;

  text-align: center;
  font-size: 50px;
  font-weight: 700;
`

export const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`

export const BlogCard = styled.article``

export const BlogImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 20px;
`

export const BlogCardTitle = styled.h3`
  margin: 28px 0 18px;

  font-size: 20px;
  font-weight: 700;
  line-height: 1.3;
`

export const BlogCardDate = styled.span`
  color: #777;
  font-size: 16px;
`