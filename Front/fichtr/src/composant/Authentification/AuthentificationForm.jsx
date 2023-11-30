import { useState } from "react";
import axios from "axios";

export default function AuthentificationForm(props) {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");

  function handleChange(event) {
    switch (event.target.name) {
      case "userName":
        setUserName(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    const userName = event.target[0].value;
    const password = event.target[1].value;
    const headers = {
      "Content-Type": "application/json",
    };
    var to_send = {
      username: userName,
      password: password,
    };
    axios
      .post("http://10.2.7.20:3000/api/login", to_send, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    event.preventDefault();
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="inscription-form w-2/5 m-24"
    >
      <div className="mb-4">
        <label
          htmlFor="userName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nom d'utilisateur
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Mot de passe
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Envoyer
        </button>
      </div>
    </form>
  );
}
