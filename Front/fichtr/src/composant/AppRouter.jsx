import { BrowserRouter, Routes, Route } from "react-router-dom";
import Questions from "../pages/questions";
import Tags from "../pages/tags";
import Shoutbox from "../pages/shoutbox";
import MyQuestions from "../pages/my-questions";
import MyResponses from "../pages/my-answers";
import MyLikes from "../pages/my-likes";
import MyAccount from "../pages/my-account";
import NavbarLeft from "./LeftNavbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
            <Route path="/" element={<NavbarLeft />}>
                <Route path="questions" element={<Questions />} />
                <Route path="tags" element={<Tags />} />
                <Route path="shoutbox" element={<Shoutbox />} />
                <Route path="my-questions" element={<MyQuestions />} />
                <Route path="my-answers" element={<MyResponses />} />
                <Route path="my-likes" element={<MyLikes />} />
                <Route path="my-account" element={<MyAccount />} />
            </Route>
        </Routes>
    </BrowserRouter>
  );
}