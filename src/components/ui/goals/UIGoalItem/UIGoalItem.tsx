import React from 'react'
import {Image, Platform, StyleSheet, TouchableHighlight, View} from 'react-native'
import {formatMessage} from '../../../../utils/formats'
import ProgressBar from '../../ProgressBar/ProgressBar'
import Text from '../../Text/Text'
import {GOALS_IMAGES} from '../goals'

const styles = StyleSheet.create({
  touchable: {
    width: 144,
    height: 156,
    borderRadius: 4,
    backgroundColor: '#fff',
    borderColor: '#dae1e6',
    borderWidth: StyleSheet.hairlineWidth,
    marginLeft: 8,
  },
  completed: {
    borderTopWidth: 4,
    borderTopColor: '#fd4344',
  },
  container: {
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  imageWrap: {
    width: 40,
    height: 40,
    marginLeft: 18,
    marginTop: -18,
    marginBottom: 8,
  },
  image: {
    ...Platform.select({ios: {backgroundColor: '#fff'}}),
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: '#83919b',
    marginBottom: 8,
  },
  amountText: {
    color: '#081c2b',
    fontWeight: '700',
  },
})

interface UIGoalItemProps {
  goal: {
    name: string
    personality: string
    amount: number
    targetAmount: number
    completed: boolean
  }
  onPress: () => void
}

const UIGoalItem = ({goal, onPress}: UIGoalItemProps) => {
  return (
    <TouchableHighlight
      style={[styles.touchable, goal.completed && styles.completed]}
      underlayColor="#dae1e6"
      onPress={onPress}
      testID={`goalList.item.${goal.name.replace(' ', '')}`}
    >
      <View style={styles.container}>
        <ProgressBar value={goal.amount} total={goal.targetAmount} />
        <View style={styles.imageWrap}>
          <Image
            resizeMethod="resize"
            style={styles.image}
            source={
              GOALS_IMAGES[goal.personality] || GOALS_IMAGES.car // fallback as personality is string
            }
            resizeMode="contain"
          />
        </View>
        <Text variant="body" style={styles.titleText} numberOfLines={1}>
          {goal.name}
        </Text>
        <Text variant="headline" style={styles.amountText} numberOfLines={1}>
          {formatMessage('common', 'amount', {amount: goal.amount})}
        </Text>
      </View>
    </TouchableHighlight>
  )
}

export default UIGoalItem
