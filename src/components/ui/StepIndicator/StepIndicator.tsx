import React from 'react'
import {StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 4,
  },
  filled: {
    backgroundColor: '#015397',
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
})

interface StepIndicatorProps {
  stages: number
  currentStage: number
}

const StepIndicator = ({stages, currentStage}: StepIndicatorProps) => {
  const filled = currentStage / stages
  const empty = (stages - currentStage) / stages

  return (
    <View style={styles.container}>
      <View style={[styles.filled, {flex: filled}]} />
      <View style={{flex: empty}} />
    </View>
  )
}

export default StepIndicator
