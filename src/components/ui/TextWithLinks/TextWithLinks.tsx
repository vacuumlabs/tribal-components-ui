import {Text} from '@components/ui'
import {getTextWithLinksRegex} from '@utils/helpers'
import React from 'react'
import {Linking, StyleSheet, TextProps} from 'react-native'

const styles = StyleSheet.create({
  link: {
    textDecorationLine: 'underline',
    color: '#fd4344',
  },
})

interface TextWithLinksProps {
  text: string
  style?: TextProps['style']
}

const TextWithLinks = ({text, style}: TextWithLinksProps) => {
  return (
    <Text variant="body" style={style}>
      {text.split(getTextWithLinksRegex(false)).map((part) => {
        if (part.match(getTextWithLinksRegex(false))) {
          const {groups} = part.match(getTextWithLinksRegex(true))!
          return (
            <Text
              key={groups!.url}
              style={styles.link}
              onPress={() => Linking.openURL(groups!.url)}
            >
              {groups!.text}
            </Text>
          )
        }
        return part
      })}
    </Text>
  )
}

export default TextWithLinks