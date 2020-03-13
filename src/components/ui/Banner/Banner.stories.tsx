import {text, withKnobs} from '@storybook/addon-knobs'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Banner from './Banner'

storiesOf('Banner', module)
  .addDecorator(withKnobs)
  .add('with knobs', () => (
    <Banner
      title={text('title', 'title')}
      secondaryTitle={text('secondaryTitle', 'secondary title')}
      imgSrc={require('../../../../assets/images/next-match.png')}
    />
  ))
