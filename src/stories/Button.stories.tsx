import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '../components/atoms/Button';

export default {
  title: 'atoms/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Red = Template.bind({});
Red.args = {
  color: 'red',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Blue = Template.bind({});
Blue.args = {
  color: 'blue',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Green = Template.bind({});
Green.args = {
  color: 'green',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Small = Template.bind({});
Small.args = {
  color: 'red',
  size: 'small',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Medium = Template.bind({});
Medium.args = {
  color: 'red',
  size: 'medium',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Large = Template.bind({});
Large.args = {
  color: 'red',
  size: 'large',
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Disabled = Template.bind({});
Disabled.args = {
  color: 'red',
  disabled: true,
  children: <span style={{ color: 'white' }}>はろー</span>,
};

export const Apply = Template.bind({});
Apply.args = {
  color: 'blue',
  children: <span style={{ color: 'white' }}>応募する</span>,
};

export const Delete = Template.bind({});
Delete.args = {
  color: 'red',
  disabled: true,
  size: 'small',
  children: <span style={{ color: 'white' }}>削除する</span>,
};
