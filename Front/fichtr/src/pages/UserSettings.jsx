import React, { useEffect, useState } from "react";
import axios from "axios";

function UserSettings() {
  const [id, setId] = useState("");
  const [varPasswordErrorDiv, setPasswordVarErrorDiv] = useState(errorDiv(""));
  const [varUsernameErrorDiv, setUsernameVarErrorDiv] = useState(errorDiv(""));
  const [username, setUsername] = useState("");
  const [mail, setMail] = useState("");
  const [bio, setBio] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [image, setImage] = useState("");
  const [confirm, setConfirm] = useState(false);

  useEffect(function () {
    if (localStorage.getItem("authorization")) {
      const token = localStorage.getItem("authorization");
      const headers = { authorization: token };
      axios
          .post("https://dev.enzo-salson.fr/api/getUnameMailBio", {}, { headers })
          .then((response) => {
            setUsername(response.data.username);
            setMail(response.data.mail);
            setBio(response.data.bio);
            setImage(response.data.image);
            setId(response.data.id);
          });
    }
  }, []);

  const allowedChars = new RegExp('^[A-Za-z0-9!?,.;\/:]*$');

  function errorDiv(errorMessage) {
    return <div>{errorMessage}</div>;
  }

  function handleSubmit(event) {
    setUsernameVarErrorDiv(errorDiv(""));
    setPasswordVarErrorDiv(errorDiv(""));
    switch (event.target.name) {
      case "formText":
        if (username.length <= 50) {
          const token = localStorage.getItem("authorization");
          const headers = { authorization: token };
          axios.post(
              "https://dev.enzo-salson.fr/api/updateUnameMailBio",
              {
                username: username,
                mail: mail,
                bio: bio,
              },
              { headers }
          ).then(()=>{
            setConfirm(true);
            const timeout = setTimeout(()=>{
                setConfirm(false)
                clearTimeout(timeout);
            },2000)
          });
        } else {
          setUsernameVarErrorDiv(
              errorDiv("Le nom d'utilisateur est trop long")
          );
        }
        break;
      case "formImage":
        let objectTest = new FormData();
        const token = localStorage.getItem("authorization");
        const headers = { authorization: token };
        objectTest.append("file", image);
        axios.post(
            "https://dev.enzo-salson.fr/api/updateProfilePic",
            objectTest,
            {
              headers,
            }
        );
        break;
      case "formPassword":
      function passwordCheck() {
        let breakCond = true;
        password.split("").forEach((character) => {
          if (allowedChars.test(character) !== true) {
            breakCond = false;
          }
        });
        return breakCond;
      }
        if (passwordCheck() === true) {
          if (password === passwordConfirm) {
            const token = localStorage.getItem("authorization");
            const headers = { authorization: token };
            axios.post(
                "https://dev.enzo-salson.fr/api/modifyPassword",
                {
                  password: password,
                  repeatPassword: passwordConfirm,
                  id: "1",
                },
                { headers }
            );
          } else {
            setPasswordVarErrorDiv(
                errorDiv("Les mots de passe ne sont pas similaires")
            );
          }
        } else {
          setPasswordVarErrorDiv(
              errorDiv("Le mot de passe contient des caracteres non supportes")
          );
        }
        break;
      default:
        break;
    }
    event.preventDefault();
  }

  function handleChange(event) {
    switch (event.target.name) {
      case "username":
        if (allowedChars.test(event.target.value.slice(-1)) === true) {
          setUsername(event.target.value);
        }
        break;
      case "mail":
        setMail(event.target.value);
        break;
      case "bio":
        setBio(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      case "passwordConfirm":
        setPasswordConfirm(event.target.value);
        break;
      case "newPhoto":
        setImage(event.target.files[0]);
        break;
      default:
        break;
    }
  }

  const deleteAccount = ()=>{
    if (localStorage.getItem('authorization')){
      const headers = { authorization : localStorage.getItem('authorization') }
      axios.post('https://dev.enzo-salson.fr/api/deleteUser',{},{headers}).then(response=>{
        localStorage.removeItem('authorization');
        window.location.href="/";
      })
    }
  }

  return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center gap-10">
          <div className="flex flex-col items-center border-2 h-fit w-64 p-5 gap-3">
            <img
                crossOrigin="anonymous"
                src={"https://dev.enzo-salson.fr/api/getProfilePic?id=" + id}
                alt=""
                className="rounded-full h-32 w-32"
            />
            <h3>
              <b>{username}</b>
            </h3>
            <p className="break-normal">{bio}</p>
          </div>
          <div className="flex flex-col gap-5">
            <form
                onSubmit={handleSubmit}
                name="formText"
                className="flex flex-col justify-center align-center gap-1 p-5 border-2"
                encType="multipart/form-data"
            >
              {varUsernameErrorDiv}
              <div className="flex gap-2">
                <label htmlFor="username" className="w-full">
                  Modifier nom d'utilisateur
                </label>
                <label htmlFor="mail" className="w-full">
                  Modifier mail
                </label>
              </div>
              <br />
              <div className="flex gap-2">
                <input
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Nouveau nom d'utilisateur"
                    maxLength={50}
                    onChange={handleChange}
                    value={username}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
                <input
                    type="email"
                    name="mail"
                    id="mail"
                    placeholder="Nouveau mail"
                    value={mail}
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
              </div>
              <label htmlFor="bio" className="my-1">
                Modifier bio
              </label>
              <br />
              <textarea
                  name="bio"
                  id="bio"
                  placeholder="Modifier la bio"
                  onChange={handleChange}
                  value={bio}
                  className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
              />
              <br />
              <div className="flex justify-between">
                <input
                    type="button"
                    name="DeleteAccount"
                    onClick={deleteAccount}
                    id="DeleteAccount"
                    value="Supprimer le compte"
                    className={`text-white flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 bg-[#910000] hover:bg-[#BD0101]`}
                />
                <input
                    type="submit"
                    name="SubmitAccount"
                    id="SubmitAccount"
                    value={confirm ? "Profil enregistré" : "Valider les modifications"}
                    className={`flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 ${confirm ? 'bg-green-300 text-black' : 'bg-[#310046] hover:bg-[#510273] text-white'} `}
                />
              </div>
            </form>
            <form
                name="formImage"
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 p-5 border-2"
            >
              <label htmlFor="newPhoto" className="my-1">
                Changer photo de profil
              </label>
              <br />
              <div className="flex border border-gray-300 rounded m-w-fit">
                <input
                    type="file"
                    name="newPhoto"
                    id="image"
                    onChange={handleChange}
                    accept=".jpg, .jpeg, .png"
                    className="rounded-l bg-gray-100"
                />
                <input
                    type="submit"
                    name="SubmitAccount"
                    id="SubmitAccount"
                    value="Changer l'image"
                    className={`text-white flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 bg-[#310046] hover:bg-[#510273]`}
                />
              </div>
            </form>
          </div>
          <div>
            <form
                name="formPassword"
                onSubmit={handleSubmit}
                className="flex flex-col gap-1 p-5 border-2"
            >
              <label htmlFor="password">Modifier mot de passe</label>
              <br />
              {varPasswordErrorDiv}
              <div className="flex flex-col gap-2">
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Nouveau mot de passe"
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
                <input
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    placeholder="Confirmer mot de passe"
                    onChange={handleChange}
                    className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                />
              </div>
              <br />
              <input
                  type="submit"
                  name="SubmitAccount"
                  id="SubmitAccount"
                  value="Valider les modifications"
                  className={`text-white flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 bg-[#310046] hover:bg-[#510273]`}
              />
              <br />
            </form>
          </div>
        </div>
      </div>
  );
}

export default UserSettings;