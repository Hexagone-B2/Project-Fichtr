import { Link } from "react-router-dom";

const ConnectedRoot = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        class="w-64 bg-blue-50 top-[8rem] sticky"
        aria-label="Sidebar"
      >
        <div class="h-3/4 px-3 py-36 space-y-3 overflow-y-auto">
          <div class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            MENU
          </div>
          <ul class="space-y-3 font-medium">
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="#808080"
                    d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  />
                </svg>
                <Link
                  to="/questions"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Questions
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <Link
                  to="/tags"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Tags
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M123.6 391.3c12.9-9.4 29.6-11.8 44.6-6.4c26.5 9.6 56.2 15.1 87.8 15.1c124.7 0 208-80.5 208-160s-83.3-160-208-160S48 160.5 48 240c0 32 12.4 62.8 35.7 89.2c8.6 9.7 12.8 22.5 11.8 35.5c-1.4 18.1-5.7 34.7-11.3 49.4c17-7.9 31.1-16.7 39.4-22.7zM21.2 431.9c1.8-2.7 3.5-5.4 5.1-8.1c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208s-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6c-15.1 6.6-32.3 12.6-50.1 16.1c-.8 .2-1.6 .3-2.4 .5c-4.4 .8-8.7 1.5-13.2 1.9c-.2 0-.5 .1-.7 .1c-5.1 .5-10.2 .8-15.3 .8c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4c4.1-4.2 7.8-8.7 11.3-13.5c1.7-2.3 3.3-4.6 4.8-6.9c.1-.2 .2-.3 .3-.5z" />
                </svg>
                <Link
                  to="/shoutbox"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Shoutbox
                </Link>
              </div>
            </li>
          </ul>

          <div class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            NAVIGATION PERSONNELLE
          </div>
          <ul class="space-y-3 font-medium">
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#808080"
                    d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"
                  />
                </svg>
                <Link
                  to="/my-questions"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Mes Questions
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#808080"
                    d="M441 58.9L453.1 71c9.4 9.4 9.4 24.6 0 33.9L424 134.1 377.9 88 407 58.9c9.4-9.4 24.6-9.4 33.9 0zM209.8 256.2L344 121.9 390.1 168 255.8 302.2c-2.9 2.9-6.5 5-10.4 6.1l-58.5 16.7 16.7-58.5c1.1-3.9 3.2-7.5 6.1-10.4zM373.1 25L175.8 222.2c-8.7 8.7-15 19.4-18.3 31.1l-28.6 100c-2.4 8.4-.1 17.4 6.1 23.6s15.2 8.5 23.6 6.1l100-28.6c11.8-3.4 22.5-9.7 31.1-18.3L487 138.9c28.1-28.1 28.1-73.7 0-101.8L474.9 25C446.8-3.1 401.2-3.1 373.1 25zM88 64C39.4 64 0 103.4 0 152V424c0 48.6 39.4 88 88 88H360c48.6 0 88-39.4 88-88V312c0-13.3-10.7-24-24-24s-24 10.7-24 24V424c0 22.1-17.9 40-40 40H88c-22.1 0-40-17.9-40-40V152c0-22.1 17.9-40 40-40H200c13.3 0 24-10.7 24-24s-10.7-24-24-24H88z"
                  />
                </svg>
                <Link
                  to="/my-answers"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Mes Réponses
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#808080"
                    d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z"
                  />
                </svg>
                <Link
                  to="/my-likes"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Mes Likes
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  height="16"
                  width="32"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="#808080"
                    d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464H398.7c-8.9-63.3-63.3-112-129-112H178.3c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304h91.4C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3z"
                  />
                </svg>
                <Link
                  to="/my-account"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Mon Compte
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};
const NonConnectedRoot = () => {
  return (
    <>
      <aside
        id="default-sidebar"
        class="fixed left-0 z-40 w-64 transition-transform -translate-x-full sm:translate-x-0 "
        aria-label="Sidebar"
      >
        <div class="h-3/4 px-3 py-36 space-y-3 overflow-y-auto">
          <div class="flex items-center text-xs whitespace-nowrap px-11 text-gray-500 rounded-lg group">
            MENU
          </div>
          <ul class="space-y-3 font-medium">
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 320 512"
                >
                  <path
                    fill="#808080"
                    d="M80 160c0-35.3 28.7-64 64-64h32c35.3 0 64 28.7 64 64v3.6c0 21.8-11.1 42.1-29.4 53.8l-42.2 27.1c-25.2 16.2-40.4 44.1-40.4 74V320c0 17.7 14.3 32 32 32s32-14.3 32-32v-1.4c0-8.2 4.2-15.8 11-20.2l42.2-27.1c36.6-23.6 58.8-64.1 58.8-107.7V160c0-70.7-57.3-128-128-128H144C73.3 32 16 89.3 16 160c0 17.7 14.3 32 32 32s32-14.3 32-32zm80 320a40 40 0 1 0 0-80 40 40 0 1 0 0 80z"
                  />
                </svg>
                <Link
                  to="questions"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Questions
                </Link>
              </div>
            </li>
            <li>
              <div class="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="32"
                  viewBox="0 0 512 512"
                >
                  <path d="M345 39.1L472.8 168.4c52.4 53 52.4 138.2 0 191.2L360.8 472.9c-9.3 9.4-24.5 9.5-33.9 .2s-9.5-24.5-.2-33.9L438.6 325.9c33.9-34.3 33.9-89.4 0-123.7L310.9 72.9c-9.3-9.4-9.2-24.6 .2-33.9s24.6-9.2 33.9 .2zM0 229.5V80C0 53.5 21.5 32 48 32H197.5c17 0 33.3 6.7 45.3 18.7l168 168c25 25 25 65.5 0 90.5L277.3 442.7c-25 25-65.5 25-90.5 0l-168-168C6.7 262.7 0 246.5 0 229.5zM144 144a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z" />
                </svg>
                <Link
                  to="tags"
                  class="flex p-2 whitespace-nowrap focus:bg-gray-300"
                >
                  Tags
                </Link>
              </div>
            </li>
          </ul>
        </div>
      </aside>
    </>
  );
};

export default function NavbarLeft() {
  if (localStorage.getItem("authorization")) {
    return <ConnectedRoot />;
  } else {
    return <NonConnectedRoot />;
  }
}
