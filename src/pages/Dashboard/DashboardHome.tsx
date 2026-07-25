import { Card, Grid, Group, Skeleton, Stack, Text } from '@mantine/core'
import {
  useProductsCount,
  useCategoriesCount,
  useAveragePrice,
} from '../../hooks/useApi'
import { IconCurrency, IconPackage, IconTags } from '@tabler/icons-react'

export const DashboardHome = () => {
  const productsCount = useProductsCount()
  const categoriesCount = useCategoriesCount()
  const averagePrice = useAveragePrice()

  const cards = [
    {
      title: 'Total Products',
      value: productsCount.data,
      icon: <IconPackage size={22} />,
      loading: productsCount.isLoading,
      color: '#b10045',
    },
    {
      title: 'Total Categories',
      value: categoriesCount.data,
      icon: <IconTags size={22} />,
      loading: categoriesCount.isLoading,
      color: '#ff9d0a',
    },
    {
      title: 'Average Price',
      value: averagePrice.data ? `$${averagePrice.data}` : '$0',
      icon: <IconCurrency size={22} />,
      loading: averagePrice.isLoading,
      color: '#1f2937',
    },
  ]

  return (
    <Stack gap="md">
      <div>
        <Text size="xs" tt="uppercase" c="dimmed" fw={700}>
          Overview
        </Text>
        <Text size="xl" fw={700} style={{ color: '#111111' }}>
          Dashboard summary
        </Text>
      </div>

      <Grid>
        {cards.map((card) => (
          <Grid.Col span={{ base: 12, sm: 6, md: 4 }} key={card.title}>
            <Card
              padding="lg"
              radius="20px"
              withBorder
              style={{
                background: 'linear-gradient(135deg, #ffffff 0%, #fff8fb 100%)',
                borderColor: 'rgba(177, 0, 69, 0.08)',
              }}
            >
              <Group justify="space-between" mb="md">
                <Text fw={600} size="sm">
                  {card.title}
                </Text>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: `${card.color}14`,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </div>
              </Group>

              {card.loading ? (
                <Skeleton height={36} />
              ) : (
                <Text size="28px" fw={700} style={{ color: '#111111' }}>
                  {card.value}
                </Text>
              )}
            </Card>
          </Grid.Col>
        ))}
      </Grid>
    </Stack>
  )
}
