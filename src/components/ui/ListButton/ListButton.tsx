import {Icon, IconName, Text} from '@components/ui'
import React from 'react'
import {StyleSheet, TouchableHighlight, View} from 'react-native'

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  container: {
    height: 42,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 12,
  },
  titleText: {
    color: '#000',
    fontSize: 14,
    lineHeight: 24,
  },
})

interface ListButtonProps {
  onPress: () => void
  icon?: IconName
  title: string
}

const ListButton = ({onPress, icon, title}: ListButtonProps) => {
  return (
    <TouchableHighlight onPress={onPress} underlayColor="#dae1e6" style={styles.touchable}>
      <View style={styles.container}>
        <Text style={styles.titleText}>{title}</Text>
        {!!icon && <Icon name={icon} />}
      </View>
    </TouchableHighlight>
  )
}

export default ListButton
