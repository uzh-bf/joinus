import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import { default as ProjectSegment, Props } from './ProjectSegment'

export default {
  title: 'Segments/Projects',
  component: ProjectSegment,
} as Meta

const Template: Story<Props> = (args) => <ProjectSegment {...args} />

export const Default = Template.bind({})
