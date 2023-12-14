import {useState} from "react";
import { AuthContext } from "./AuthContext";
import axios from "axios";

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");

  function authUser() {
    if (localStorage.getItem("authorization")) {
      const headers = { authorization: localStorage.getItem("authorization") };
      axios
        .post("https://dev.enzo-salson.fr/api/isAuthenticated", {}, { headers })
        .then((response) => {
          if (response.data.authenticated) {
            setIsAuthenticated(true);
            setUserId(response.data.user_id);
            setUserName(response.data.username);
          }
        })
        .catch((e) => {
            setIsAuthenticated(false);
        });
    }
  }

  function refreshAuth() {
    if (localStorage.getItem("authorization")) {
      const headers = { authorization: localStorage.getItem("authorization") };
      axios
        .post("https://dev.enzo-salson.fr/api/refreshAuth", {}, { headers })
        .then((response) => {
          // if (response.data.authenticated === true) {
          setIsAuthenticated(true);
          //   setUserId(response.data.user_id);
          //   setUserName(response.data.username);
          // }
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
      value={{
        isAuthenticated,
        authUser,
        loginUser,
        logoutUser,
        userId,
        userName,
        refreshAuth,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
