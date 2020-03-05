import {Carousel} from '@components/ui'
import {storiesOf} from '@storybook/react-native'
import React from 'react'
import {View} from 'react-native'

storiesOf('Carousel', module).add('basic', () => (
  <View>
    <Carousel
      data={[
        {
          src: require('@assets/images/onboarding/img_onb_carousel_01.png'),
          title: 'Title text 1',
          body: 'Body text 1',
        },
        {
          src: require('@assets/images/onboarding/img_all_done.png'),
          title: 'Title text 2',
          body: 'Body text 2',
        },
      ]}
    />
  </View>
))
