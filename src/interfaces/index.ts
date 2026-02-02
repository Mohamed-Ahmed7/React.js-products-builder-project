export interface IProduct {
  id?: string | undefined;
  title: string;
  description: string;
  imageURL: string;
  price: string;
  colors: string[];
  category: {
    id: string;
    name: string;
    imageURL: string;
  };
}
type ProductNames = "title" | "description" | "imageURL" | "price";

export interface IFormInput {
  id: string;
  name: ProductNames;
  label: string;
  type: string;
}
