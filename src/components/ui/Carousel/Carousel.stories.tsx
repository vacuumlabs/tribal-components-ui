import {storiesOf} from '@storybook/react-native'
import React from 'react'
import {View} from 'react-native'
import Carousel from './Carousel'

storiesOf('Carousel', module).add('basic', () => (
  <View>
    <Carousel
      data={[
        {
          src: require('@assets/images/card/mastercard-logo.png'),
          title: 'Title text 1',
          body: 'Body text 1',
        },
        {
          src: require('@assets/images/card/visa-logo.png'),
          title: 'Title text 2',
          body: 'Body text 2',
        },
      ]}
    />
  </View>
))
