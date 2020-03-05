import {Icon, IconName, Text} from '@components/ui'
import React from 'react'
import {StyleSheet, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  container: {
    marginRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  text: {
    color: '#83919b',
  },
})

interface HeaderRightButtonProps {
  title?: string
  icon?: IconName
  onPress: () => void
}

const HeaderRightButton = ({
  title,
  icon,
  onPress,
}: RequireAtLeastOne<HeaderRightButtonProps, 'title' | 'icon'>) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      hitSlop={{top: 8, right: 8, bottom: 8, left: 8}}
      testID="header.rightButton"
    >
      {!!icon && <Icon name={icon} color="#081c2b" />}
      {!!title && (
        <Text variant="body" style={styles.text}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  )
}

export default HeaderRightButton
