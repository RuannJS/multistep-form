import { Plan } from '../models/plan-model';

export const yearlyBilling: boolean = false;

export const plans: Plan[] = [
  {
    type: 'Arcade',
    price: 9,
    icon: '../assets/icon-arcade.svg',
  },
  {
    type: 'Advanced',
    price: 12,
    icon: '../assets/icon-advanced.svg',
  },
  {
    type: 'Pro',
    price: 15,
    icon: '../assets/icon-pro.svg',
  },
];
