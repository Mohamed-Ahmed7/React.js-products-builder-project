import type { ButtonHTMLAttributes, ReactNode } from "react";

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: ReactNode;
  width?: "w-full" | "w-fit";
}

const Button = ({ className, children, width = "w-full", ...rest }: IProps) => {
  return (
    <button
      {...rest}
      className={`${className} ${width} text-white rounded-md p-2  cursor-pointer hover:opacity-95`}
    >
      {children}
    </button>
  );
};
export default Button;
