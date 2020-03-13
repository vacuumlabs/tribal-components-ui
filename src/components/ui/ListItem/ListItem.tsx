import React, {ReactNode} from 'react'
import {StyleSheet, TouchableHighlight, View} from 'react-native'
import {formatMessage} from '../../../utils/formats'
import Badge, {BadgeProps} from '../Badge/Badge'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  touchable: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  infoWrap: {
    flex: 1,
    marginLeft: 24,
  },
  topText: {
    marginBottom: 8,
  },
  titleText: {
    color: '#081c2b',
    paddingRight: 15,
  },
  descriptionText: {
    color: '#83919b',
  },
  valueText: {
    color: '#081c2b',
  },
  valueWrapper: {
    flexDirection: 'column',
    alignItems: 'flex-end',
  },
  badge: {
    marginTop: 3,
  },
})

interface ListItemProps {
  avatarComponent?: ReactNode
  onPress?: () => void
  onLongPress?: () => void
  title: string
  description?: string
  value?: string
  badgeLabel?: string
  badgeVariant?: BadgeProps['variant']
  valueComponent?: ReactNode
  reverseLines?: boolean
  underlayColor?: string
}

const ListItem = ({
  avatarComponent,
  title,
  description,
  onPress,
  onLongPress,
  value,
  valueComponent,
  badgeLabel,
  badgeVariant,
  reverseLines,
  underlayColor = '#dae1e6',
}: ListItemProps) => {
  return (
    <TouchableHighlight
      onPress={onPress}
      onLongPress={onLongPress}
      underlayColor={underlayColor}
      style={styles.touchable}
    >
      <View style={styles.container}>
        {avatarComponent}
        <View style={styles.infoWrap}>
          <Text
            variant="headline"
            style={[
              reverseLines ? styles.descriptionText : styles.titleText,
              styles.topText,
              badgeLabel === formatMessage('common', 'processing') ? {color: '#83919b'} : {},
            ]}
            numberOfLines={1}
          >
            {title}
          </Text>
          {!!description && (
            <Text variant="body" style={reverseLines ? styles.titleText : styles.descriptionText}>
              {description}
            </Text>
          )}
        </View>
        {!!value && (
          <View style={styles.valueWrapper}>
            <Text variant="headline" style={styles.valueText}>
              {value}
            </Text>
            {!!badgeLabel && (
              <Badge
                label={badgeLabel}
                variant={badgeVariant || 'secondary'}
                style={styles.badge}
              />
            )}
          </View>
        )}
        {valueComponent}
      </View>
    </TouchableHighlight>
  )
}

export default ListItem
