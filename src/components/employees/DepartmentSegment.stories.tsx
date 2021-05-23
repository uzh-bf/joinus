import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as DepartmentSegment, Props } from './DepartmentSegment'

export default {
  title: 'Segments/Department',
  component: DepartmentSegment,
} as Meta

const Template: Story<Props> = (args) => <DepartmentSegment {...args} />

export const Default = Template.bind({})
