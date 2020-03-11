import Icon, {IconName} from '@components/ui/Icon/Icon'
import Text from '@components/ui/Text/Text'
import React from 'react'
import {StyleProp, StyleSheet, TouchableOpacity, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  link: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    height: 24,
  },
  linkText: {
    color: '#015397',
  },
  linkIconText: {
    marginLeft: 8,
  },
})

interface LinkProps {
  title?: string
  icon?: IconName
  onPress: () => void
  style?: StyleProp<ViewStyle>
  color?: string
  testID?: string
}

const Link = ({title, icon, onPress, style, color, testID}: LinkProps) => (
  <TouchableOpacity
    onPress={onPress}
    hitSlop={{top: 8, right: 8, bottom: 8, left: 8}}
    style={[styles.container, style]}
    testID={testID}
  >
    {!!icon && <Icon name={icon} color={color} />}
    <Text
      variant="body"
      style={[styles.linkText, !!icon && styles.linkIconText, !!color && {color}]}
    >
      {title}
    </Text>
  </TouchableOpacity>
)

export default Link
