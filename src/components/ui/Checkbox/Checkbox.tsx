import React from 'react'
import {StyleSheet, TouchableHighlight, View} from 'react-native'
import Icon from '../Icon/Icon'
import Text from '../Text/Text'
import TextWithLinks from '../TextWithLinks/TextWithLinks'

const styles = StyleSheet.create({
  checkView: {
    borderWidth: 1,
    width: 22,
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 2,
  },
  checkedView: {
    borderColor: '#fd4344',
    backgroundColor: '#fd4344',
  },
  uncheckedView: {
    borderColor: '#dae1e6',
  },
  checkRow: {
    flexDirection: 'row',
  },
  checkIcon: {
    width: 10,
    alignSelf: 'center',
  },
  text: {
    paddingLeft: 24,
    flex: 1,
    lineHeight: 20,
    top: -5,
  },
})

interface CheckboxProps {
  value: boolean
  onChange: (value: boolean) => void
  text: string
  textWithLinks: string
  testID?: string
}

const Checkbox = ({
  value,
  onChange,
  text,
  textWithLinks,
  testID,
}: RequireOnlyOne<CheckboxProps, 'text' | 'textWithLinks'>) => {
  return (
    <TouchableHighlight
      onPress={() => onChange(!value)}
      underlayColor="transparent"
      testID={testID}
    >
      <View style={styles.checkRow}>
        {value ? (
          <View style={[styles.checkView, styles.checkedView]}>
            <Icon name="check" color="#fff" style={styles.checkIcon} />
          </View>
        ) : (
          <View style={[styles.checkView, styles.uncheckedView]} />
        )}
        {!!text && <Text style={styles.text}>{text}</Text>}
        {!!textWithLinks && <TextWithLinks style={styles.text} text={textWithLinks} />}
      </View>
    </TouchableHighlight>
  )
}

export default Checkbox
