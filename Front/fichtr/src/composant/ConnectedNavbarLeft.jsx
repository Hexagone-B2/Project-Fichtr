import {Routes, Route, Outlet, Link } from "react-router-dom";
import Questions from "../pages/questions";
import Tags from "../pages/tags";
import Shoutbox from "../pages/shoutbox";
import "./NavbarLeft.css";


const Root = () => {
  return (
    <>
      <nav>
        <a className="CategoryTitle">Menu</a>
        <ul>
          <li>
            <Link to="/questions">Questions</Link>
          </li>
          <li>
            <Link to="/tags">Tags</Link>
          </li>
          <li>
            <Link to="/shoutbox">Shoutbox</Link>
          </li>
        </ul>
        <a className="CategoryTitle">Navigation Personnelle</a>
        <ul>
          <li>
            <Link to="/mes-questions">Mes Questions</Link>
          </li>
          <li>
            <Link to="/mes-reponses">Mes Réponses</Link>
          </li>
          <li>
            <Link to="/mes-likes">Mes Likes</Link>
          </li>
          <li>
            <Link to="/mon-compte">Mon Compte</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};
export default function ConnectedNavbarLeft() {
    return (
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="questions" element={<Questions />} />
            <Route path="tags" element={<Tags />} />
            <Route path="shoutbox" element={<Shoutbox />} />
          </Route>
        </Routes>
    );
  }