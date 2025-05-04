import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";

const AppInput = ({
  label,
  name,
  placeholder,
  type,
  value,
  formErrors,
  onChange,
  className,
}) => {
  return (
    <div className="w-full space-y-2">
      <Label htmlFor={name}>{label}</Label>
      <Input
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="mb-0"
      />
      {formErrors[name] && (
        <span className="text-sm text-red-500">{formErrors[name]}</span>
      )}
    </div>
  );
};

export default AppInput;
