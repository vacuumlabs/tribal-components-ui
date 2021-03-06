import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import ListButton from './ListButton'

storiesOf('ListButton', module).add('basic', () => (
  <ListButton icon="chevron-right" title="List Button Title" onPress={action('onPress')} />
))
