import { Outlet } from "react-router-dom";
import NonConnectedNavbarLeft from "../composant/NonConnectedNavbarLeft";
import RightNavBar from "../composant/RightNavBar";
export default function Auth(props) {
  return (
    <>
      <NonConnectedNavbarLeft />
      <RightNavBar />
      <Outlet />
    </>
  );
}
