import React from "react";
import "./App.css";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
  return (
    <div className="flex flex-col items-center w-full mx-8 border-2">
      <Header />
      <Result />
    </div>
  );
}

export default App;
