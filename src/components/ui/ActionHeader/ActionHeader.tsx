import {Text} from '@components/ui'
import React from 'react'
import {GestureResponderEvent, StyleSheet, TouchableOpacity, View} from 'react-native'

export const ACTION_HEADER_HEIGHT = 56

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: ACTION_HEADER_HEIGHT,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  titleText: {
    color: '#081c2b',
    fontWeight: '700',
  },
  actionText: {
    color: '#fd4344',
    fontWeight: '400',
  },
})

interface ActionHeaderProps {
  title: string
  onPress: (event: GestureResponderEvent) => void
  actionLabel: string
  actionTestID?: string
}

const ActionHeader = ({title, onPress, actionLabel, actionTestID}: ActionHeaderProps) => {
  return (
    <View style={styles.header}>
      <Text variant="headline" style={styles.titleText}>
        {title}
      </Text>
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{top: 8, right: 8, bottom: 8, left: 8}}
        testID={actionTestID}
      >
        <Text variant="body" style={styles.actionText}>
          {actionLabel}
        </Text>
      </TouchableOpacity>
    </View>
  )
}

export default ActionHeader
