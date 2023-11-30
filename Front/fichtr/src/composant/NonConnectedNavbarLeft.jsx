import { Routes, Route, Link } from "react-router-dom";
import Questions from "../pages/questions";
import Tags from "../pages/tags";


const Root = () => {
  return (
    <>
      <aside id="default-sidebar" class="fixed left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 " aria-label="Sidebar">
        <div class="h-3/4 px-3 py-36 space-y-3 overflow-y-auto">
          <a class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            MENU
          </a>
          <ul class="space-y-3 font-medium">
            <li>
              <a class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="32" viewBox="0 0 320 512">
                  <path fill="#808080" d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z" />
                </svg>
                <Link to="/questions" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Questions</Link>
              </a>
            </li>
            <li>
              <a class="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="32" viewBox="0 0 512 512">
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <Link to="/tags" class="flex p-2 whitespace-nowrap focus:bg-gray-300">Tags</Link>
              </a>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );

}

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