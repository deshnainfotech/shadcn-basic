import { useState } from "react";

import "./App.css";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="w-[500px] border-1 border-gray-200 rounded-md p-8 space-y-2 flex flex-col items-start">
        <Input />
        <Button>Click me</Button>
      </div>
    </>
  );
}

export default App;
