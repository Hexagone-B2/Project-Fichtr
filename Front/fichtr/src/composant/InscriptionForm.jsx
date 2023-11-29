import axios from "axios";

const { useState } = require("react");

export default function InscriptionForm(props) {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [repeatPassword, setRepeatPassword] = useState("");

  function handleChange(event) {
    switch (event.target.name) {
      case "firstName":
        setFirstName(event.target.value);
        break;
      case "lastName":
        setLastName(event.target.value);
        break;
      case "userName":
        setUserName(event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "repeatPassword":
        setRepeatPassword(event.target.value);
        break;
      default:
        break;
    }
  }

  function handleSubmit(event) {
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const userName = event.target[2].value;
    const email = event.target[3].value;
    const password = event.target[4].value;
    const repeatPassword = event.target[5].value;

    // if (password !== repeatPassword) {
    //   console.log("ahahah");
    // } else {
    var to_send = {
      firstname: firstName,
      lastname: lastName,
      username: userName,
      email: email,
      password: password,
      repeatpassword: repeatPassword,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    axios
      .post("http://10.2.7.20:3000/api/register", to_send, { headers })
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    // }
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
          htmlFor="firstName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Prénom
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="lastName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nom de famille
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
        />
      </div>
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
          htmlFor="email"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Email
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          name="email"
          id="email"
          value={email}
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
      <div className="mb-4">
        <label
          htmlFor="repeatPassword"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Répéter mot de passe
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          value={repeatPassword}
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
