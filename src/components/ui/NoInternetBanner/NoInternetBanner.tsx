import {Icon, Text} from '@components/ui'
import {formatMessage} from '@utils/formats'
import React from 'react'
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native'

const styles = StyleSheet.create({
  banner: {
    justifyContent: 'center',
    shadowRadius: 5,
    shadowColor: 'rgba(11, 44, 70, 0.1)',
    shadowOpacity: 1,
    elevation: 5,
    shadowOffset: {width: 0, height: 5},
    backgroundColor: 'white',
  },
  container: {
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#dae1e6',
    borderTopColor: '#fd4344',
    borderTopWidth: 4,
    borderRadius: 4,
    marginHorizontal: 16,
    marginVertical: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  error: {
    marginLeft: 20,
    flex: 1,
    fontSize: 13,
    textAlign: 'left',
  },
})

interface NoInternetBannerProps {
  style?: StyleProp<ViewStyle>
}

const NoInternetBanner = ({style}: NoInternetBannerProps) => {
  return (
    <View style={[styles.banner, style]}>
      <View style={styles.container}>
        <Icon name="warning" />
        <Text variant="error" style={styles.error}>
          {formatMessage('noInternetBanner', 'text')}
        </Text>
      </View>
    </View>
  )
}

export default NoInternetBanner
