
interface InputProps {
  placeholder: string;
  type?: string;
  onChange?: () => void;
}

const Input = ({ placeholder, type, onChange }: InputProps) => {
  return <input onChange={onChange} placeholder={placeholder} type={type} />;
};

export default Input;
