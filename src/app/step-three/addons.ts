import { Addon } from '../models/addon-model';

export const addons: Addon[] = [
  {
    type: 'Online service',
    price: 1,
    text: 'Access to multiplayer games',
    checked: false,
  },
  {
    type: 'Larger storage',
    price: 2,
    text: 'Extra 1TB of cloud save',
    checked: false,
  },
  {
    type: 'Customizable profile',
    price: 2,
    text: 'Custom theme on your profile',
    checked: false,
  },
];
