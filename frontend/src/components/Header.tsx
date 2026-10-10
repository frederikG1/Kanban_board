import image from "../assets/react.svg";
import { useAuth } from "../stores/useAuth";
import "./Header.css";

export default function Header() {
  const { user, logout} = useAuth();

  function handleLogout() {
    if (confirm("Are you sure you want to log out?")){
      logout();
    }
  }
  return (
    <header className="header">
      <div className="header-content">
        <img className="header-logo" src={image} alt="Logo" />
      </div>
      <div>
        <h1>Kanban Board</h1>
        <span>Welcome back, {user?.username}</span>
        <button onClick={handleLogout}>Log out</button>
  
      </div>
    </header>
  );
}
