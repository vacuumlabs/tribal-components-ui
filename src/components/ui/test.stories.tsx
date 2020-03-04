import React from 'react'
import {Button} from 'react-native'

import {storiesOf} from '@storybook/react-native'
import {action} from '@storybook/addon-actions'

storiesOf('Button', module)
  .add('with text', () => <Button onPress={action('clicked-text')} title="Hello Button" />)
  .add('with some emoji', () => <Button onPress={action('clicked-emoji')} title="😀 😎 👍 💯" />)
