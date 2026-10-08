import "./App.css";
import Header from "./components/Header";
import { ToastContainer } from "react-toastify";
import AuthPage from "./pages/AuthPage";

export default function App() {
  return (
    <div>
      <Header />

      <main style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
        <AuthPage />
      </main>

      <ToastContainer position="bottom-right" />
      <ToastContainer />
    </div>
  );
}
