import {GOALS_IMAGES} from '@components/ui/goals/goals'
import UIGoalPersonalityItem from '@components/ui/goals/UIGoalPersonalityItem/UIGoalPersonalityItem'
import React from 'react'
import {FlatList} from 'react-native'

interface UIGoalPersonalityListProps {
  onPress: (personality: string) => void
}

const UIGoalPersonalityList = ({onPress}: UIGoalPersonalityListProps) => {
  return (
    <FlatList
      data={Object.keys(GOALS_IMAGES)}
      keyExtractor={(personality) => personality}
      renderItem={({item: personality}) => (
        <UIGoalPersonalityItem personality={personality} onPress={() => onPress(personality)} />
      )}
      numColumns={3}
    />
  )
}

export default UIGoalPersonalityList
