import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { cards } from '../../utils/pricing';
import PriceCard, { Card } from './PriceCard';

export default {
  title: 'components/molecules/PriceCard',
  component: PriceCard,
} as ComponentMeta<typeof PriceCard>;

const Template: ComponentStory<typeof PriceCard> = (args: any) => {
  return <PriceCard {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  card: cards[3],
};
