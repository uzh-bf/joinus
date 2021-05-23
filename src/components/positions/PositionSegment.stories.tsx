import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as PositionSegment, Props } from './PositionSegment'

export default {
  title: 'Segments/Position',
  component: PositionSegment,
} as Meta

const Template: Story<Props> = (args) => <PositionSegment {...args} />

export const Default = Template.bind({})
