import { Plan } from '../models/plan-model';
import { BillingType } from '../models/plan-model';

export const plans: Plan[] = [
  {
    name: 'Arcade',
    price: 9,
    icon: '../assets/icon-arcade.svg',
    billing: BillingType.monthly,
  },
  {
    name: 'Advanced',
    price: 12,
    icon: '../assets/icon-advanced.svg',
    billing: BillingType.monthly,
  },
  {
    name: 'Pro',
    price: 15,
    icon: '../assets/icon-pro.svg',
    billing: BillingType.monthly,
  },
];
