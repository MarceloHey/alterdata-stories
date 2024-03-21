import IconButton from '../components/IconButton.vue'
import { fn } from '@storybook/test';

export default {
  title: 'IconButton',
  component: IconButton,
  tags: ['autodocs'],
  args: { icon: 'mdi-plus', onClick: fn() }
};

export const Default = {

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

export const ColoredIcon = {
  args: {
    iconColor: 'error'
  },
};


