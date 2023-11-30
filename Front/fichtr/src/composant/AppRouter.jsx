import { BrowserRouter } from "react-router-dom";
import LeftNavbar from "./LeftNavbar";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <LeftNavbar/>
    </BrowserRouter>
  );
}