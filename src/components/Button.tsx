import React from "react";

type ButtonProps = {
  className?: string,
  base?: "button" | "a",
  type?: "button" | "submit" | "reset",
  variant?: "primary" | "secondary",
  children: React.ReactNode,
  onClick?: () => void,
  link_misc?: React.AnchorHTMLAttributes<HTMLAnchorElement>,
};

const Button: React.FC<ButtonProps> = ({
  className = "",
  base = "button",
  type = "button",
  variant = "primary",
  children,
  onClick,
  link_misc = {},
}) => {
  const primaryStyle =
    "bg-transparent border-primary-red text-primary-red hover:bg-primary-red hover:text-white transition-colors";
  const secondaryStyle =
    "bg-transparent border-white text-white hover:bg-white hover:text-primary-red transition-colors";

  return base === "button" ? (
    <button
      className={`${className} uppercase border-[3px] px-6 py-2 font-semibold ${variant === "primary" ? primaryStyle : secondaryStyle
        }`}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  ) : (
    <a
      className={`${className} uppercase border-[3px] px-6 py-2 font-semibold ${variant === "primary" ? primaryStyle : secondaryStyle
        }`}
      {...link_misc}
    >
      {children}
    </a>
  );
};

export default Button;
