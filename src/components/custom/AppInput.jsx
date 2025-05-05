import { useState } from "react";
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
  const [showPassword, setShowPassword] = useState(false);

  // Handle password visibility toggle
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Determine input type based on password visibility
  const inputType = type === "password" && showPassword ? "text" : type;

  return (
    <div className="w-full space-y-2 relative">
      <Label htmlFor={name}>{label}</Label>
      <div className="relative">
        <Input
          name={name}
          type={inputType} // Set dynamic type
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`mb-0 ${className}`}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        )}
      </div>
      {formErrors[name] && (
        <span className="text-sm text-red-500">{formErrors[name]}</span>
      )}
    </div>
  );
};

export default AppInput;
