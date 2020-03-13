import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Button from '../Button/Button'
import ButtonGroup from './ButtonGroup'

storiesOf('ButtonGroup', module)
  .add('horizontal', () => (
    <ButtonGroup>
      <Button onPress={action('onPress 1')} title="Button 1" variant="primary" />
      <Button onPress={action('onPress 2')} title="Button 2" variant="primary" />
      <Button onPress={action('onPress 3')} title="Button 3" variant="primary" />
    </ButtonGroup>
  ))
  .add('vertical', () => (
    <ButtonGroup vertical>
      <Button onPress={action('onPress 1')} title="Button 1" variant="primary" />
      <Button onPress={action('onPress 2')} title="Button 2" variant="primary" />
      <Button onPress={action('onPress 3')} title="Button 3" variant="primary" />
    </ButtonGroup>
  ))
