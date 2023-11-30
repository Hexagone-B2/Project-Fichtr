import axios from "axios";

const { useState } = require("react");

export default function InscriptionForm(props) {
  let [firstName, setFirstName] = useState("");
  let [lastName, setLastName] = useState("");
  let [userName, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [repeatPassword, setRepeatPassword] = useState("");
  let [passIsWrong, setPassIsWrong] = useState(false);
  let [emailIsWrong, setEmailIsWrong] = useState(false);

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
    const regexEmail = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    setEmailIsWrong(!regexEmail.test(email));
    setPassIsWrong(password !== repeatPassword);
    if (!(passIsWrong || emailIsWrong)) {
      var to_send = {
        firstname: firstName,
        lastname: lastName,
        username: userName,
        mail: email,
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
    }
    event.preventDefault();
  }

  return (
    <form
      method="post"
      onSubmit={handleSubmit}
      className="inscription-form w-2/5 m-24 flex flex-col"
    >
      <div className="mb-8">
        <label
          htmlFor="userName"
          className="block text-gray-700 text-sm font-bold mb-2"
        >
          Nom d'utilisateur
        </label>
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
      </div>
      <div className="mb-8">
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
      </div>
      <div className="mb-8">
        <input
          className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Nom de famille"
          required
        />
      </div>
      <div className="mb-8">
        <input
          className={`shadow appearance-none border ${
            emailIsWrong ? "border-red-500" : ""
          }rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <p class="text-red-500 text-xs italic">
          {emailIsWrong ? "Entrez une adresse mail valide" : ""}
        </p>
      </div>
      <div className="mb-8">
        <input
          className={`shadow appearance-none border ${
            passIsWrong ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
          placeholder="Mot de passe"
          required
          minLength={"password"}
          maxLength={"password"}
        />
      </div>
      <div className="mb-8">
        <input
          className={`shadow appearance-none border ${
            passIsWrong ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          value={repeatPassword}
          onChange={handleChange}
          placeholder="Répéter mot de passe"
          required
          minLength={"password"}
          maxLength={"password"}
        />
        <p class="text-red-500 text-xs italic">
          {passIsWrong ? "Les mots de passe doivent être similaires" : <br />}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-[#310046] hover:bg-[#470863] text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Inscription
        </button>
      </div>
    </form>
  );
}
