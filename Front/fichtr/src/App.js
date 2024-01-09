import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import MyQuestions from "./pages/MyQuestions";
import Tags from "./pages/Tags";
import Shoutbox from "./pages/Shoutbox";
import Posts from "./component/Post/Post.jsx";
import Questions from "./pages/Questions";
import MyResponses from "./pages/MyAnswers";
import MyLikes from "./pages/MyLikes";
import MyAccount from "./pages/MyAccount";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Layout from "./pages/Layout";
import LayoutToolbarOnly from "./pages/LayoutToolbarOnly";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import {useContext, useEffect} from "react";
import {AuthContext} from "./component/Provider/AuthContext.jsx";
import UserSettings from "./pages/UserSettings.jsx";
import PostPage from "./pages/PostPage";

export default function App() {
    const {isAuthenticated, authUser} = useContext(AuthContext);
    useEffect(() => {
        authUser();
        setInterval(() => {
            authUser();
        }, 10000);
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                {isAuthenticated ? (
                    <>
                        <Route path="/myquestions" element={<MyQuestions/>}/>
                        <Route path="/myprofile" element={<Profile/>}/>
                        <Route path="/mycomments" element={<MyResponses/>}/>
                        <Route path="/mylikes" element={<MyLikes/>}/>
                        <Route path="/myaccount" element={<MyAccount/>}/>
                        <Route path="/myanswers" element={<MyResponses/>}/>
                        <Route path="/sendpost" element={<PostPage/>} />
                        <Route
                            path="/profile"
                            element={
                                <LayoutToolbarOnly>
                                    <UserSettings/>
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
                                    <Register/>
                                </LayoutToolbarOnly>
                            }
                        />
                        <Route
                            path="/login"
                            element={
                                <LayoutToolbarOnly>
                                    <Login/>
                                </LayoutToolbarOnly>
                            }
                        />
                    </>
                )}
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Home/>
                        </Layout>
                    }
                />
                <Route
                    path="/questions"
                    element={
                        <Layout>
                            <Questions/>
                        </Layout>
                    }
                />
                <Route
                    path="/shoutbox"
                    element={
                        <Layout>
                            <Shoutbox/>
                        </Layout>
                    }
                />
                <Route path="/tags" element={<Tags/>}/>
                <Route path="/shoutbox" element={<Shoutbox/>}/>
                <Route path="/posts" element={<Posts/>}/>
                {/*Redirection par default, si l'utilisateur veux accéder a des routes qui n'existe pas*/}
                <Route path="*" element={<Navigate to="/"/>}/>
            </Routes>
        </BrowserRouter>
    );
}
