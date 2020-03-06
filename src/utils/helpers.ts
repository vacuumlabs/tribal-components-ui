import * as Font from 'expo-font'

export const init = async () => {
  await Font.loadAsync({
    'Lato-Black': require('@assets/fonts/Lato-Black.ttf'),
    'Lato-BlackItalic': require('@assets/fonts/Lato-BlackItalic.ttf'),
    'Lato-Bold': require('@assets/fonts/Lato-Bold.ttf'),
    'Lato-BoldItalic': require('@assets/fonts/Lato-BoldItalic.ttf'),
    'Lato-Hairline': require('@assets/fonts/Lato-Hairline.ttf'),
    'Lato-HairlineItalic': require('@assets/fonts/Lato-HairlineItalic.ttf'),
    'Lato-Heavy': require('@assets/fonts/Lato-Heavy.ttf'),
    'Lato-HeavyItalic': require('@assets/fonts/Lato-HeavyItalic.ttf'),
    'Lato-Italic': require('@assets/fonts/Lato-Italic.ttf'),
    'Lato-Light': require('@assets/fonts/Lato-Light.ttf'),
    'Lato-LightItalic': require('@assets/fonts/Lato-LightItalic.ttf'),
    'Lato-Medium': require('@assets/fonts/Lato-Medium.ttf'),
    'Lato-MediumItalic': require('@assets/fonts/Lato-MediumItalic.ttf'),
    'Lato-Regular': require('@assets/fonts/Lato-Regular.ttf'),
    'Lato-Semibold': require('@assets/fonts/Lato-Semibold.ttf'),
    'Lato-SemiboldItalic': require('@assets/fonts/Lato-SemiboldItalic.ttf'),
    'Lato-Thin': require('@assets/fonts/Lato-Thin.ttf'),
    'Lato-ThinItalic': require('@assets/fonts/Lato-ThinItalic.ttf'),
    'PxGrotesk-Bold': require('@assets/fonts/PxGrotesk-Bold.otf'),
    'PxGrotesk-Light': require('@assets/fonts/PxGrotesk-Light.otf'),
    'PxGrotesk-Regular': require('@assets/fonts/PxGrotesk-Regular.otf'),
  })
}

export const getTextWithLinksRegex = (innerGroups: boolean) =>
  new RegExp(
    /(\[\[text\]\]\(url\))/.source
      .replace('text', innerGroups ? '(?<text>.*?)' : '.*?')
      .replace('url', innerGroups ? '(?<url>.*?)' : '.*?'),
  )
