import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import MyQuestions from "./pages/MyQuestions";
import Tags from "./pages/Tags";
import Shoutbox from "./pages/Shoutbox";
import Questions from "./pages/Questions";
import MyResponses from "./pages/MyResponses";
import MyLikes from "./pages/MyLikes";
import MyAccount from "./pages/MyAccount";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Auth from "./pages/Auth";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="content/" element={<Auth />}>
            <Route path="questions" element={<Questions />} />
            <Route path="tags" element={<Tags />} />
            <Route path="shoutbox" element={<Shoutbox />} />
            <Route path="mes-questions" element={<MyQuestions />} />
            <Route path="mes-reponses" element={<MyResponses />} />
            <Route path="mes-likes" element={<MyLikes />} />
            <Route path="mon-compte" element={<MyAccount />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
