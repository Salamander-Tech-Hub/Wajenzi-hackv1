import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary" | "outline";
  className?: string;
};

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  className = "",
}: ButtonProps) => {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition duration-200";

  const variants = {
    primary: "bg-[#d39b53] text-white hover:bg-green-700",
    secondary: "bg-[#FFED00] text-black hover:bg-gray-800 w-fit",
    outline:
      "border border-gray-600 text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
