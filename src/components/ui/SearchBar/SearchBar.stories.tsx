import {SearchBar} from '@components/ui'
import {HeaderRightButton} from '@components/ui/header'
import {action} from '@storybook/addon-actions'
import {storiesOf} from '@storybook/react-native'
import React, {useState} from 'react'

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
