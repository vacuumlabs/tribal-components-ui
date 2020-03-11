import Text from '@components/ui/Text/Text'
import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  badge: {
    height: 20,
    borderRadius: 10,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  text: {
    fontSize: 10,
    lineHeight: 16,
    fontWeight: '700',
  },
  primary: {
    backgroundColor: '#015397',
    color: '#fff',
  },
  secondary: {
    backgroundColor: '#f2f5f8',
    color: '#83919b',
  },
  danger: {
    backgroundColor: '#d32223',
    color: '#fff',
  },
})

export interface BadgeProps {
  label: string
  variant?: 'primary' | 'secondary' | 'danger'
  style?: StyleProp<ViewStyle>
}

const Badge = ({label, variant = 'primary', style}: BadgeProps) => {
  return (
    <View style={[styles.badge, styles[variant], style]}>
      <Text style={[styles.text, styles[variant]]}>{label}</Text>
    </View>
  )
}

export default Badge
