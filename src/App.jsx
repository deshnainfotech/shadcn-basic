import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleClick = () => {
    console.log("formData: ", formData);
  };

  return (
    <>
      <div className="w-[500px] mx-auto">
        <h1 className="text-3xl font-semibold mb-4">Form </h1>
        <div className="border-1 border-gray-200 rounded-md p-8 space-y-6 flex flex-col items-start">
          <div className="w-full space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              name="firstName"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="email">Last Name</Label>
            <Input
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              value={formData.email}
              type="email"
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>

          <div className="w-full space-y-2">
            <Label htmlFor="email">Password</Label>
            <Input
              value={formData.password}
              type="password"
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          <Button onClick={handleClick}>Click me</Button>
        </div>
      </div>
    </>
  );
}

export default App;
