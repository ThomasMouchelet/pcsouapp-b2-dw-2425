type ButtonProps = {
    type?: "button" | "submit" | "reset";
    text: string;
    variant?: "primary" | "secondary" | "danger";
    className?: string;
    onClick?: () => void;
}

const buttonStyle = {
    default: "rounded py-2 px-4 font-bold text-white",
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    danger: "bg-red-500 hover:bg-red-700",
}

const Button = ({ type = "button", text, variant = "primary", className, onClick } : ButtonProps) => {
    return ( 
        <button
            type={type}
            className={`${buttonStyle[variant]} ${buttonStyle.default} ${className}`}
            onClick={onClick}
        >
            {text}
        </button>
     );
}
 
export default Button;