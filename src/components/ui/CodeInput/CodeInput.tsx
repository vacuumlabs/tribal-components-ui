import {Text} from '@components/ui'
import React, {useRef} from 'react'
import {
  KeyboardType,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableWithoutFeedback,
  View,
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 28,
  },
  textInput: {
    marginBottom: 24,
    ...StyleSheet.absoluteFillObject,
    opacity: 0.01,
    // By clicking the cursor was always placed at the end of TextInput
    fontSize: 1,
  },
  digit: {
    height: 40,
    maxWidth: 56,
    flex: 1,
    borderBottomColor: '#dae1e6',
    borderBottomWidth: 1,
    marginBottom: 24,
  },
  digitText: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
  },
})

interface UICodeInputProps {
  onChangeText: (value: string) => void
  inputLength: number
  digits: string[]
  keyboardType: KeyboardType
  value: string
  onSubmitEditing: TextInputProps['onSubmitEditing']
}

const UICodeInput = ({
  onChangeText,
  inputLength,
  digits,
  keyboardType,
  value,
  onSubmitEditing,
}: UICodeInputProps) => {
  const textInput: any = useRef(null)
  return (
    <TouchableWithoutFeedback onPress={() => textInput.current.focus()}>
      <View style={styles.container}>
        <TextInput
          autoFocus
          ref={textInput}
          style={styles.textInput}
          keyboardType={keyboardType}
          maxLength={inputLength}
          onChangeText={onChangeText}
          value={value}
          onSubmitEditing={onSubmitEditing}
        />
        {digits.map((digit, index) => (
          <View
            key={index}
            style={[
              styles.digit,
              {
                marginRight: inputLength === 6 && index === 2 ? 16 : 8,
                marginLeft: inputLength === 6 && index === 3 ? 16 : 8,
              },
            ]}
          >
            <Text style={styles.digitText}>{digit}</Text>
          </View>
        ))}
      </View>
    </TouchableWithoutFeedback>
  )
}

interface CodeInputProps {
  onChangeText: (value: string) => void
  value: string
  inputLength: number
  secureEntry?: boolean
  allowAlphabet?: boolean
  onSubmitEditing?: TextInputProps['onSubmitEditing']
}

const CodeInput = ({
  onChangeText,
  value,
  inputLength,
  secureEntry,
  allowAlphabet,
  onSubmitEditing,
}: CodeInputProps) => {
  return (
    <UICodeInput
      value={value}
      onChangeText={onChangeText}
      digits={value
        .padEnd(inputLength, ' ')
        .split('')
        .map((digit) => (secureEntry ? (digit === ' ' ? ' ' : '•') : digit))}
      inputLength={inputLength}
      keyboardType={allowAlphabet ? 'default' : 'numeric'}
      onSubmitEditing={onSubmitEditing}
    />
  )
}

export default CodeInput
