import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as RequirementSegment, Props } from './RequirementSegment'

export default {
  title: 'Segments/Requirements',
  component: RequirementSegment,
} as Meta

const Template: Story<Props> = (args) => <RequirementSegment {...args} />

export const Default = Template.bind({})
