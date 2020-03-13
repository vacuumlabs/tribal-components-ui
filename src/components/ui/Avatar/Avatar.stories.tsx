import {color, select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Avatar from './Avatar'

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('icon', () => (
    <Avatar
      icon={select('icon', ['human', 'lock', 'email'], 'human')}
      sign={select('sign', {none: undefined, plus: 'plus', minus: 'minus'}, undefined)}
      backgroundColor={color('backgroundColor', '#f5f5f5')}
      iconColor={color('iconColor', '#015397')}
    />
  ))
  .add('initials', () => <Avatar initials={text('initials', 'JS')} />)
  .add('image', () => <Avatar image={require('@assets/images/bertie.jpg')} />)
