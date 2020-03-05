import {Text} from '@components/ui'
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 32,
  },
  circle: {
    height: 16,
    width: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#015397',
  },
  checked: {
    borderWidth: 6,
  },
  text: {
    paddingHorizontal: 16,
  },
})

interface RadioButtonProps {
  options: {value: string; label: string}[]
  value: any
  onChangeValue: (value: any) => void
}

const RadioButton = ({options, value, onChangeValue}: RadioButtonProps) => {
  return (
    <View>
      {options.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={styles.buttonContainer}
          onPress={() => onChangeValue(item.value)}
        >
          <>
            <View style={[styles.circle, value === item.value && styles.checked]} />
            <Text style={styles.text}>{item.label}</Text>
          </>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default RadioButton
