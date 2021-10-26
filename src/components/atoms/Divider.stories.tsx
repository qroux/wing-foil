import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Divider from './Divider';

export default {
  title: 'components/atoms/Divider',
  component: Divider,
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args: any) => {
  return <Divider {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
