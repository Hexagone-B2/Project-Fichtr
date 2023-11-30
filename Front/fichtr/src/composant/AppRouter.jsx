import { BrowserRouter } from "react-router-dom";
import NonConnectedNavbarLeft from "./NonConnectedNavbarLeft";
import ConnectedNavbarLeft from "./ConnectedNavbarLeft";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <ConnectedNavbarLeft/>
    </BrowserRouter>
  );
}