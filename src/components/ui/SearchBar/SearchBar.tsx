import React, {ReactElement} from 'react'
import {StyleSheet, View} from 'react-native'
import {formatMessage} from '../../../utils/formats'
import InputField from '../InputField/InputField'

const styles = StyleSheet.create({
  container: {
    height: 64,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: 1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'rgba(11, 44, 70, 0.1)',
    shadowOpacity: 1,
    elevation: 5,
  },
  textInputWrapper: {
    paddingHorizontal: 16,
    flex: 1,
  },
})

interface SearchBarProps {
  value: string
  onChangeText: (value: string) => void
  cancelComponent: ReactElement
}

const SearchBar = ({value, onChangeText, cancelComponent}: SearchBarProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <InputField
          variant="search"
          placeholder={formatMessage('searchBar', 'placeholder')}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
      {cancelComponent}
    </View>
  )
}

export default SearchBar
