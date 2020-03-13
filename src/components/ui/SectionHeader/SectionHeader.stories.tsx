import {boolean, select, text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import SectionHeader from './SectionHeader'

storiesOf('SectionHeader', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <SectionHeader
      title={text('title', 'Section title')}
      description={text('description', 'description')}
      initials={select('initials', {none: undefined, LI: 'LI'}, undefined)}
      icon={select('icon', {none: undefined, human: 'human'}, 'human')}
      withShadow={boolean('withShadow', false)}
      sign={select('sign', {none: undefined, plus: 'plus', minus: 'minus'}, undefined)}
    />
  ))
