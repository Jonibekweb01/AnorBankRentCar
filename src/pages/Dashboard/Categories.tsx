import { useState } from 'react'
import { Button, TextInput, Modal, LoadingOverlay } from '@mantine/core'
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
        <h2>Categories</h2>
        <Button onClick={() => handleOpenModal()} aria-label="Add new category">
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
                  <td>{category.name}</td>
                  <td>
                    <ActionButtons>
                      <Button
                        size="xs"
                        variant="light"
                        onClick={() => handleOpenModal(category)}
                        disabled={updateMutation.isPending}
                      >
                        Edit
                      </Button>
                      <Button
                        size="xs"
                        color="red"
                        variant="light"
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
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
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
            >
              {editingCategory ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </CategoriesPageWrapper>
  )
}
