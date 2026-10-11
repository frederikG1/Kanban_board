import "./App.css";
import Header from "./components/Header";
import AuthPage from "./pages/AuthPage";
import { useAuth } from "./stores/useAuth";
import BoardPage from "./pages/BoardPage";

export default function App() {
  const { user, loading } = useAuth();
  if (loading) return <p>Loading...</p>;

  if (!user) return <AuthPage />;

  return (
    <div>
      <Header />
      <p>Board goes here</p>
      <BoardPage />
    </div>
  );
}
