import { useState } from "react";
import axios from "axios";
import Field from "../Field";

export default function AuthentificationForm(props) {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [authIsWrong, setAuthIsWrong] = useState(false);

  function handleClick(event) {
    axios.post(
      "http://10.2.7.20:3000/api/echo",
      {},
      { headers: { Authorization: localStorage.getItem("authorization") } }
    );

    event.preventDefault();
  }

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
      .post("http://10.2.7.20:3000/api/login", to_send, { headers })
      .then((res) => {
        console.log(res.data);
        localStorage.setItem("authorization", res.data);
        if (res.code === 403) {
          setAuthIsWrong(true);
        }
        if (res.code === 200) {
          console.log("succés");
        }
      })
      .catch((error) => {
        console.log(error.response.data);
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
          errorText=""
        />
        <Field
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={setPassword}
          placeholder="Mot de passe"
          boolean={authIsWrong}
          errorText=""
        />
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Envoyer
          </button>
        </div>
      </form>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        onClick={handleClick}
      >
        button
      </button>
    </>
  );
}
