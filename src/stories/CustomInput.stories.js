import CustomInput from '../components/CustomInput.vue'
import { fn } from '@storybook/test';

export default {
  title: 'CustomInput',
  component: CustomInput,
  tags: ['autodocs'],
  args: { onInput: fn(), modelValue: '' },
};

export const Default = {
  args: {
    placeholder: 'Custom input',
  },
};

export const Outlined = {
  args: {
    variant: 'outlined',
    placeholder: 'Custom input',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: 'Custom input',
  },
};
