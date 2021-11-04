import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
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
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Qui rerum odio
        esse, reiciendis deleniti totam asperiores perspiciatis eligendi alias
        laboriosam iure sed voluptatibus quia aspernatur commodi nisi dolor eius
        quo!
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus illum
        expedita ut ex corporis maxime esse commodi. Magni corrupti temporibus
        voluptate minima eos inventore, fugiat provident quam, doloremque neque
        odio?
      </p>
    </>
  ),
};
