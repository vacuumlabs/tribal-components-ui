export let formatMessage = (group: string, key: string, values?: object) => {
  return `${group}-${key}-${JSON.stringify(values)}`
}

export let getInset = (key: 'top' | 'right' | 'bottom' | 'left', isLandscape?: boolean) => {
  // not used
  key
  isLandscape
  return 0
}

export let onErrorView = (error?: Error, errorMessage?: string) => {
  // not used
  error
  errorMessage
}

export const tribalComponentsUIInit = (
  _formatMessage: (group: any, key: any, values?: any) => string,
  _getInset: (key: 'top' | 'right' | 'bottom' | 'left', isLandscape?: boolean) => number,
  _onErrorView: (error?: Error, errorMessage?: string) => void,
) => {
  formatMessage = _formatMessage
  getInset = _getInset
  onErrorView = _onErrorView
}

export const getTextWithLinksRegex = (innerGroups: boolean) =>
  new RegExp(
    /(\[\[text\]\]\(url\))/.source
      .replace('text', innerGroups ? '(?<text>.*?)' : '.*?')
      .replace('url', innerGroups ? '(?<url>.*?)' : '.*?'),
  )
