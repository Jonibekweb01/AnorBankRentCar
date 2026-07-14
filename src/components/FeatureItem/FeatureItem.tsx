import {
  FeatureCard,
  FeatureDescription,
  FeatureIcon,
  FeatureTitle,
} from './FeatureItem.styles'



interface FeatureItemProps {
  icon: string
  title: string
  description: string
}

export const FeatureItem = ({ icon, title, description }: FeatureItemProps) => {
  return (
    <FeatureCard>
      <FeatureIcon>
        <img src={icon} alt={title} />
      </FeatureIcon>

      <FeatureTitle>{title}</FeatureTitle>

      <FeatureDescription>{description}</FeatureDescription>
    </FeatureCard>
  )
}
