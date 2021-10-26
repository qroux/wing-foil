import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { cards } from '../../utils/pricing';
import PriceCardTag from './PriceCardTag';

export default {
  title: 'components/atoms/PriceCardTag',
  component: PriceCardTag,
} as ComponentMeta<typeof PriceCardTag>;

const Template: ComponentStory<typeof PriceCardTag> = (args: any) => {
  return <PriceCardTag {...args} />;
};

const card = cards[3];

export const Default = Template.bind({});
Default.args = {
  label: card.tag,
  color: card.color,
  outlined: false,
};
