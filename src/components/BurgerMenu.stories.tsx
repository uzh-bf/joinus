import { Meta, Story } from '@storybook/react/types-6-0'
import React from 'react'
import BurgerMenu from './BurgerMenu'

export default {
  title: 'common/BurgerMenu',
  component: BurgerMenu,
} as Meta

const Template: Story<void> = (args) => <BurgerMenu />

export const Default = Template.bind({})
