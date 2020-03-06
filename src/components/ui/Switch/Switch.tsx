import React from 'react'
import {Platform, StyleProp, StyleSheet, Switch as RNSwitch, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  switch: {
    transform: [{scale: Platform.OS === 'ios' ? 0.75 : 1}],
  },
})

interface SwitchProps {
  value: boolean
  onValueChange: (value: boolean) => void
  disabled?: boolean
  style?: StyleProp<ViewStyle>
}

const Switch = ({value, onValueChange, disabled, style}: SwitchProps) => (
  <View style={style}>
    <RNSwitch
      trackColor={{false: '#dae1e6', true: '#dae1e6'}}
      ios_backgroundColor="#dae1e6"
      thumbColor={value ? '#fd4344' : '#83919b'}
      value={value}
      onValueChange={onValueChange}
      style={styles.switch}
      disabled={disabled}
    />
  </View>
)

export default Switch
