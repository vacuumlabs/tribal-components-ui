import React from 'react'
import {
  GestureResponderEvent,
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  item: {
    flex: 1,
    height: 32,
    borderWidth: 1,
    borderRightWidth: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  first: {
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16,
  },
  last: {
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    borderRightWidth: 1,
  },
})

const DEFAULT_TINT_COLOR = '#015397'

interface SegmentedControlItemProps {
  isSelected: boolean
  onPress: (event: GestureResponderEvent) => void
  disabled: boolean
  isFirst?: boolean
  isLast?: boolean
  value: string
  tintColor: string
}

const SegmentedControlItem = ({
  isSelected,
  onPress,
  disabled = false,
  isFirst = false,
  isLast = false,
  value,
  tintColor,
}: SegmentedControlItemProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.item,
        isFirst && styles.first,
        isLast && styles.last,
        {
          backgroundColor: isSelected ? tintColor : '#fff',
          borderColor: tintColor,
        },
      ]}
      disabled={disabled}
      onPress={onPress}
      activeOpacity={0.9}
    >
      <Text style={{color: isSelected ? '#fff' : tintColor}}>{value}</Text>
    </TouchableOpacity>
  )
}

interface SegmentedControlProps {
  disabled?: boolean
  selectedIndex: number
  tintColor?: string
  onValueChange: (newIndex: number) => void
  values: string[]
  style?: StyleProp<ViewStyle>
}

const SegmentedControl = ({
  disabled = false,
  selectedIndex,
  tintColor = DEFAULT_TINT_COLOR,
  onValueChange,
  values,
  style,
}: SegmentedControlProps) => {
  return (
    <View style={[styles.container, style]}>
      {values.map((value, index) => (
        <SegmentedControlItem
          key={index}
          value={value}
          isSelected={selectedIndex === index}
          disabled={disabled}
          tintColor={tintColor}
          onPress={() => onValueChange(index)}
          isFirst={index === 0}
          isLast={index === values.length - 1}
        />
      ))}
    </View>
  )
}

export default SegmentedControl
