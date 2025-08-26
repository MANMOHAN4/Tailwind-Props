import { useState } from "react";
import "./App.css";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-3xl bg-red-700 p-3 rounded-md">Vite with Tailwind</h1>
      <Card
        username="Harry"
        post="Software Engineer, UK"
        imgSrc="https://pbs.twimg.com/profile_images/1522060025854066688/IZs_lylH_400x400.png"
      />
      <Card username="John" post="Staff Engineer, Algolia" />
      <Card />
    </>
  );
}

export default App;
