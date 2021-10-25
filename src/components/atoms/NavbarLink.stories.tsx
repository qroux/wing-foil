import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import NavbarLink from './NavbarLink';

export default {
  title: 'components/atoms/NavbarLink',
  component: NavbarLink,
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
} as ComponentMeta<typeof NavbarLink>;

const Template: ComponentStory<typeof NavbarLink> = (args: any) => {
  return <NavbarLink {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  label: 'About',
  path: '/',
  size: 1,
};
