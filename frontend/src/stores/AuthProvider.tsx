import { useEffect, useState, type ReactNode } from "react";
import { toast } from "react-toastify";
import { AuthContext, type User } from "./AuthContext";

export default function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkSession() {
      try {
        const response = await fetch("/api/me", { credentials: "include" });
        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
        }
      } catch {
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    checkSession();
  }, []);

  function login(user: User) {
    setUser(user);
  }

  async function logout() {
    try {
      const response = await fetch("/api/logout", {
        method: "POST",
        credentials: "include",
      });
      const data = await response.json();

      if (response.ok) {
        setUser(null);
        toast.success(data.successMessage, {
          position: "top-right",
        });
      } else {
        toast.error(data.errorMessage, {
          position: "top-right",
        });
      }
    } catch (error) {
      toast.error((error as Error).message);
    }
  }
  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
