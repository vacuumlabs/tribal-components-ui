import React from 'react'
import {Image, ImageStyle} from 'react-native'

const ICONS = {
  amazon: require('@assets/icons/amazon.png'),
  activate: require('@assets/icons/activate.png'),
  'add-circle': require('@assets/icons/add-circle.png'),
  add: require('@assets/icons/add.png'),
  'arrow-back': require('@assets/icons/arrow-back.png'),
  calendar: require('@assets/icons/calendar.png'),
  card: require('@assets/icons/card.png'),
  'card-close': require('@assets/icons/card-close.png'),
  cart: require('@assets/icons/cart.png'),
  check: require('@assets/icons/check.png'),
  'chevron-down': require('@assets/icons/chevron-down.png'),
  'chevron-right': require('@assets/icons/chevron-right.png'),
  'chevron-up': require('@assets/icons/chevron-up.png'),
  copy: require('@assets/icons/copy.png'),
  delete: require('@assets/icons/delete.png'),
  edit: require('@assets/icons/edit.png'),
  email: require('@assets/icons/email.png'),
  extend: require('@assets/icons/extend.png'),
  food: require('@assets/icons/food.png'),
  freeze: require('@assets/icons/freeze.png'),
  house: require('@assets/icons/house.png'),
  'human-add': require('@assets/icons/human-add.png'),
  human: require('@assets/icons/human.png'),
  incoming: require('@assets/icons/incoming.png'),
  info: require('@assets/icons/info.png'),
  lock: require('@assets/icons/lock.png'),
  notification: require('@assets/icons/notification.png'),
  online: require('@assets/icons/online.png'),
  pc: require('@assets/icons/pc.png'),
  phone: require('@assets/icons/phone.png'),
  recurrent: require('@assets/icons/recurrent.png'),
  'remove-circle': require('@assets/icons/remove-circle.png'),
  repeat: require('@assets/icons/repeat.png'),
  reply: require('@assets/icons/reply.png'),
  report: require('@assets/icons/report.png'),
  salary: require('@assets/icons/salary.png'),
  save: require('@assets/icons/save.png'),
  savings: require('@assets/icons/savings.png'),
  search: require('@assets/icons/search.png'),
  send: require('@assets/icons/send.png'),
  sport: require('@assets/icons/sport.png'),
  tickets: require('@assets/icons/tickets.png'),
  touchId: require('@assets/icons/touchId.png'),
  warning: require('@assets/icons/warning.png'),
  withdrawal: require('@assets/icons/withdrawal.png'),
}

export type IconName = keyof typeof ICONS

interface IconProp {
  name: IconName
  color?: string
  style?: ImageStyle
}

const Icon = ({name, color, style}: IconProp) => {
  return <Image source={ICONS[name]} style={[{tintColor: color}, style]} />
}

export default Icon
