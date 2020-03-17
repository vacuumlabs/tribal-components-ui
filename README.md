# Tribal Components UI

## See components in action

Run

```sh
yarn storybook # mobile only
# or
yarn storybook-web # mobile + browser
```

It will start storybook on mobile (through Expo app) or in browser.

## Use components in your project

todo...

**!!! Important:**

Currently you have to install (and link) all native packages into your project on your own.

### Dev note

Goal is to install native packages automatically, which also ensures that same version of package is used. BUT issues are:

- `lottie-react-native`
  - ```
    Invariant Violation: Tried to register two views with the same name LottieAnimationView
    ```
  - possibly use same version as in this project, but then https://github.com/expo/expo/issues/4835#issuecomment-508932818
- `@react-native-community/netinfo`
  - ```
    RNCNetInfo.getCurrentState got 2 arguments, expected 3
    ```
  - with higher version, same error happens in this project
- `react-native-svg`
  - seems ok
- `expo-linear-gradient`
  - seems ok

Also is ios working?

## Additionally installed react-native packages

- Native packages (installed through `expo install`, which specifies version supported by Expo)
  - Original packages
    - `lottie-react-native`
    - `@react-native-community/netinfo`
    - `react-native-svg`
  - Expo packages
    - `expo-linear-gradient`
- Non-native packages (installed through `yarn add`)
  - `react-native-snap-carousel` (and `@types/react-native-snap-carousel`)
  - `rmc-date-picker`
