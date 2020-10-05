import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import ProjectCard, { ProjectCardProps } from './ProjectCard';

export default {
  title: 'ProjectCard',
  component: ProjectCard,
} as Meta;

const Template: Story<ProjectCardProps> = (args) => <ProjectCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  projectTitle: "Hello World Project",
  projectDescription: "This is a project.",
  projectSubtitle: "Yes!",
  upper: false
};
