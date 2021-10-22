import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import Button from './Button';

export default {
  title: 'components/atoms/Button',
  component: Button,
  argTypes: {
    label: {
      name: 'label',
      type: {
        name: 'string',
        required: true,
      },
      defaultValue: null,
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: any) => {
  return <Button {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'About',
  path: '/',
  size: 1,
};
