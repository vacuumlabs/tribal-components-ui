export const getTextWithLinksRegex = (innerGroups: boolean) =>
  new RegExp(
    /(\[\[text\]\]\(url\))/.source
      .replace('text', innerGroups ? '(?<text>.*?)' : '.*?')
      .replace('url', innerGroups ? '(?<url>.*?)' : '.*?'),
  )
