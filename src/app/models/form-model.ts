export interface FormModel {
  user: {
    name: string;
    email: string;
    phone: string;
  };

  plan: {
    type: string;
    billing: string;
    price: number;
  };

  addons: {
    service: boolean;
    larger: boolean;
    profile: boolean;
  };
}
