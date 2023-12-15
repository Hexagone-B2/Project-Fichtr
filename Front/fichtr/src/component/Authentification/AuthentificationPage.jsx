import AuthentificationForm from "./AuthentificationForm";
import axios from 'axios';
import {useEffect} from "react";

export default function AuthentificationPage(props) {
  return (
    <div className="flex items-center">
      <AuthentificationForm />
      <img
        src={"/login/login2.PNG"}
        alt="Register"
        className="w-3/5 overflow-hidden"
      />
    </div>
  );
}
