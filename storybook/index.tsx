import {getStorybookUI, configure} from '@storybook/react-native'
import './rn-addons'

// import stories
configure(() => {
  require('./stories/index')
}, module)

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage: require('react-native').AsyncStorage,
})

export default StorybookUIRoot
