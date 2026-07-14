import { Button, Paper, Select, Stack, Title } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'
import { useForm } from '@mantine/form'

import {
  HeroFormButton,
  HeroFormDate,
  HeroFormSelect,
  HeroFormWrapper,
} from './HeroForm.styles'

interface HeroFormValues {
  carType: string
  rentalPlace: string
  returnPlace: string
  rentalDate: Date | null
  returnDate: Date | null
}

interface HeroFormProps {
  backgroundColor?: string
}

export const HeroForm = ({ backgroundColor = '#ffffff' }: HeroFormProps) => {
  const isDarkBackground = backgroundColor.toLowerCase() === '#a30041'
  const wrapperPadding = isDarkBackground ? '64px 32px 3px' : '34px 32px 33px'
  const titleColor = isDarkBackground ? '#ffffff' : '#111111'

  const form = useForm<HeroFormValues>({
    mode: 'uncontrolled',

    initialValues: {
      carType: '',
      rentalPlace: '',
      returnPlace: '',
      rentalDate: null,
      returnDate: null,
    },

    validate: {
      carType: (value) => (!value ? 'Select a car type' : null),

      rentalPlace: (value) => (!value ? 'Select a rental location' : null),

      returnPlace: (value) => (!value ? 'Select a return location' : null),

      rentalDate: (value) => (!value ? 'Select a rental date' : null),

      returnDate: (value, values) => {
        if (!value) {
          return 'Select a return date'
        }

        if (
          values.rentalDate &&
          new Date(value) < new Date(values.rentalDate)
        ) {
          return 'Return date cannot be earlier than rental date'
        }

        return null
      },
    },
  })

  const handleSubmit = (values: HeroFormValues) => {
    console.log(values)
  }

  const rentalDateValue = form.getValues().rentalDate

  return (
    <Paper
      component={HeroFormWrapper}
      backgroundColor={backgroundColor}
      padding={wrapperPadding}
    >
      <Title order={2} c={titleColor}>
        Book your car
      </Title>

      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap={16}>
          <Select
            className={HeroFormSelect}
            placeholder="Car type"
            data={[
              { value: 'sedan', label: 'Sedan' },
              { value: 'suv', label: 'SUV' },
              { value: 'sport', label: 'Sport' },
              { value: 'electric', label: 'Electric' },
            ]}
            allowDeselect={false}
            key={form.key('carType')}
            {...form.getInputProps('carType')}
          />

          <Select
            className={HeroFormSelect}
            placeholder="Place of rental"
            data={[
              { value: 'tashkent', label: 'Tashkent' },
              { value: 'samarkand', label: 'Samarkand' },
              { value: 'bukhara', label: 'Bukhara' },
            ]}
            searchable
            allowDeselect={false}
            key={form.key('rentalPlace')}
            {...form.getInputProps('rentalPlace')}
          />

          <Select
            className={HeroFormSelect}
            placeholder="Place of return"
            data={[
              { value: 'tashkent', label: 'Tashkent' },
              { value: 'samarkand', label: 'Samarkand' },
              { value: 'bukhara', label: 'Bukhara' },
            ]}
            searchable
            allowDeselect={false}
            key={form.key('returnPlace')}
            {...form.getInputProps('returnPlace')}
          />

          <DatePickerInput
            className={HeroFormDate}
            placeholder="Rental date"
            valueFormat="DD MMM YYYY"
            minDate={new Date()}
            clearable
            key={form.key('rentalDate')}
            {...form.getInputProps('rentalDate')}
          />

          <DatePickerInput
            className={HeroFormDate}
            placeholder="Return date"
            valueFormat="DD MMM YYYY"
            minDate={rentalDateValue ? new Date(rentalDateValue) : new Date()}
            clearable
            key={form.key('returnDate')}
            {...form.getInputProps('returnDate')}
          />

          <Button component={HeroFormButton} type="submit" fullWidth>
            Book now
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
