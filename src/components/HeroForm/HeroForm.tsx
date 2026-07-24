import { Button, Paper, Select, Stack, Title } from '@mantine/core'
import { DatePickerInput } from '@mantine/dates'

import {
  HeroFormButton,
  HeroFormDate,
  HeroFormSelect,
  HeroFormWrapper,
} from './HeroForm.styles'

interface HeroFormProps {
  backgroundColor?: string
}

export const HeroForm = ({ backgroundColor = '#ffffff' }: HeroFormProps) => {
  const isDarkBackground = backgroundColor.toLowerCase() === '#a30041'
  const wrapperPadding = isDarkBackground ? '64px 32px 3px' : '34px 32px 33px'
  const titleColor = isDarkBackground ? '#ffffff' : '#111111'

  return (
    <Paper
      component={HeroFormWrapper}
      backgroundColor={backgroundColor}
      padding={wrapperPadding}
    >
      <Title order={2} c={titleColor}>
        Book your car
      </Title>

      <form onSubmit={(event) => event.preventDefault()}>
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
            name="carType"
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
            name="rentalPlace"
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
            name="returnPlace"
          />

          <DatePickerInput
            className={HeroFormDate}
            placeholder="Rental date"
            valueFormat="DD MMM YYYY"
            minDate={new Date()}
            clearable
            name="rentalDate"
          />

          <DatePickerInput
            className={HeroFormDate}
            placeholder="Return date"
            valueFormat="DD MMM YYYY"
            minDate={new Date()}
            clearable
            name="returnDate"
          />

          <Button component={HeroFormButton} type="submit" fullWidth>
            Book now
          </Button>
        </Stack>
      </form>
    </Paper>
  )
}
