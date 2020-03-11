import {Button, ErrorView, Text} from '@components/ui'
import TransactionSectionHeader from '@components/ui/transactions/TransactionSectionHeader/TransactionSectionHeader'
import {formatMessage} from '@utils/formats'
import LottieView from 'lottie-react-native'
import React, {ReactElement, useEffect, useRef, useState} from 'react'
import {
  ActivityIndicator,
  Animated,
  Dimensions,
  Easing,
  Platform,
  SectionList,
  StyleSheet,
} from 'react-native'

const styles = StyleSheet.create({
  sectionList: {
    flex: 1,
  },
  emptyText: {
    color: '#081c2b',
    padding: 40,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contentContainer: {
    paddingBottom: 20,
    flexGrow: 1,
  },
  errorFooter: {
    textAlign: 'center',
  },
  backButtonContainer: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: -100,
    width: 164,
  },
  backButton: {
    shadowRadius: 3,
    shadowOffset: {width: 0, height: 2},
    shadowColor: 'rgba(0,0,0, .7)',
    shadowOpacity: 1,
    elevation: 3,
  },
  backButtonText: {
    fontWeight: 'bold',
  },
})

interface FormattedUITransactionListSection<Transaction> {
  date: string
  key: string
  amount: {
    positive: number
    negative: number
  }
  data: Transaction[]
}

interface UITransactionListProps<Transaction> {
  ListHeaderComponent?: ReactElement
  transactions: FormattedUITransactionListSection<Transaction>[]
  emptyMessage?: string
  onEndReached?: () => void
  fetchingMore: boolean
  renderItem: ({item, index}: {item: Transaction; index: number}) => ReactElement
  refetch: (variables?: any) => Promise<any>
  loading: boolean
  errorFooter?: string
  error?: Error
}

const UITransactionList = <Transaction extends {id: string}>({
  ListHeaderComponent,
  transactions,
  emptyMessage,
  onEndReached,
  fetchingMore,
  renderItem,
  refetch,
  loading,
  errorFooter,
  error,
}: UITransactionListProps<Transaction>) => {
  const [showBackButton, setShowBackButton] = useState(false)
  const backButtonPosition = useRef(new Animated.Value(0)).current
  const backButtonBottomOffset = Platform.OS === 'ios' ? -148 : -118
  const scrolledToShowBackButton = 200
  const listRef: any = useRef()

  const animateBackButton = backButtonPosition.interpolate({
    inputRange: [0, 1],
    outputRange: [0, backButtonBottomOffset],
  })

  useEffect(() => {
    Animated.timing(backButtonPosition, {
      toValue: showBackButton ? 1 : 0,
      duration: 1000,
      easing: Easing.bezier(0.64, 0.04, 0.35, 1),
    }).start()
  }, [showBackButton, backButtonPosition])

  const handleScrollToTop = () => {
    listRef.current.scrollToLocation({
      itemIndex: 0,
      sectionIndex: 0,
      viewPosition: 1,
    })
  }

  return (
    <>
      <SectionList
        scrollEventThrottle={16}
        ListHeaderComponent={ListHeaderComponent}
        ListFooterComponent={
          fetchingMore ? (
            <ActivityIndicator />
          ) : errorFooter ? (
            <Text variant="error" style={styles.errorFooter}>
              {errorFooter}
            </Text>
          ) : null
        }
        ListEmptyComponent={
          loading ? (
            <LottieView
              source={require('@assets/lottie/transactions.json')}
              autoPlay
              loop
              style={{width: Dimensions.get('window').width}}
              speed={1}
            />
          ) : error ? (
            <ErrorView error={error} action={refetch} />
          ) : (
            <Text variant="body" style={styles.emptyText}>
              {emptyMessage || formatMessage('transactionsList', 'noTransactionsText')}
            </Text>
          )
        }
        style={styles.sectionList}
        sections={transactions}
        keyExtractor={(transaction) => transaction.id}
        contentContainerStyle={styles.contentContainer}
        onScroll={(e) => {
          setShowBackButton(e.nativeEvent.contentOffset.y > scrolledToShowBackButton)
        }}
        onEndReached={onEndReached}
        renderSectionHeader={({section: {date, amount}}) => (
          <TransactionSectionHeader
            title={formatMessage('transactionsList', 'sectionTitle', {
              date: new Date(date),
            })}
            amount={amount}
          />
        )}
        renderItem={renderItem}
        ref={listRef}
      />
      <Animated.View
        style={[styles.backButtonContainer, {transform: [{translateY: animateBackButton}]}]}
      >
        <Button
          size="large"
          isFullWidth={false}
          onPress={handleScrollToTop}
          title={formatMessage('transactionsList', 'backToTopButton')}
          variant="filled"
          style={styles.backButton}
          titleStyle={styles.backButtonText}
        />
      </Animated.View>
    </>
  )
}

export default UITransactionList
