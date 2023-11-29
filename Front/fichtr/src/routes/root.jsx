import "./Navbar_side.css";


// the router structure
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Menu</h1>
          <nav>
            <ul>
              <li>
                <a href={`/contacts/1`}>Questions</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Tags</a>
              </li>
              <li>
                <a href={`/contacts/2`}>Shoutbox</a>
              </li>
            </ul>

          </nav>
        </div>
        <div id="detail"></div>
      </>
    );
  }