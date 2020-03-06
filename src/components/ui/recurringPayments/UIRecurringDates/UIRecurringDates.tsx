import {DateTimePicker, SegmentedControl} from '@components/ui'
import React, {useCallback, useState} from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  frequencyPicker: {
    marginBottom: 24,
  },
})

interface FrequenciesProps {
  value: string
  label: string
}

interface UIRecurringDatesProps {
  frequency: string
  setFrequency: (frequency: string) => void
  date: Date
  setDate: (date: Date) => void
  disabled?: boolean
  style?: StyleProp<ViewStyle>
  frequencies: FrequenciesProps[]
  maxDate: Date
}

const UIRecurringDates = ({
  frequency,
  setFrequency,
  date,
  setDate,
  disabled,
  style,
  frequencies,
  maxDate,
}: UIRecurringDatesProps) => {
  const [selectedIndex, setSelectedIndex] = useState(
    frequencies.findIndex((f) => f.value === frequency),
  )

  const handleValueChange = useCallback(
    (index: number) => {
      setSelectedIndex(index)
      setFrequency(frequencies[index].value)
      setDate(new Date())
    },
    [frequencies, setFrequency, setDate],
  )

  return (
    <View style={style}>
      <SegmentedControl
        selectedIndex={selectedIndex}
        onValueChange={handleValueChange}
        values={frequencies.map((f) => f.label)}
        disabled={disabled}
        style={styles.frequencyPicker}
      />
      <DateTimePicker
        date={date}
        onDateChange={setDate}
        mode="date"
        minDate={new Date()}
        maxDate={maxDate}
        disabled={disabled}
      />
    </View>
  )
}

export default UIRecurringDates
