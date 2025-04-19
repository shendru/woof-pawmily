import { useState } from "react";

import "./App.css";
import Header from "./components/header/Header.tsx";

function App() {
  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
}

export default App;
