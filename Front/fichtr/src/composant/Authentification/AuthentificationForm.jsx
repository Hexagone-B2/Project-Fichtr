import { useContext, useState } from "react";
import axios from "axios";
import Field from "../Field";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthContext";

export default function AuthentificationForm(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [authIsWrong, setAuthIsWrong] = useState(false);
  let [authIsGood, setAuthIsGood] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  function handleSubmit(event) {
    const mail = event.target[0].value;
    const password = event.target[1].value;
    const headers = {
      "Content-Type": "application/json",
    };
    var to_send = {
      mail: mail,
      password: password,
    };
    axios
      .post("http://enzo-salson.fr:3001/api/login", to_send, { headers })
      .then((res) => {
        setAuthIsWrong(false);
        setAuthIsGood(false);
        console.log(res);

        if (res.status === 200) {
          loginUser(res.data);
        }
      })
      .catch((error) => {
        console.log(error.response.data);
        if (error.response.data === "WRONG_PASSWORD") {
          setAuthIsWrong(true);
        }
      });
    event.preventDefault();
  }

  return (
    <>
      <form
        method="post"
        onSubmit={handleSubmit}
        className="inscription-form w-2/5 m-24"
      >
        <Field
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={setEmail}
          placeholder="Email"
          boolean={authIsWrong}
          errorText=" "
        />
        <Field
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={setPassword}
          placeholder="Mot de passe"
          boolean={authIsWrong}
          errorText="Email et Mot de passe invalides"
        />
        <p className="text-green-500 text-xs italic">
          {authIsGood ? "Connexion Réussi" : <br />}
        </p>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>
    </>
  );
}
