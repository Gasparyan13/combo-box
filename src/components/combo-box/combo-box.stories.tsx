import { ComboBox } from './combo-box';
import { Story } from '@storybook/react';
import { data } from '../constants/data';

export default {
  title: 'ComboBox'
};

const Template: Story = (args) => <ComboBox {...args} />;

export const Default = Template.bind({});

Default.args = {
  data: data,
  placeholder: 'Выберите страну'
};
