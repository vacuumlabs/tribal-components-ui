import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import UIGoalPersonalityList from './UIGoalPersonalityList'

storiesOf('UIGoalPersonalityList', module).add('basic', () => (
  <UIGoalPersonalityList onPress={action('onPress')} />
))
