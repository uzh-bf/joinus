import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import { default as TeamSegment, Props } from './TeamSegment'

export default {
  title: 'Segments/Teams',
  component: TeamSegment,
} as Meta

const Template: Story<Props> = (args) => <TeamSegment {...args} />

export const Default = Template.bind({})
