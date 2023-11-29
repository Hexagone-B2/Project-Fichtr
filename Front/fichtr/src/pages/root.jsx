import { Outlet, Link } from "react-router-dom";
import "./root.css";

const Root = () => {
    return (
      <>
        <nav>
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
        </nav>
  
        <Outlet />
      </>
    )
  };
  
  export default Root;