import { useState } from "react";


import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
