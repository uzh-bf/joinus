import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import Footer from './Footer'

export default {
  title: 'common/Footer',
  component: Footer,
} as Meta

const Template: Story<void> = (args) => <Footer />

export const Default = Template.bind({})
