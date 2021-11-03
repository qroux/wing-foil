import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import LanguageSwitchBtn from './LanguageSwitchBtn';

export default {
  title: 'components/molecules/LanguageSwitchBtn',
  component: LanguageSwitchBtn,
} as ComponentMeta<typeof LanguageSwitchBtn>;

const Template: ComponentStory<typeof LanguageSwitchBtn> = (args: any) => {
  return <LanguageSwitchBtn {...args} />;
};

export const Default = Template.bind({});
Default.args = {};
