import {Icon} from '@components/ui'
import {GOALS_IMAGES} from '@components/ui/goals/goals'
import React from 'react'
import {Image, StyleProp, StyleSheet, TouchableOpacity, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  touchable: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
  },
  wrap: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  small: {
    width: 32,
    height: 32,
  },
  wide: {
    width: 58,
    height: 58,
  },
  completed: {
    backgroundColor: '#f2f5f8',
    borderRadius: 58,
    width: 64,
    height: 64,
  },
  completedIconWrapper: {
    backgroundColor: '#fd4344',
    width: 25,
    height: 25,
    borderRadius: 24,
    overflow: 'hidden',
    position: 'absolute',
    right: -4,
    top: -4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completedIcon: {
    width: 12,
  },
})

interface UIGoalPersonalityItemProps {
  personality: string
  completed?: boolean
  size?: 'small' | 'wide'
  onPress?: () => void
  style?: StyleProp<ViewStyle>
}

export const UIGoalPersonalityItem = ({
  personality,
  completed,
  size = 'small',
  onPress,
  style,
}: UIGoalPersonalityItemProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[styles.touchable, completed && styles.completed, style]}
      testID={`goalTypes.${personality}`}
    >
      {completed && (
        <View style={styles.completedIconWrapper}>
          <Icon name="check" color="#fff" style={styles.completedIcon} />
        </View>
      )}
      <View style={styles.wrap}>
        <Image source={GOALS_IMAGES[personality] || GOALS_IMAGES.car} style={styles[size]} />
      </View>
    </TouchableOpacity>
  )
}

export default UIGoalPersonalityItem
