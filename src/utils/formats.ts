import * as translations from './translations'

type MessagesAll = ReturnType<typeof translations.en>
type MessageGroup = keyof MessagesAll
type MessageKey<G extends MessageGroup> = keyof MessagesAll[G]

const currentLocale = 'en'

const formatters: Formatters = {
  amount: (amount, currency) => {
    return new Intl.NumberFormat(currentLocale, {
      style: 'currency',
      currency,
    }).format(amount / 100)
  },
  date: (date, options) => {
    return new Intl.DateTimeFormat(currentLocale, options).format(date)
  },
}

const messages = translations[currentLocale](formatters)

export function formatMessage<G extends MessageGroup, K extends MessageKey<G>>(
  group: G,
  key: K,
  values?: Record<string, any>,
) {
  const message = messages?.[group]?.[key]

  // check message existence
  if (!message)
    throw Error(`Not found message with locale: ${currentLocale}, group: ${group}, key: ${key}`)

  // string with values
  if (typeof message === 'function') {
    // check values existence
    if (!values)
      throw Error(
        `Message with locale: ${currentLocale}, group: ${group}, key: ${key} needs to have values`,
      )
    return message(values)
  }

  // plain string
  return message
}
