import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-red-700 p-3 rounded-md">Vite with Tailwind</h1>
      <Card />
    </>
  );
}

export default App;
