import {formatMessage} from '@utils/formats'
import React from 'react'
import {ActivityIndicator, StyleSheet, View} from 'react-native'
import Button from '../../Button/Button'
import Text from '../../Text/Text'

const styles = StyleSheet.create({
  status: {
    marginTop: 8,
    marginBottom: 24,
  },
  statusText: {
    textAlign: 'center',
  },
})

interface UICheckIdentificationProps {
  statusLoading: boolean
  statusText: string | null
  handleCheckIdentification: () => any
}

const UICheckIdentification = ({
  statusLoading,
  statusText,
  handleCheckIdentification,
}: UICheckIdentificationProps) => (
  <>
    <View style={styles.status}>
      {statusLoading ? (
        <ActivityIndicator size="large" />
      ) : (
        statusText && (
          <Text variant="error" style={styles.statusText}>
            {statusText}
          </Text>
        )
      )}
    </View>
    <Button
      title={formatMessage('identification', 'checkButton')}
      onPress={handleCheckIdentification}
      size="large"
    />
  </>
)

export default UICheckIdentification
