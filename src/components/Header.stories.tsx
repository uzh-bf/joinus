import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Header from './Header'

export default {
  title: 'common/Header',
  component: Header,
} as Meta

const Template: Story<void> = (args) => <Header />

export const Default = Template.bind({})
