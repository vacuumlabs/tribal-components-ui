import React from 'react'
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native'
import Icon, {IconName} from '../Icon/Icon'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  icon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  stateIcon: {
    position: 'absolute',
    width: 17,
    height: 17,
    backgroundColor: '#fff',
    borderRadius: 8.5,
    justifyContent: 'center',
    alignItems: 'center',
    right: -1,
    bottom: -2,
  },
  stateIconText: {
    color: '#015397',
    fontSize: 12,
    lineHeight: 12,
    fontWeight: '700',
  },
  text: {
    color: '#015397',
  },
})

export interface AvatarProps {
  icon?: IconName
  initials?: string
  image?: ImageSourcePropType
  sign?: 'plus' | 'minus'
  backgroundColor?: string
  iconColor?: string
}

enum COLORS {
  NEGATIVE = '#f87777',
  POSITIVE = '#015397',
}

const Avatar = ({
  icon,
  initials,
  image,
  sign,
  backgroundColor = '#f5f5f5',
  iconColor = '#015397',
}: RequireOnlyOne<AvatarProps, 'icon' | 'initials' | 'image'>) => {
  return (
    <View style={[styles.icon, {backgroundColor}]}>
      {initials ? (
        <Text variant="body" style={styles.text}>
          {initials}
        </Text>
      ) : icon ? (
        <Icon name={icon} color={iconColor} />
      ) : image ? (
        <Image source={image} style={styles.image} />
      ) : null}
      {sign && (
        <View style={styles.stateIcon}>
          <Text
            style={[
              styles.stateIconText,
              {color: sign === 'plus' ? COLORS.POSITIVE : COLORS.POSITIVE},
            ]}
          >
            {sign === 'plus' ? '+' : '-'}
          </Text>
        </View>
      )}
    </View>
  )
}

export default Avatar
