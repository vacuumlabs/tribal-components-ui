import {LoadingView} from '@components/ui'
import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'

storiesOf('LoadingView', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => <LoadingView title={text('title', 'Loading...')} />)
