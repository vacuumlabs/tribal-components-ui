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

### 1. Installation

1. Go to [releases](https://github.com/vacuumlabs/tribal-components-ui/releases).
1. Find release you want (probably latest) and copy link to download `tribal-components-ui-vx.x.x.tgz`.
1. Use link as your install argument.

### 2. Installation of native packages

Currently you have to install all native packages into your project manually.

#### Dev note

Goal is to install native packages automatically, which also ensures that same version of package is used. BUT issues are:

- ❌ `lottie-react-native`
  - ```
    Invariant Violation: Tried to register two views with the same name LottieAnimationView
    ```
  - possibly use same version as in this project, but then https://github.com/expo/expo/issues/4835#issuecomment-508932818
  - in code -> // TODO colorFilters not supported
- ❌ `@react-native-community/netinfo`
  - ```
    RNCNetInfo.getCurrentState got 2 arguments, expected 3
    ```
  - with higher version, same error happens in this project
- ✅ `react-native-svg`
  - seems ok
- ✅ `expo-linear-gradient`
  - seems ok

Also is ios working?

### 3. Initialization

In the initialization part of your project, you need to call `tribalComponentsUIInit` function and provide required parameters.

#### Dev note

- ❓ `getInset` should be defined internally (?)
- ✅ `onErrorView` seems ok to be defined externally

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
