import {action} from '@storybook/addon-actions'
import {boolean, select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Button from './Button'

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Button
      onPress={action('onPress')}
      title={text('title', 'Continue')}
      variant={select('variant', ['primary', 'secondary', 'tertiary', 'primary-submit'], 'primary')}
      size={select('size', ['small', 'medium', 'large'], 'medium')}
      disabled={boolean('disabled', false)}
      loading={boolean('loading', false)}
    />
  ))
  .add('all variants', () => (
    <>
      <Button
        onPress={action('onPress')}
        title={text('title', 'Continue')}
        variant="primary"
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        disabled={boolean('disabled', false)}
      />
      <Button
        onPress={action('onPress')}
        title={text('title', 'Continue')}
        variant="primary-submit"
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        disabled={boolean('disabled', false)}
      />
      <Button
        onPress={action('onPress')}
        title={text('title', 'Continue')}
        variant="secondary"
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        disabled={boolean('disabled', false)}
      />
      <Button
        onPress={action('onPress')}
        title={text('title', 'Continue')}
        variant="tertiary"
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        disabled={boolean('disabled', false)}
      />
      <Button
        onPress={action('onPress')}
        title={text('title', 'Continue')}
        variant="primary"
        size={select('size', ['small', 'medium', 'large'], 'medium')}
        loading={boolean('loading', true)}
      />
    </>
  ))
