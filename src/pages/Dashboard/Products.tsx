import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  Button,
  TextInput,
  Select,
  Pagination,
  Modal,
  LoadingOverlay,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { modals } from '@mantine/modals'
import {
  useProducts,
  useCategories,
  useCreateProduct,
  useUpdateProduct,
  useDeleteProduct,
  type Product,
  type Category,
} from '../../hooks/useApi'
import {
  ProductsPageWrapper,
  ProductsHeader,
  FiltersWrapper,
  TableWrapper,
  StyledTable,
  ProductImage,
  ActionButtons,
  PaginationWrapper,
  EmptyState,
  LoadingState,
} from './Products.styles'

const LIMIT = 10

export const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const offset = parseInt(searchParams.get('offset') || '0')
  const categoryId = searchParams.get('categoryId')
  const title = searchParams.get('title')
  const sortBy = searchParams.get('sortBy')

  const [modalOpened, setModalOpened] = useState(false)
  const [editingProduct, setEditingProduct] = useState<Product | null>(null)

  const { data: products, isLoading } = useProducts({
    offset,
    limit: LIMIT,
    categoryId: categoryId ? parseInt(categoryId) : undefined,
    title: title || undefined,
  })

  const { data: categories } = useCategories()
  const createMutation = useCreateProduct()
  const updateMutation = useUpdateProduct()
  const deleteMutation = useDeleteProduct()

  const form = useForm({
    initialValues: {
      title: '',
      price: '',
      description: '',
      categoryId: '',
      images: '',
    },
    validate: {
      title: (value) => (!value ? 'Title is required' : null),
      price: (value) => (!value ? 'Price is required' : null),
      categoryId: (value) => (!value ? 'Category is required' : null),
    },
  })

  const handleOpenModal = (product?: Product) => {
    if (product) {
      setEditingProduct(product)
      form.setValues({
        title: product.title,
        price: product.price.toString(),
        description: product.description,
        categoryId: product.category.id.toString(),
        images: product.images[0] || '',
      })
    } else {
      setEditingProduct(null)
      form.reset()
    }
    setModalOpened(true)
  }

  const handleCloseModal = () => {
    setModalOpened(false)
    form.reset()
    setEditingProduct(null)
  }

  const handleSubmit = form.onSubmit((values) => {
    interface ProductFormData {
      title: string
      price: number
      description: string
      categoryId: number
      images: string[]
    }

    const productData: ProductFormData = {
      title: values.title,
      price: parseFloat(values.price),
      description: values.description,
      categoryId: parseInt(values.categoryId),
      images: [values.images],
    }

    if (editingProduct) {
      updateMutation.mutate(
        { id: editingProduct.id, product: productData },
        { onSuccess: handleCloseModal }
      )
    } else {
      createMutation.mutate(productData, { onSuccess: handleCloseModal })
    }
  })

  const handleDelete = (id: number) => {
    modals.openConfirmModal({
      title: 'Delete Product',
      children: 'Are you sure you want to delete this product?',
      labels: { confirm: 'Delete', cancel: 'Cancel' },
      confirmProps: { color: 'red' },
      onConfirm: () => deleteMutation.mutate(id),
    })
  }

  const handleSearch = (value: string) => {
    setSearchParams({ offset: '0', ...(value && { title: value }) })
  }

  const handleCategoryFilter = (value: string | null) => {
    setSearchParams({
      offset: '0',
      ...(value && { categoryId: value }),
      ...(title && { title }),
    })
  }

  const totalPages = Math.ceil((products?.length || 0) / LIMIT)

  let displayProducts = products || []
  if (sortBy === 'price') {
    displayProducts = [...displayProducts].sort((a, b) => a.price - b.price)
  }

  return (
    <ProductsPageWrapper>
      <ProductsHeader>
        <h2>Products</h2>
        <Button onClick={() => handleOpenModal()} aria-label="Add new product">
          Add Product
        </Button>
      </ProductsHeader>

      <FiltersWrapper>
        <TextInput
          placeholder="Search products..."
          value={title || ''}
          onChange={(e) => handleSearch(e.currentTarget.value)}
          style={{ flex: 1 }}
        />
        <Select
          placeholder="Filter by category"
          data={
            categories?.map((cat: Category) => ({
              value: cat.id.toString(),
              label: cat.name,
            })) || []
          }
          value={categoryId}
          onChange={handleCategoryFilter}
          clearable
          style={{ flex: 1 }}
        />
        <Select
          placeholder="Sort by..."
          data={[{ value: 'price', label: 'Price (Low to High)' }]}
          value={sortBy}
          onChange={(value) => setSearchParams({ sortBy: value || '' })}
          clearable
          style={{ flex: 1 }}
        />
      </FiltersWrapper>

      {isLoading ? (
        <LoadingState>
          <LoadingOverlay visible />
        </LoadingState>
      ) : displayProducts.length === 0 ? (
        <EmptyState>
          <h3>No products found</h3>
          <p>Try adjusting your filters or create a new product.</p>
        </EmptyState>
      ) : (
        <>
          <TableWrapper>
            <StyledTable>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {displayProducts.map((product: Product) => (
                  <tr key={product.id}>
                    <td>
                      <ProductImage
                        src={product.images[0]}
                        alt={product.title}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.category.name}</td>
                    <td>${product.price}</td>
                    <td>
                      <ActionButtons>
                        <Button
                          size="xs"
                          variant="light"
                          onClick={() => handleOpenModal(product)}
                          disabled={updateMutation.isPending}
                        >
                          Edit
                        </Button>
                        <Button
                          size="xs"
                          color="red"
                          variant="light"
                          onClick={() => handleDelete(product.id)}
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

          {totalPages > 1 && (
            <PaginationWrapper>
              <Pagination
                value={offset / LIMIT + 1}
                onChange={(page) =>
                  setSearchParams({
                    offset: ((page - 1) * LIMIT).toString(),
                    ...(categoryId && { categoryId }),
                    ...(title && { title }),
                  })
                }
                total={totalPages}
              />
            </PaginationWrapper>
          )}
        </>
      )}

      <Modal
        opened={modalOpened}
        onClose={handleCloseModal}
        title={editingProduct ? 'Edit Product' : 'Create Product'}
      >
        <form onSubmit={handleSubmit}>
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <TextInput
              label="Title"
              placeholder="Product title"
              {...form.getInputProps('title')}
            />
            <TextInput
              label="Price"
              placeholder="Price"
              type="number"
              {...form.getInputProps('price')}
            />
            <TextInput
              label="Description"
              placeholder="Product description"
              {...form.getInputProps('description')}
            />
            <Select
              label="Category"
              placeholder="Select category"
              data={
                categories?.map((cat: Category) => ({
                  value: cat.id.toString(),
                  label: cat.name,
                })) || []
              }
              {...form.getInputProps('categoryId')}
            />
            <TextInput
              label="Image URL"
              placeholder="Image URL"
              {...form.getInputProps('images')}
            />
            <Button
              type="submit"
              loading={createMutation.isPending || updateMutation.isPending}
              disabled={createMutation.isPending || updateMutation.isPending}
            >
              {editingProduct ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </ProductsPageWrapper>
  )
}
