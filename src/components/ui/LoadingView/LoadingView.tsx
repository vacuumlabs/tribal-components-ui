import {Text} from '@components/ui'
import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    color: '#9c9c9c',
    marginTop: 16,
  },
})

type LoadingViewProps = {
  title?: string
}

const LoadingView = ({title}: LoadingViewProps) => (
  <View style={styles.container}>
    <ActivityIndicator size="large" />
    {title && <Text style={styles.title}>{title}</Text>}
  </View>
)

export default LoadingView
