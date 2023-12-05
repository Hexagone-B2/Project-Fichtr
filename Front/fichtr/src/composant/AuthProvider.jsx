import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function authUser() {
    //mettre une vrai authentification ici
    if (localStorage.getItem("authorization")) {
      setIsAuthenticated(true);
    }
  }

  function loginUser() {
    setIsAuthenticated(true);
  }

  function logoutUser() {
    // Logique de déconnexion ici
    setIsAuthenticated(false);
  }
  useEffect(() => {
    authUser();
  }, []);
  return (
    <AuthContext.Provider value={{ isAuthenticated, loginUser, logoutUser }}>
      {children}
    </AuthContext.Provider>
  );
}
