import React from "react";

export enum BUTTON_TYPES {
  DEFAULT = "default",
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

const BASE_BUTTON_STYLES = "rounded-md text-white px-2 py-1";

const buttonStyles = {
  default: "bg-slate-700 text-white",
  primary: "bg-slate-600 text-white",
  secondary: "bg-gray-500 text-white",
};

export interface CustomButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType?: BUTTON_TYPES;
}

const Button: React.FC<CustomButtonProps> = ({
  buttonType,
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`${BASE_BUTTON_STYLES} ${buttonStyles[buttonType]} ${props.className}`}
    >
      {children}
    </button>
  );
};

export default Button;
