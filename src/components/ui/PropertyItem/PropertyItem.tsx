import {Icon, Text} from '@components/ui'
import React from 'react'
import {StyleSheet, TouchableOpacity, View} from 'react-native'

const styles = StyleSheet.create({
  labelText: {
    color: '#83919b',
  },
  itemText: {
    color: '#081c2b',
    marginTop: 8,
  },
  item: {
    height: 72,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

interface PropertyItemProps {
  label: string
  text: string
  onPress?: () => void
}

const PropertyItem = ({label, text, onPress}: PropertyItemProps) => (
  <TouchableOpacity onPress={onPress} disabled={!onPress}>
    <View style={styles.item}>
      <View>
        <Text variant="body" style={styles.labelText}>
          {label}
        </Text>
        <Text variant="headline" style={styles.itemText}>
          {text}
        </Text>
      </View>
      {!!onPress && <Icon name="chevron-right" />}
    </View>
  </TouchableOpacity>
)

export default PropertyItem
