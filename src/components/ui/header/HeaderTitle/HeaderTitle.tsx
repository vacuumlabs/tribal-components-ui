import {Text} from '@components/ui'
import React from 'react'
import {Animated, StyleSheet, TextProps} from 'react-native'

const styles = StyleSheet.create({
  text: {
    fontWeight: '700',
    color: '#081c2b',
    lineHeight: 20,
  },
})

const AnimatedText = Animated.createAnimatedComponent(Text)

const HeaderTitle = ({style, ...restProps}: TextProps) => (
  <AnimatedText variant="headline" style={[styles.text, style]} {...restProps} />
)

export default HeaderTitle
