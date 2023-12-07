import { useState } from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  function authUser() {
    if (localStorage.getItem("authorization")) {
      const headers = { authorization: localStorage.getItem("authorization") };
      axios
        .post("http://enzo-salson.fr:3001/api/isAuthenticated", {}, { headers })
        .then((response) => {
          if (response.data.authenticated === true) {
            setIsAuthenticated(true);
          }
        })
        .catch((e) => {
          console.log(e);
          setIsAuthenticated(false);
        });
    }
  }

  //recuperer le token, le stocker en localstorage
  function loginUser(data) {
    localStorage.setItem("authorization", data);
    setIsAuthenticated(true);
  }

  //effacer le token dans le localstorage
  function logoutUser() {
    localStorage.removeItem("authorization");
    setIsAuthenticated(false);
  }
  return (
    <AuthContext.Provider
      value={{ isAuthenticated, authUser, loginUser, logoutUser }}
    >
      {children}
    </AuthContext.Provider>
  );
}
