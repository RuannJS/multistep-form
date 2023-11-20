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
    service: {
      price: number;
      checked: boolean;
    };
    larger: {
      price: number;
      checked: boolean;
    };
    profile: {
      price: number;
      checked: boolean;
    };
  };
}
