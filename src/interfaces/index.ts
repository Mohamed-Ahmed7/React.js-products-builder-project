export interface IProductDetails {
  title: string;
  description: string;
  imageURL: string;
  price: string;
}

export interface IProduct extends IProductDetails {
  id?: string | undefined;
  colors: string[];
  category: {
    id: string;
    name: string;
    imageURL: string;
  };
}

export interface IFormInput {
  id: string;
  name: keyof IProductDetails;
  label: string;
  type: string;
}
