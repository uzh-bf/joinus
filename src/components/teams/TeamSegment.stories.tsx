import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as TeamSegment, Props } from './TeamSegment'

export default {
  title: 'Segments/Teams',
  component: TeamSegment,
} as Meta

const Template: Story<Props> = (args) => <TeamSegment {...args} />

export const Default = Template.bind({})
