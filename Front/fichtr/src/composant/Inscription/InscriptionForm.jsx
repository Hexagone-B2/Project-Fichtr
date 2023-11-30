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
  let [repeatPassIsWrong, setRepeatPassIsWrong] = useState(false);
  let [emailIsWrong, setEmailIsWrong] = useState(false);
  let [userNameIsWrong, setUserNameIsWrong] = useState(false);
  let [firstNameIsWrong, setFirstNameIsWrong] = useState(false);
  let [lastNameIsWrong, setLastNameIsWrong] = useState(false);

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
    const regexEmail =
      /^(?=[\s\S]{1,300}$)[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/i;
    const regexPassword =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!?,.;/:*])[A-Za-z\d!?,.;/:*]{10,1024}$/;
    setPassIsWrong(!regexPassword.test(password));
    setEmailIsWrong(!regexEmail.test(email));
    setRepeatPassIsWrong(password !== repeatPassword);
    setUserNameIsWrong(userName.length > 50);
    setFirstNameIsWrong(firstName.length > 50);
    setLastNameIsWrong(lastName.length > 50);
    if (
      !(
        repeatPassIsWrong ||
        emailIsWrong ||
        userNameIsWrong ||
        passIsWrong ||
        firstNameIsWrong ||
        lastNameIsWrong
      )
    ) {
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
          if (res.code === 200) {
            console.log("succes");
          }
          //code username non dispo
          //mail non dispo
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
      <div className="mb-4">
        <input
          className={`shadow appearance-none border ${
            userNameIsWrong ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="userName"
          id="userName"
          value={userName}
          onChange={handleChange}
          placeholder="Nom d'utilisateur"
          required
        />
        <p class="text-red-500 text-xs italic">
          {userNameIsWrong ? "Votre nom d'utilisateur est trop long" : <br />}
        </p>
      </div>
      <div className="mb-4">
        <input
          className={`shadow appearance-none border ${
            firstNameIsWrong ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="firstName"
          id="firstName"
          value={firstName}
          onChange={handleChange}
          placeholder="Prénom"
          required
        />
        <p class="text-red-500 text-xs italic">
          {firstNameIsWrong ? "Votre prenom est trop long" : <br />}
        </p>
      </div>
      <div className="mb-4">
        <input
          className={`shadow appearance-none border ${
            lastNameIsWrong ? "border-red-500" : ""
          } rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
          type="text"
          name="lastName"
          id="lastName"
          value={lastName}
          onChange={handleChange}
          placeholder="Nom de famille"
          required
        />
        <p class="text-red-500 text-xs italic">
          {lastNameIsWrong ? "Votre nom de famille est trop long" : <br />}
        </p>
      </div>
      <div className="mb-4">
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
          {emailIsWrong ? "Entrez une adresse mail valide" : <br />}
        </p>
      </div>
      <div className="mb-4">
        <input
          className={`shadow appearance-none border ${
            repeatPassIsWrong ? "border-red-500" : ""
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
        <p class="text-red-500 text-xs italic">
          {passIsWrong ? (
            "Le mot de passe doit contenir au moins 1 chiffre, 1 minuscule, 1 majuscule, 1 caractère spécial (!?,.;/:*) et faire 10 caractères minimum"
          ) : (
            <br />
          )}
        </p>
      </div>
      <div className="mb-4">
        <input
          className={`shadow appearance-none border ${
            repeatPassIsWrong ? "border-red-500" : ""
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
          {repeatPassIsWrong ? (
            "Les mots de passe doivent être similaires"
          ) : (
            <br />
          )}
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
