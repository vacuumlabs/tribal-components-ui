import Avatar from '@components/ui/Avatar/Avatar'
import {IconName} from '@components/ui/Icon/Icon'
import Text from '@components/ui/Text/Text'
import {STYLES} from '@utils/constants'
import React from 'react'
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  shadowContainer: {
    backgroundColor: '#fff',
    paddingBottom: 24,
    ...STYLES.shadow,
  },
  titleText: {
    color: '#081c2b',
    marginBottom: 8,
    textAlign: 'center',
  },
  descriptionText: {
    color: '#83919b',
    textAlign: 'center',
    marginBottom: 24,
  },
  avatar: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    alignSelf: 'center',
  },
})

interface SectionHeaderProps {
  title?: string
  icon?: IconName
  initials?: string
  sign?: 'plus' | 'minus'
  iconColor?: string
  backgroundColor?: string
  description?: string
  withShadow?: boolean
}

const SectionHeader = ({
  icon,
  initials,
  sign,
  title,
  iconColor = '#015397',
  backgroundColor = '#f2f5f8',
  description,
  withShadow,
}: SectionHeaderProps) => (
  <View style={withShadow && styles.shadowContainer}>
    {(!!initials || !!icon) && (
      <View style={styles.avatar}>
        {initials ? (
          <Avatar initials={initials} sign={sign} backgroundColor={backgroundColor} />
        ) : icon ? (
          <Avatar icon={icon} iconColor={iconColor} sign={sign} backgroundColor={backgroundColor} />
        ) : null}
      </View>
    )}
    {!!title && (
      <Text variant="headline" style={styles.titleText}>
        {title}
      </Text>
    )}
    {!!description && (
      <Text variant="body" style={[styles.descriptionText, withShadow && {marginBottom: 0}]}>
        {description}
      </Text>
    )}
  </View>
)

export default SectionHeader
