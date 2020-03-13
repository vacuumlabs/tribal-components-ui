import {action} from '@storybook/addon-actions'
import {color, select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Link from './Link'

storiesOf('Link', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Link
      onPress={action('onPress')}
      title={text('title', 'Link')}
      icon={select('icon', {none: undefined, copy: 'copy'}, undefined)}
      color={color('color', '#83919b')}
    />
  ))
