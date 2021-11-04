import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { cards } from '../../content/coursContent';
import PriceGrid from './PriceGrid';

export default {
  title: 'components/templates/PriceGrid',
  component: PriceGrid,
} as ComponentMeta<typeof PriceGrid>;

const Template: ComponentStory<typeof PriceGrid> = (args: any) => {
  return <PriceGrid {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  cards,
};
