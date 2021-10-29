import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ContentColumn from '../molecules/ContentColumn';
import ImageColumn from '../molecules/ImageColumn';
import PresContainer from './PresContainer';

export default {
  title: 'components/templates/PresContainer',
  component: PresContainer,
} as ComponentMeta<typeof PresContainer>;

const Template: ComponentStory<typeof PresContainer> = (args: any) => {
  return <PresContainer {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  children: (
    <>
      <ContentColumn header='Content header'>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit
          nesciunt earum excepturi quaerat, nobis at optio nulla itaque corrupti
          quod, ullam dolor asperiores, minima nemo! Pariatur, aliquid. Dolorum,
          voluptate culpa.
        </p>
      </ContentColumn>
      <ImageColumn />
    </>
  ),
};
