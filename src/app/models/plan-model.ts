export enum BillingType {
  monthly = 'monthly',
  yearly = 'yearly',
}

export interface Plan {
  name: string;
  price: number;
  icon: string;
  billing: BillingType;
}
