import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import ErrorView from './ErrorView'

storiesOf('ErrorView', module).add('basic', () => (
  <ErrorView errorMessage="Sample error message" action={action('action')} />
))
