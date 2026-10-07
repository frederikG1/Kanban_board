import image from "../assets/react.svg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src={image} alt="Logo" />
      </div>
      <div>
        <h1>Kanban Board</h1>
        <p>Welcome back</p>
      </div>
    </header>
  );
}
