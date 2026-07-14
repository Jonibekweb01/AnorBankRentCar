import { IconClock, IconMail, IconMapPin, IconPhone } from '@tabler/icons-react'

import ContactCardImg from '../../../../assets/images/contact-info-image.jpg'

import {
  ContactInfoWrapper,
  ContactInfoGrid,
  ContactInfoCard,
  ContactInfoIcon,
  ContactInfoContent,
  ContactInfoLabel,
  ContactInfoValue,
  BlogSection,
  BlogTitle,
  BlogGrid,
  BlogCard,
  BlogImage,
  BlogCardTitle,
  BlogCardDate,
} from './ContactInfoSection.styles'
import { Container } from '@mantine/core'

const contacts = [
  {
    icon: IconMapPin,
    label: 'Address',
    value: 'Oxford Ave. Cary, NC 27511',
  },
  {
    icon: IconMail,
    label: 'Email',
    value: 'nwiger@yahoo.com',
  },
  {
    icon: IconPhone,
    label: 'Phone',
    value: '+537 547-6401',
  },
  {
    icon: IconClock,
    label: 'Opening hours',
    value: 'Sun-Mon: 10am - 10pm',
  },
]

const blogs = [
  {
    title: 'How To Choose The Right Car',
    date: 'News / 12April 2024',
  },
  {
    title: 'Which plan is right for me?',
    date: 'News / 12April 2024',
  },
  {
    title: 'Enjoy Speed, Choice & Total Control',
    date: 'News / 12April 2024',
  },
]

export const ContactInfoSection = () => {
  return (
    <ContactInfoWrapper>
      <Container>
        <ContactInfoGrid>
          {contacts.map(({ icon: Icon, label, value }) => (
            <ContactInfoCard key={label}>
              <ContactInfoIcon>
                <Icon size={28} stroke={1.8} />
              </ContactInfoIcon>

              <ContactInfoContent>
                <ContactInfoLabel>{label}</ContactInfoLabel>

                <ContactInfoValue>{value}</ContactInfoValue>
              </ContactInfoContent>
            </ContactInfoCard>
          ))}
        </ContactInfoGrid>

        <BlogSection>
          <BlogTitle>Latest blog posts & news</BlogTitle>

          <BlogGrid>
            {blogs.map((blog) => (
              <BlogCard key={blog.title}>
                <BlogImage
                  src={ContactCardImg}
                  alt={blog.title}
                  width={416}
                  height={220}
                />

                <BlogCardTitle>{blog.title}</BlogCardTitle>

                <BlogCardDate>{blog.date}</BlogCardDate>
              </BlogCard>
            ))}
          </BlogGrid>
        </BlogSection>
      </Container>
    </ContactInfoWrapper>
  )
}
