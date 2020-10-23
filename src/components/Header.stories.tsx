import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Header from './Header'

export default {
  title: 'common/Header',
  component: Header,
} as Meta

const Template: Story<void> = (args) => <Header />

export const Default = Template.bind({})
