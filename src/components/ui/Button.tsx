"use client";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "danger";
    size?: "sm" | "md" | "lg";
}

export default function Button({
    children,
    onClick,
    className,
    variant = "primary",
    size = "md",
    ...rest
}: Readonly<ButtonProps>) {
    const variants = {
        primary: "bg-blue-500 hover:bg-blue-600",
        secondary: "bg-gray-500 hover:bg-gray-600",
        danger: "bg-red-500 hover:bg-red-600",
    };

    const sizes = {
        sm: "text-sm px-3 py-1",
        md: "text-base px-4 py-2",
        lg: "text-lg px-6 py-3",
    };

    return (
        <button
            className={` ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} rounded-md hover:opacity-90 transition-opacity ${className || ""}`}
            onClick={onClick}
            {...rest}
        >
            {children}
        </button>
    );
}
