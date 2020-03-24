export default (formatters: Formatters) => ({
  common: {
    amount: ({amount}: any) => `${formatters.amount(amount, 'EUR')}`,
    processing: 'Processing',
    close: 'Close',
  },
  card: {
    expiry: 'EXPIRY',
    orderCard: 'Order card',
    activateCard: 'Activate card',
    viewCard: 'View card',
    orderProcessing: 'Your card order is being processed.',
    errLoading: 'There was an error loading your card.',
  },
  errorView: {
    bodyText: 'Something went wrong. Please check your internet connection and try again.',
    actionText: 'Try again',
  },
  noInternetBanner: {
    text: 'It seems that you are offline. Please check your internet connection and try again.',
  },
  checkIdentification: {
    actionText: 'Check verification',
  },
  searchBar: {
    placeholder: 'Search',
  },
  transactionList: {
    noTransactionsText: 'No transactions yet.',
    sectionTitle: ({date}: any) => `${formatters.date(date, 'month=long;year=numeric')}`,
    backButton: 'Back to top',
  },
})
