import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { default as DepartmentSegment, Props } from './DepartmentSegment'

export default {
  title: 'Segments/Department',
  component: DepartmentSegment,
} as Meta

const Template: Story<Props> = (args) => <DepartmentSegment {...args} />

export const Default = Template.bind({})
