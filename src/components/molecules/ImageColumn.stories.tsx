import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ImageColumn from './ImageColumn';

export default {
  title: 'components/molecules/ImageColumn',
  component: ImageColumn,
} as ComponentMeta<typeof ImageColumn>;

const Template: ComponentStory<typeof ImageColumn> = (args: any) => {
  return <ImageColumn {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  imagePath: '/sylvain-min-gimp.webp',
};
