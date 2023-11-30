import { Routes, Route, Link, NavLink } from "react-router-dom";
import Questions from "../pages/questions";
import Tags from "../pages/tags";
import Shoutbox from "../pages/shoutbox";
import MyQuestions from "../pages/my-questions";
import MyResponses from "../pages/my-responses";
import MyLikes from "../pages/my-likes";
import MyAccount from "../pages/my-account";


const Root = () => {
  return (
    <>
      <aside id="default-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
        <div class="h-3/4 px-3 py-4 space-y-3 overflow-y-auto">
          <a class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            MENU
          </a>
          <ul class="space-y-3 font-medium">
            <li>
              <Link to="/questions" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Questions</Link>
            </li>
            <li>
              <Link to="/tags" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Tags</Link>
            </li>
            <li>
              <Link to="/shoutbox" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Shoutbox</Link>
            </li>
          </ul>

          <a class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            NAVIGATION PERSONNELLE
          </a>
          <ul class="space-y-3 font-medium">
            <li>
              <Link to="/mes-questions" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Mes Questions</Link>
            </li>
            <li>
              <Link to="/mes-reponses" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Mes Réponses</Link>
            </li>
            <li>
              <Link to="/mes-likes" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Mes Likes</Link>
            </li>
            <li>
              <a class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" height="16" width="14" viewBox="0 0 448 512">
                  <path fill="#00000" d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z" />
                </svg>
                <Link to="/mon-compte" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Mon Compte</Link>
              </a>
            </li>
          </ul>
        </div>
      </aside>

    </>
  );

}

export default function ConnectedNavbarLeft() {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="questions" element={<Questions />} />
        <Route path="tags" element={<Tags />} />
        <Route path="shoutbox" element={<Shoutbox />} />
        <Route path="mes-questions" element={<MyQuestions />} />
        <Route path="mes-reponses" element={<MyResponses />} />
        <Route path="mes-likes" element={<MyLikes />} />
        <Route path="mon-compte" element={<MyAccount />} />
      </Route>
    </Routes>
  );
}