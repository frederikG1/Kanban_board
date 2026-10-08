import React, { useState } from "react";
import { toast } from "react-toastify";
import SignupForm from "../components/SignupForm";
import LoginForm from "../components/LoginForm";
import "./AuthPage.css";

export default function AuthPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [isLogin, setIsLogin] = useState(true);
  const handleSubmitLogin = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function handleLogin() {
      try {
        const response = await fetch("/api/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username, password }),
        });
        const data = await response.json();

        if (response.ok) {
          toast.success(data.successMessage, {
            position: "bottom-right",
          });
        } else {
          toast.error(data.errorMessage, {
            position: "bottom-right",
          });
        }
      } catch (error) {
        toast.error((error as Error).message);
      }
    }
    handleLogin();
  };

  const handleSubmitSignup = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    async function handleSignup() {
      try {
        const response = await fetch("/api/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          toast.success(data.successMessage, {
            position: "bottom-right",
          });
          setIsLogin(true);
        } else {
          toast.error(data.errorMessage, {
            position: "bottom-right",
          });
        }
      } catch (error) {
        toast.error((error as Error).message);
      }
    }
    handleSignup();
  };

  return (
    <div className="flip-card">
      <div className={`flip-card-inner ${isLogin ? "" : "flipped"}`}>
        <div className="flip-card-face flip-card-front" inert={!isLogin}>
          <LoginForm
            username={username}
            password={password}
            submitBtnText="Log in"
            handleSubmit={handleSubmitLogin}
            handleUsernameInput={(e) => setUsername(e.target.value)}
            handlePasswordInput={(e) => setPassword(e.target.value)}
          />
          <p>
            Don't have an account?{" "}
            <button type="button" onClick={() => setIsLogin(false)}>
              Sign up here
            </button>
          </p>
        </div>

        <div className="flip-card-face flip-card-back" inert={isLogin}>
          <SignupForm
            username={username}
            email={email}
            password={password}
            submitBtnText="Sign up"
            handleSubmit={handleSubmitSignup}
            handleUsernameInput={(e) => setUsername(e.target.value)}
            handleEmailInput={(e) => setEmail(e.target.value)}
            handlePasswordInput={(e) => setPassword(e.target.value)}
          />
          <p>
            Already have an account?{" "}
            <button type="button" onClick={() => setIsLogin(true)}>
              Log in here
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
