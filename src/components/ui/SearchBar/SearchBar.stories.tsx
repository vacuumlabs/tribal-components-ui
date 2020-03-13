import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'
import HeaderRightButton from '../header/HeaderRightButton/HeaderRightButton'
import SearchBar from './SearchBar'

interface SearchBarRendererProps {
  render: (value: string, setValue: (value: string) => void) => JSX.Element
}

const SearchBarRenderer = ({render}: SearchBarRendererProps) => {
  const [value, setValue] = useState('Search value')
  return render(value, setValue)
}

storiesOf('SearchBar', module).add('basic', () => (
  <SearchBarRenderer
    render={(value, setValue) => (
      <SearchBar
        value={value}
        onChangeText={setValue}
        cancelComponent={<HeaderRightButton onPress={action('onPress')} title="Cancel" />}
      />
    )}
  />
))
