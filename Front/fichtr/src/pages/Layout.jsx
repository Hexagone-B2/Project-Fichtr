import { Outlet } from "react-router-dom";
import Toolbar from "../composant/Toolbar";
import ConnectedToolbar from "../composant/ConnectedToolbar";

export default function Layout(props) {
  return (
    <>
      {localStorage.getItem("authorization") ? (
        <ConnectedToolbar />
      ) : (
        <Toolbar />
      )}
      <Outlet />
    </>
  );
}
