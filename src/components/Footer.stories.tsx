import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import Footer from './Footer'

export default {
  title: 'common/Footer',
  component: Footer,
} as Meta

const Template: Story<void> = (args) => <Footer />

export const Default = Template.bind({})
