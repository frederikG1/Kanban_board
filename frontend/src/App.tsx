import "./App.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <div>
      <Header />

      <AuthPage />

      <ToastContainer position="bottom-right" />
    </div>
  );
}
