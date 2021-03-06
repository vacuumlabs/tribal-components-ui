import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'
import DatePicker from 'rmc-date-picker'
import IDatePickerProps from 'rmc-date-picker/lib/IDatePickerProps'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  label: {
    textAlign: 'center',
    marginBottom: 30,
  },
})

interface DateTimePickerProps extends IDatePickerProps {
  label?: string
  style?: StyleProp<ViewStyle>
}

const DateTimePicker = ({label, style, ...props}: DateTimePickerProps) => {
  return (
    <View style={style}>
      {!!label && (
        <Text variant="body" style={styles.label}>
          {label}
        </Text>
      )}
      <DatePicker {...props} />
    </View>
  )
}

export default DateTimePicker
