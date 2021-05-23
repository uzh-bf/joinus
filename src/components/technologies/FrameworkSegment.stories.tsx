import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as FrameworkSegment, Props } from './FrameworkSegment'

export default {
  title: 'Segments/Frameworks',
  component: FrameworkSegment,
} as Meta

const Template: Story<Props> = (args) => <FrameworkSegment {...args} />

export const Default = Template.bind({})
