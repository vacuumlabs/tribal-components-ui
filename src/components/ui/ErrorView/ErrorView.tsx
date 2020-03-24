import React, {useEffect} from 'react'
import {StyleSheet, View} from 'react-native'
import {formatMessage} from '../../../utils/formats'
import {onErrorView} from '../../../utils/helpers'
import Button from '../Button/Button'
import Text from '../Text/Text'

const styles = StyleSheet.create({
  wrapper: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    borderWidth: 1,
    borderColor: '#dae1e6',
    borderTopColor: '#fd4344',
    borderTopWidth: 4,
    borderRadius: 4,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginHorizontal: 16,
    alignItems: 'center',
  },
  error: {
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  bodyText: {
    textAlign: 'center',
  },
  action: {
    marginTop: 20,
  },
})

interface ErrorViewProps {
  error?: Error
  errorMessage?: string
  action?: () => void | Promise<void | any>
}

const ErrorView = ({
  error,
  errorMessage,
  action,
}: RequireAtLeastOne<ErrorViewProps, 'error' | 'errorMessage'>) => {
  useEffect(() => {
    onErrorView(error, errorMessage)
  }, [error, errorMessage])

  return (
    <View style={styles.wrapper}>
      <View style={styles.container}>
        <Text variant="error" style={styles.error}>
          {errorMessage || error?.message}
        </Text>
        <Text style={styles.bodyText}>{formatMessage('errorView', 'bodyText')}</Text>
        {action && (
          <Button
            title={formatMessage('errorView', 'actionText')}
            variant="secondary"
            onPress={() => action()} // on purpose
            style={styles.action}
          />
        )}
      </View>
    </View>
  )
}

export default ErrorView
