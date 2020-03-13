import {number, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import StepIndicator from './StepIndicator'

storiesOf('StepIndicator', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <StepIndicator stages={number('stages', 6)} currentStage={number('currentStage', 2)} />
  ))
