import "./App.css";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function handleLogin() {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (response.ok) {
          toast.success(data.success, {
            position: "bottom-right",
          });
        } else {
          toast.error(data.error, {
            position: "bottom-right",
          });
        }
      } catch (err) {
        console.log(err);
      }
    }
    handleLogin();
  };

  

  const handleUsernameInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <Header />
      <LoginForm
        username={username}
        password={password}
        submitBtnText="Log in"
        handleSubmit={handleSubmit}
        handleUsernameInput={handleUsernameInput}
        handlePasswordInput={handlePasswordInput}
      />
      <ToastContainer />
    </div>
  );
}
