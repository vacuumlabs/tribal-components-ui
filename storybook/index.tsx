import {addDecorator, configure, getStorybookUI} from '@storybook/react-native'
import React from 'react'
import {KeyboardAvoidingView, View} from 'react-native'
import './rn-addons'
import {loadStories} from './storyLoader'

// import stories
configure(loadStories, module)

// decorator for wrapping and styling whole stories
addDecorator((getStory: () => React.ReactNode, {kind}: {kind: string}) => {
  const alignItems = [
    'Avatar',
    'Badge',
    'Icon',
    'ProgressBar',
    'Switch',
    'UIGoalItem',
    'UIGoalPersonalityList',
  ].includes(kind)
    ? 'center'
    : 'stretch'
  return (
    <KeyboardAvoidingView style={{flex: 1}} contentContainerStyle={{flex: 1}} behavior="height">
      <View style={{flex: 1, justifyContent: 'center', alignItems, padding: 16}}>{getStory()}</View>
    </KeyboardAvoidingView>
  )
})

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  port: 7007,
  asyncStorage: null,
})

export default StorybookUIRoot
