import Button from '@components/ui/Button/Button'
import {IconName} from '@components/ui/Icon/Icon'
import SectionHeader from '@components/ui/SectionHeader/SectionHeader'
import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 24,
    paddingBottom: 32,
    paddingHorizontal: 45,
    marginHorizontal: 32,
    marginTop: 48,
  },
  bordered: {
    borderColor: '#dae1e6',
    borderWidth: 1,
  },
})

interface EmptyListProps {
  icon?: IconName
  title?: string
  description?: string
  action: () => void
  actionTitle: string
  actionIcon?: IconName
  style?: StyleProp<ViewStyle>
}

const EmptyList = ({
  icon,
  title,
  description,
  action,
  actionTitle,
  actionIcon,
  style,
}: EmptyListProps) => {
  return (
    <View style={[styles.container, !!title && styles.bordered, style]}>
      <SectionHeader icon={icon} title={title} description={description} />
      <Button title={actionTitle} variant="secondary" onPress={action} icon={actionIcon} />
    </View>
  )
}

export default EmptyList
