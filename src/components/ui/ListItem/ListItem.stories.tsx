import {storiesOf} from '@storybook/react-native'
import React from 'react'
import Avatar from '../Avatar/Avatar'
import ListItem from './ListItem'

storiesOf('ListItem', module)
  .add('ATM Withdrawal', () => (
    <ListItem
      avatarComponent={<Avatar icon="card" sign="minus" />}
      title="ATM Withdrawal"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Card payment', () => (
    <ListItem
      avatarComponent={<Avatar icon="card" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Debit payment (IBAN)', () => (
    <ListItem
      avatarComponent={<Avatar icon="human" sign="minus" />}
      title="SK11 8671 5282 7556 2765 9999"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Credit payment (Contact)', () => (
    <ListItem
      avatarComponent={<Avatar initials="BW" sign="plus" />}
      title="Bruce Wayne"
      description="15:27"
      value="20.00€"
    />
  ))
  .add('Recurrent payment', () => (
    <ListItem
      avatarComponent={<Avatar icon="recurrent" sign="minus" />}
      title="Bruce Banner"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Transaction to goal', () => (
    <ListItem
      avatarComponent={<Avatar icon="save" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Recurrent transaction to goal', () => (
    <ListItem
      avatarComponent={<Avatar icon="recurrent" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
    />
  ))
  .add('Reported transaction', () => (
    <ListItem
      avatarComponent={<Avatar icon="recurrent" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
      badgeLabel="Reported"
      badgeVariant="danger"
    />
  ))
  .add('Transaction status before declined or executed', () => (
    <ListItem
      avatarComponent={<Avatar icon="recurrent" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
      badgeLabel="Processing"
      badgeVariant="secondary"
    />
  ))
  .add('Declined transaction', () => (
    <ListItem
      avatarComponent={<Avatar icon="recurrent" sign="minus" />}
      title="Card payment"
      description="15:27"
      value="-50.00€"
      badgeLabel="Declined"
      badgeVariant="danger"
    />
  ))
  .add('Transaction detail row', () => (
    <ListItem
      avatarComponent={<Avatar icon="calendar" />}
      title="Date"
      description="Feb 20, 2020"
      reverseLines
    />
  ))
