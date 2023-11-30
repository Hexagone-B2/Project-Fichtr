import { Routes, Route, Link } from "react-router-dom";
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
          <ul class="space-y-3 font-medium text-red-500">
            <li>
              <a class="flex items-center p-2 text-gray-900 hover:bg-orange-100 group">
                <Link to="/questions" class="flex-1 ms-3 whitespace-nowrap">Questions</Link>
              </a>
            </li>
            <li>
              <a class="flex items-center p-2 text-gray-900 hover:bg-orange-100 group">
                <Link to="/tags" class="flex-1 ms-3 whitespace-nowrap">Tags</Link>
              </a>
            </li>
            <li>
              <a class="flex items-center p-2 text-gray-900 hover:bg-orange-100 group">
                <Link to="/shoutbox" class="flex-1 ms-3 whitespace-nowrap">Shoutbox</Link>
              </a>
            </li>
          </ul>

          <a class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            NAVIGATION PERSONNELLE
          </a>
          <ul>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <Link to="/mes-questions" class="flex-1 ms-3 whitespace-nowrap">Mes Questions</Link>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                  <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
                </svg>
                <Link to="/mes-reponses" class="flex-1 ms-3 whitespace-nowrap">Mes Réponses</Link>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                <svg class="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 16">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                </svg>
                <Link to="/mes-likes" class="flex-1 ms-3 whitespace-nowrap">Mes Likes</Link>
              </a>
            </li>
            <li>
              <a href="#" class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-100 group">
                
                <img src="./img/user-regular.svg"/>
                <Link to="/mon-compte" class="flex-1 ms-3 whitespace-nowrap">Mon Compte</Link>
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