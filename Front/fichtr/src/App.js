import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import MyQuestions from "./pages/MyQuestions";
import Tags from "./pages/Tags";
import Shoutbox from "./pages/Shoutbox";
import Questions from "./pages/Questions";
import MyResponses from "./pages/MyResponses";
import MyLikes from "./pages/MyLikes";
import MyAccount from "./pages/MyAccount";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import LayoutToolbarOnly from "./pages/LayoutToolbarOnly";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { useContext, useEffect } from "react";
import { AuthContext } from "./component/Provider/AuthContext.jsx";
import UserSettings from "./component/UserSettings.jsx";
import CreatePost from "./pages/CreatePost.jsx";

export default function App() {
  const { isAuthenticated, authUser, refreshAuth } = useContext(AuthContext);
  useEffect(() => {
    authUser();
    const intervalId = setInterval(refreshAuth(), 5 * 60 * 1000); //toutes les 5 minutes
    return () => {
      clearInterval(intervalId); //enleve setInterval au demontage du composant
    };
  }, [isAuthenticated, authUser, refreshAuth]);
  return (
    <BrowserRouter>
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/mes-questions" element={<MyQuestions />} />
            <Route path="/mon-profil" element={<Profile />} />
            <Route path="/mes-reponses" element={<MyResponses />} />
            <Route path="/mes-likes" element={<MyLikes />} />
            <Route path="/mon-compte" element={<MyAccount />} />
            <Route
              path="/create-post"
              element={
                <Layout>
                  <CreatePost />
                </Layout>
              }
            />
            <Route
              path="/profile"
              element={
                <LayoutToolbarOnly>
                  <UserSettings />
                </LayoutToolbarOnly>
              }
            />
          </>
        ) : (
          <>
            <Route
              path="/register"
              element={
                <LayoutToolbarOnly>
                  <Register />
                </LayoutToolbarOnly>
              }
            />
            <Route
              path="/login"
              element={
                <LayoutToolbarOnly>
                  <Login />
                </LayoutToolbarOnly>
              }
            />
          </>
        )}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/questions"
          element={
            <Layout>
              <Questions />
            </Layout>
          }
        />
        <Route path="/tags" element={<Tags />} />
        <Route path="/shoutbox" element={<Shoutbox />} />
        {/*Redirection par default, si l'utilisateur veux accéder a des routes qui n'existe pas*/}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
}
