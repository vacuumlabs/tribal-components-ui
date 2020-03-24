interface Formatters {
  amount: (amount: number, currency: string) => string
  date: (date: Date, format: string) => string
}
