import { useEffect, useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import AppInput from "./components/custom/AppInput";

function App() {
  const [formData, setFormData] = useState({
    testInput: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    testInput: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  let isFormValidated = false;

  const handleValidation = () => {
    const vals = Object.entries(formData);
    for (const formVals of vals) {
      if (formVals[1].length < 1) {
        isFormValidated = true;
        setFormErrors((prevValues) => ({
          ...prevValues,
          [formVals[0]]: `${formVals[0]} is required`,
        }));
      }
    }

    return isFormValidated;
  };

  const handleClick = () => {
    const isValidated = handleValidation();

    console.log("is form validated: ", isValidated);
    if (isValidated) {
      toast.warning("Please fill all the form values", { dismissible: true });
      return;
    }

    console.log("Form values: ", formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  useEffect(() => {
    isFormValidated = false;
    setFormErrors({
      testInput: "",
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  }, [formData]);

  return (
    <>
      <div className="w-[500px] mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Form </h1>
        <div className="border-1 border-gray-200 rounded-md p-8 space-y-6 flex flex-col items-start">
          <AppInput
            label={"Test Input"}
            type="text"
            name={"testInput"}
            value={formData.testInput}
            placeholder={"Please enter your test input"}
            onChange={handleChange}
            formErrors={formErrors}
          />

          <AppInput
            label={"First Name"}
            type="text"
            name={"firstName"}
            value={formData.firstName}
            placeholder={"Please enter your first name"}
            onChange={handleChange}
            formErrors={formErrors}
          />

          <AppInput
            label={"Last Name"}
            type="text"
            name={"lastName"}
            value={formData.lastName}
            placeholder={"Please enter your last name"}
            onChange={handleChange}
            formErrors={formErrors}
          />

          <AppInput
            label={"email"}
            type="text"
            name={"email"}
            value={formData.email}
            placeholder={"Please enter your email"}
            onChange={handleChange}
            formErrors={formErrors}
          />

          <AppInput
            label={"Password"}
            type="password"
            name={"password"}
            value={formData.password}
            placeholder={"Please enter your password"}
            onChange={handleChange}
            formErrors={formErrors}
          />

          <Button onClick={handleClick}>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
