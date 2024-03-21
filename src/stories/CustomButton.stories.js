import CustomButton from '../components/CustomButton.vue'
import { fn } from '@storybook/test';

export default {
  title: 'CustomButton',
  component: CustomButton,
  tags: ['autodocs'],
  args: { label: 'Button', onClick: fn() }
};

export const Default = {
  args: {
  },
};

export const Disabled = {
  args: {
    disabled: true
  },
};

export const Primary = {
  args: {
    color: 'primary'
  },
};

export const Small = {
  args: {
    size: 'small'
  },
};

export const Error = {
  args: {
    color: 'error'
  },
};

export const IconLeft = {
  args: {
    icon: 'mdi-plus'
  },
};

export const ColoredIcon = {
  args: {
    icon: 'mdi-plus',
    iconColor: 'primary'
  },
};


