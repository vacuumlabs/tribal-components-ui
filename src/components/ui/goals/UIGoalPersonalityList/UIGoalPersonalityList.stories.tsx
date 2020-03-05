import {UIGoalPersonalityList} from '@components/ui/goals'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('UIGoalPersonalityList', module).add('basic', () => (
  <UIGoalPersonalityList onPress={action('onPress')} />
))
