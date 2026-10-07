import "./LoginForm.css";

interface LoginFormProps {
  username: string;
  password: string;
  submitBtnText: string;
  handleSubmit: (event: React.SubmitEvent<HTMLFormElement>) => void;
  handleUsernameInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlePasswordInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function LoginForm(props: LoginFormProps) {
  return (
    <form className="login-form" onSubmit={props.handleSubmit}>
      <div className="input-wrapper">
        <input
          onChange={props.handleUsernameInput}
          value={props.username}
          type="text"
          placeholder="Username"
        />

        <input
          onChange={props.handlePasswordInput}
          value={props.password}
          type="password"
          placeholder="Password"
        />
      </div>

      <button className="login-btn">{props.submitBtnText}</button>
    </form>
  );
}
