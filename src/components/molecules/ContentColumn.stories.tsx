import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { cards } from '../../utils/pricing';
import ContentColumn from './ContentColumn';

export default {
  title: 'components/molecules/ContentColumn',
  component: ContentColumn,
} as ComponentMeta<typeof ContentColumn>;

const Template: ComponentStory<typeof ContentColumn> = (args: any) => {
  return <ContentColumn {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  header: "Qu'est ce que le WingFoil",
  children: (
    <>
      <p>
        La Wing est une aile légère et maniable qui vous tracte et vous permet
        de décoller au-dessus de la surface de l’eau, grâce au foil fixé sous la
        planche.
      </p>
      <p>
        Vous retrouverez les sensations du kitesurf, du surf et de la planche à
        voile. Un mix de tous les sports de glisse mais avec un apprentissage
        plus rapide et ludique.
      </p>
      <p>
        La Wing vous procure des sensations uniques et un sentiment de liberté.
      </p>
    </>
  ),
};
