interface Formatters {
  amount: (amount: number, currency: string) => string
  date: (date: Date, options: Intl.DateTimeFormatOptions) => string
}
