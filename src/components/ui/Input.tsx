import type { InputHTMLAttributes } from "react";

// interface IProps extends InputHTMLAttributes<HTMLInputElement> {};

const Input = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => (
  <input
    {...rest}
    className="border border-gray-300 shadow-md focus:border-indigo-500 focus:outline-hidden focus:ring-1 focus:ring-indigo-500 rounded-lg p-2 text-lg"
  />
);

export default Input;
