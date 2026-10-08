import type React from "react";
import "./SignupForm.css";
interface SignupFormProps {
  username: string;
  email: string;
  password: string;
  submitBtnText: string;
  handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  handleUsernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function SignupForm(props: SignupFormProps) {
  return (
    <form className="signup-form" onSubmit={props.handleSubmit}>
      <div className="input-wrapper">
        <input
          onChange={props.handleUsernameInput}
          value={props.username}
          type="text"
          placeholder="Username"
        />

        <input
          onChange={props.handleEmailInput}
          value={props.email}
          type="text"
          placeholder="Email"
        />

        <input
          onChange={props.handlePasswordInput}
          value={props.password}
          type="password"
          placeholder="Password"
        />
      </div>
      <button className="signup-btn">{props.submitBtnText}</button>
    </form>
  );
}
