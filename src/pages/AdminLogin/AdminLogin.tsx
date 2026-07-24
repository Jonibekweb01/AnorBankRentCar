import { useNavigate } from 'react-router-dom'
import {
  Container,
  Paper,
  PasswordInput,
  TextInput,
  Button,
  Title,
  Stack,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import { useLogin } from '../../hooks/useApi'

export const Login = () => {
  const navigate = useNavigate()
  const loginMutation = useLogin()

  const form = useForm({
    initialValues: {
      email: 'john@mail.com',
      password: 'changeme',
    },
    validate: {
      email: (value) => (!value ? 'Email is required' : null),
      password: (value) => (!value ? 'Password is required' : null),
    },
  })

  const handleSubmit = form.onSubmit((values) => {
    loginMutation.mutate(values, {
      onSuccess: () => {
        navigate('/dashboard')
      },
    })
  })

  return (
    <Container size={400} my={40}>
      <Paper p="xl" radius="md" withBorder>
        <Title order={2} mb="lg">
          Admin Panel
        </Title>

        <form onSubmit={handleSubmit}>
          <Stack gap="md">
            <TextInput
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps('email')}
            />

            <PasswordInput
              label="Password"
              placeholder="Your password"
              {...form.getInputProps('password')}
            />

            <Button
              fullWidth
              type="submit"
              loading={loginMutation.isPending}
              disabled={loginMutation.isPending}
            >
              Login
            </Button>
          </Stack>
        </form>

        {loginMutation.isError && (
          <div style={{ color: 'red', marginTop: '1rem' }}>
            {loginMutation.error instanceof Error
              ? loginMutation.error.message
              : 'Login failed'}
          </div>
        )}
      </Paper>
    </Container>
  )
}
