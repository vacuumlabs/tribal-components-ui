import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import LoadingView from './LoadingView'

storiesOf('LoadingView', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => <LoadingView title={text('title', 'Loading...')} />)
