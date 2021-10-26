import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
  cards: [
    {
      title: 'foil tracté',
      price: 70,
      content: ['première ligne', 'seconde ligne'],
    },
    {
      title: 'Initiation WingFoil',
      price: 120,
      content: ['première ligne', 'seconde ligne'],
    },
    {
      title: 'Basse Saison Carte 3 x 3h30',
      price: 300,
      content: ['cours suplémentaire 3h: 100€'],
    },
    {
      title: 'Haute Saison Carte 3 x 3h30',
      price: 300,
      content: ['cours suplémentaire 3h: 120€'],
    },
  ],
};
