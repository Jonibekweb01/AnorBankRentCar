import { useState } from 'react'
import {
  Box,
  Button,
  LoadingOverlay,
  Modal,
  Stack,
  Text,
  TextInput,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals'
import {
  useCategories,
  useCreateCategory,
  useUpdateCategory,
  useDeleteCategory,
  type Category,
} from '../../hooks/useApi'
import {
  CategoriesPageWrapper,
  CategoriesHeader,
  TableWrapper,
  StyledTable,
  CategoryImage,
  ActionButtons,
  EmptyState,
  LoadingState,
} from './Categories.styles'
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react'

export const Categories = () => {
  const [modalOpened, setModalOpened] = useState(false)
  const [editingCategory, setEditingCategory] = useState<Category | null>(null)

  const { data: categories, isLoading } = useCategories()
  const createMutation = useCreateCategory()
  const updateMutation = useUpdateCategory()
  const deleteMutation = useDeleteCategory()

  const form = useForm({
    initialValues: {
      name: '',
      image: '',
    },
    validate: {
      name: (value) => (!value ? 'Name is required' : null),
      image: (value) => (!value ? 'Image URL is required' : null),
    },
  })

  const handleOpenModal = (category?: Category) => {
    if (category) {
      setEditingCategory(category)
      form.setValues({
        name: category.name,
        image: category.image,
      })
    } else {
      setEditingCategory(null)
      form.reset()
    }
    setModalOpened(true)
  }

  const handleCloseModal = () => {
    setModalOpened(false)
    form.reset()
    setEditingCategory(null)
  }

  const handleSubmit = form.onSubmit((values) => {
    if (editingCategory) {
      updateMutation.mutate(
        { id: editingCategory.id, category: values },
        { onSuccess: handleCloseModal }
      )
    } else {
      createMutation.mutate(values, { onSuccess: handleCloseModal })
    }
  })

  const handleDelete = (id: number) => {
    modals.openConfirmModal({
      title: 'Delete Category',
      children: 'Are you sure you want to delete this category?',
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteMutation.mutate(id),
    })
  }

  return (
    <CategoriesPageWrapper>
      <CategoriesHeader>
        <Box>
          <Text size="xs" tt="uppercase" c="dimmed" fw={700}>
            Catalog management
          </Text>
          <Text size="xl" fw={700} style={{ color: '#111111' }}>
            Categories
          </Text>
        </Box>
        <Button
          onClick={() => handleOpenModal()}
          aria-label="Add new category"
          leftSection={<IconPlus size={16} />}
          style={{
            background: 'linear-gradient(90deg, #b10045 0%, #ff9d0a 100%)',
            border: 'none',
          }}
        >
          Add Category
        </Button>
      </CategoriesHeader>

      {isLoading ? (
        <LoadingState>
          <LoadingOverlay visible />
        </LoadingState>
      ) : !categories || categories.length === 0 ? (
        <EmptyState>
          <h3>No categories found</h3>
          <p>Create your first category.</p>
        </EmptyState>
      ) : (
        <TableWrapper>
          <StyledTable>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category: Category) => (
                <tr key={category.id}>
                  <td>
                    <CategoryImage src={category.image} alt={category.name} />
                  </td>
                  <td>
                    <Text fw={600}>{category.name}</Text>
                  </td>
                  <td>
                    <ActionButtons>
                      <Button
                        size="xs"
                        variant="light"
                        color="orange"
                        leftSection={<IconEdit size={14} />}
                        onClick={() => handleOpenModal(category)}
                        disabled={updateMutation.isPending}
                      >
                        Edit
                      </Button>
                      <Button
                        size="xs"
                        color="red"
                        variant="light"
                        leftSection={<IconTrash size={14} />}
                        onClick={() => handleDelete(category.id)}
                        loading={deleteMutation.isPending}
                        disabled={deleteMutation.isPending}
                      >
                        Delete
                      </Button>
                    </ActionButtons>
                  </td>
                </tr>
              ))}
            </tbody>
          </StyledTable>
        </TableWrapper>
      )}

      <Modal
        opened={modalOpened}
        onClose={handleCloseModal}
        title={editingCategory ? 'Edit Category' : 'Create Category'}
        centered
        size="md"
      >
        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Name"
              placeholder="Category name"
              {...form.getInputProps('name')}
            />
            <TextInput
              label="Image URL"
              placeholder="Image URL"
              {...form.getInputProps('image')}
            />
            <Button
              type="submit"
              loading={createMutation.isPending || updateMutation.isPending}
              disabled={createMutation.isPending || updateMutation.isPending}
              style={{
                background: 'linear-gradient(90deg, #b10045 0%, #ff9d0a 100%)',
                border: 'none',
              }}
            >
              {editingCategory ? 'Update' : 'Create'}
            </Button>
          </Stack>
        </form>
      </Modal>
    </CategoriesPageWrapper>
  )
}
