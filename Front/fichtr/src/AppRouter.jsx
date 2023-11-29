import { BrowserRouter, Routes, Route } from "react-router-dom";
import Root from "./pages/root";
import Questions from "./pages/questions";
import Tags from "./pages/tags";
import Shoutbox from "./pages/shoutbox";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route path="questions" element={<Questions />} />
          <Route path="tags" element={<Tags />} />
          <Route path="shoutbox" element={<Shoutbox />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}