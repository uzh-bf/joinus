import React from 'react'
import { Story, Meta } from '@storybook/react/types-6-0'

import BurgerMenu from './BurgerMenu'

export default {
  title: 'common/BurgerMenu',
  component: BurgerMenu,
} as Meta

const Template: Story<void> = (args) => <BurgerMenu />

export const Default = Template.bind({})
