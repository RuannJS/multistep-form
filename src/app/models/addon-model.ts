export interface Addon {
  type: string;
  text: string;
  price: number;
  checked: boolean;
}

export interface SelectedAddons {
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
}
