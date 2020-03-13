import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import DateTimePicker from './DateTimePicker'

interface DateTimePickerRendererProps {
  render: (dateString: string, date: Date, setDate: (date: Date) => void) => JSX.Element
}

const DateTimePickerRenderer = ({render}: DateTimePickerRendererProps) => {
  const [date, setDate] = useState(new Date())
  const dateString = date.toLocaleString('en-GB')
  return render(dateString, date, setDate)
}

storiesOf('DateTimePicker', module)
  .add('date', () => (
    <DateTimePickerRenderer
      render={(dateString, date, setDate) => (
        <DateTimePicker label={dateString} date={date} onDateChange={setDate} mode="date" />
      )}
    />
  ))
  .add('time', () => (
    <DateTimePickerRenderer
      render={(dateString, date, setDate) => (
        <DateTimePicker label={dateString} date={date} onDateChange={setDate} mode="time" />
      )}
    />
  ))
  .add('datetime', () => (
    <DateTimePickerRenderer
      render={(dateString, date, setDate) => (
        <DateTimePicker label={dateString} date={date} onDateChange={setDate} mode="datetime" />
      )}
    />
  ))
