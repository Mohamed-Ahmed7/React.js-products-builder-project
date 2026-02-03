
/**
 * Validates a product object to ensure all fields meet the required conditions.
 *
 * @param {product} product - The product object containing title, description, imageURL, price, and colors.
 * @returns {productErrors} - An object containing validation error messages for each invalid field.
 */

import type { IProductDetails } from "../interfaces";
export const productValidation = (product: IProductDetails) => {
  // ** returns an Object
  const productErrors: IProductDetails = {
    title: "",
    description: "",
    imageURL: "",
    price: "",
  };
  // Regular expression for URL validation (placed outside to avoid redefining it)
  const validUrl = /^(ftp|http|https):\/\/[^ "]+$/.test(product.imageURL);
  if (
    !product.title.trim() ||
    product.title.length < 10 ||
    product.title.length > 80
  ) {
    productErrors.title = "Product title must be between 10 and 80 characters!";
  }
  if (
    !product.description.trim() ||
    product.description.length < 10 ||
    product.description.length > 900
  ) {
    productErrors.description =
      "Product description must be between 10 and 900 characters!";
  }
  if (!product.imageURL.trim() || !validUrl) {
    productErrors.imageURL = "Valid image URL is required.";
  }
  if (!product.price.trim() || isNaN(+product.price)) {
    productErrors.price = "Valid price is required.";
  }
  return productErrors;
};
