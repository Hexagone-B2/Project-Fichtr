import {Routes, Route, Outlet, Link } from "react-router-dom";
import Questions from "../pages/questions";
import Tags from "../pages/tags";
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
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default function NonConnectedNavbarLeft() {
    return (
        <Routes>
          <Route path="/" element={<Root />}>
            <Route path="questions" element={<Questions />} />
            <Route path="tags" element={<Tags />} />
          </Route>
        </Routes>
    );
  }