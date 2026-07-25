import { useNavigate } from 'react-router-dom'
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  ThemeIcon,
  Title,
} from '@mantine/core'
import { useForm } from '@mantine/form'
import {
  IconAlertCircle,
  IconCar,
  IconLock,
  IconMail,
  IconShieldCheck,
} from '@tabler/icons-react'
import { useLogin } from '../../hooks/useApi'
import logo from '../../assets/logo/images.png'

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
    <Box
      mih="100vh"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background:
          'linear-gradient(135deg, #fff8fb 0%, #fff4e8 45%, #ffffff 100%)',
      }}
    >
      <Paper
        shadow="xl"
        radius="xl"
        p={{ base: 'lg', md: 'xl' }}
        style={{
          width: '100%',
          maxWidth: 1020,
          overflow: 'hidden',
          border: '1px solid rgba(177, 0, 69, 0.08)',
        }}
      >
        <Box
          style={{
            display: 'grid',
            gridTemplateColumns: '1.05fr 0.95fr',
            gap: 0,
          }}
        >
          <Box
            style={{
              padding: '32px',
              background: 'linear-gradient(145deg, #b10045 0%, #8b0034 100%)',
              color: '#fff',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '24px',
            }}
          >
            <Box>
              <ThemeIcon size={54} radius="xl" color="white" variant="light">
                <IconCar size={28} color="#b10045" />
              </ThemeIcon>

              <Title
                order={1}
                mt="md"
                style={{ color: '#fff', lineHeight: 1.1 }}
              >
                Admin paneliga xush kelibsiz
              </Title>
              <Text
                size="sm"
                mt="sm"
                style={{ color: 'rgba(255,255,255,0.82)' }}
              >
                Avtomobillar, kategoriyalar va mijozlar bilan ishlashni bitta
                xavfsiz dashboard orqali boshqaring.
              </Text>
            </Box>

            <Box
              style={{
                background: 'rgba(255,255,255,0.14)',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: '16px',
                padding: '16px',
              }}
            >
              <Text fw={600} size="sm">
                Xavfsiz kirish
              </Text>
              <Text size="sm" mt={4} style={{ color: 'rgba(255,255,255,0.8)' }}>
                Hisobingizga faqat ruxsatli administratorlar kirishi mumkin.
              </Text>
            </Box>
          </Box>

          <Box style={{ padding: '32px', background: '#fff' }}>
            <Box
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
              }}
            >
              <Box>
                <Title order={2} style={{ color: '#111111' }}>
                  Tizimga kirish
                </Title>
                <Text size="sm" c="dimmed" mt={4}>
                  Davom etish uchun ma’lumotlaringizni kiriting.
                </Text>
              </Box>

              <img
                src={logo}
                alt="AnorBank logo"
                style={{ width: 56, height: 56, objectFit: 'contain' }}
              />
            </Box>

            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  leftSection={<IconMail size={16} />}
                  leftSectionProps={{ style: { color: '#b10045' } }}
                  size="md"
                  radius="md"
                  {...form.getInputProps('email')}
                />

                <PasswordInput
                  label="Parol"
                  placeholder="Parolingizni kiriting"
                  leftSection={<IconLock size={16} />}
                  leftSectionProps={{ style: { color: '#b10045' } }}
                  size="md"
                  radius="md"
                  {...form.getInputProps('password')}
                />

                <Checkbox label="Meni eslab qol" size="sm" />

                <Button
                  fullWidth
                  type="submit"
                  loading={loginMutation.isPending}
                  disabled={loginMutation.isPending}
                  size="md"
                  radius="md"
                  leftSection={<IconShieldCheck size={16} />}
                  style={{
                    background:
                      'linear-gradient(90deg, #b10045 0%, #ff9d0a 100%)',
                    border: 'none',
                  }}
                >
                  Kirish
                </Button>
              </Stack>
            </form>

            {loginMutation.isError && (
              <Alert
                color="red"
                variant="light"
                icon={<IconAlertCircle size={16} />}
                mt="md"
              >
                {loginMutation.error instanceof Error
                  ? loginMutation.error.message
                  : 'Login failed'}
              </Alert>
            )}
          </Box>
        </Box>
      </Paper>
    </Box>
  )
}
