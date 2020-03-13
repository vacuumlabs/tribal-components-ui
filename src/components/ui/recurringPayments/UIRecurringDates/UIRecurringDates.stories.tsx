import {date, object, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import UIRecurringDates from './UIRecurringDates'

interface UIRecurringDatesRendererProps {
  render: (
    frequency: string,
    setFrequency: (frequency: string) => void,
    date: Date,
    setDate: (date: Date) => void,
  ) => JSX.Element
}

const UIRecurringDatesRenderer = ({render}: UIRecurringDatesRendererProps) => {
  const [frequency, setFrequency] = useState('Monthly')
  const [date, setDate] = useState(new Date())
  return render(frequency, setFrequency, date, setDate)
}

const frequencies = [
  {
    label: 'Monthly',
    value: 'Monthly',
  },
  {
    label: 'Quarterly',
    value: 'Quarterly',
  },
  {
    label: '6 Months',
    value: '6 Months',
  },
  {
    label: 'Annually',
    value: 'Annually',
  },
]

function dateKnob(name: string, defaultValue: Date) {
  const stringTimestamp = date(name, defaultValue)
  return new Date(stringTimestamp)
}

storiesOf('UIRecurringDates', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <UIRecurringDatesRenderer
      render={(frequency, setFrequency, date, setDate) => (
        <UIRecurringDates
          frequency={frequency}
          setFrequency={setFrequency}
          date={date}
          setDate={setDate}
          maxDate={dateKnob('maxDate', new Date(2025, 0, 0))}
          frequencies={object('frequencies', frequencies)}
        />
      )}
    />
  ))
