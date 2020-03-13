import React from 'react'
import {Platform, StyleSheet} from 'react-native'
import Icon from '../../Icon/Icon'

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
    ...Platform.select({
      ios: {
        marginLeft: 16,
      },
    }),
  },
})

const HeaderBackImage = () => <Icon name="arrow-back" color="#081c2b" style={styles.icon} />

export default HeaderBackImage
