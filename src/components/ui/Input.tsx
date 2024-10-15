type InputProps = {
    placeholder?: string;
    className?: string;
    type?: 'text' | 'number' | 'email' | 'password';
    handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    name?: string;
}

const Input = ({ placeholder, className, type, handleChange, name } : InputProps) => {
    return ( 
        <input
            type={type || 'text'}
            className={`border-2 text-xl py-4 px-6 text-slate-600 ${className}`}
            placeholder={placeholder}
            onChange={handleChange}
            name={name}
        />
     );
}

export default Input