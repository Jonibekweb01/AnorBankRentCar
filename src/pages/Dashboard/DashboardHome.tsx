import { Grid, Card, Text, Skeleton, Group } from '@mantine/core'
import {
  useProductsCount,
  useCategoriesCount,
  useAveragePrice,
} from '../../hooks/useApi'
import { IconPackage, IconTags, IconCurrency } from '@tabler/icons-react'

export const DashboardHome = () => {
  const productsCount = useProductsCount()
  const categoriesCount = useCategoriesCount()
  const averagePrice = useAveragePrice()

  return (
    <div>
      <h2>Dashboard Overview</h2>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text fw={500}>Total Products</Text>
              <IconPackage size={24} />
            </Group>
            {productsCount.isLoading ? (
              <Skeleton height={40} />
            ) : (
              <Text size="xl" fw="bold">
                {productsCount.data}
              </Text>
            )}
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text fw={500}>Total Categories</Text>
              <IconTags size={24} />
            </Group>
            {categoriesCount.isLoading ? (
              <Skeleton height={40} />
            ) : (
              <Text size="xl" fw="bold">
                {categoriesCount.data}
              </Text>
            )}
          </Card>
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6, md: 4 }}>
          <Card padding="lg" radius="md" withBorder>
            <Group justify="space-between" mb="md">
              <Text fw={500}>Average Price</Text>
              <IconCurrency size={24} />
            </Group>
            {averagePrice.isLoading ? (
              <Skeleton height={40} />
            ) : (
              <Text size="xl" fw="bold">
                ${averagePrice.data}
              </Text>
            )}
          </Card>
        </Grid.Col>
      </Grid>
    </div>
  )
}
