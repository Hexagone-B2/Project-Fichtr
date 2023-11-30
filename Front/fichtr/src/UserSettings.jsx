import React, { useEffect, useState } from "react";
import axios from "axios";

function UserSettings() {

    const [username, setUsername] = useState("");
    const [mail, setMail] = useState("");
    const [bio, setBio] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [image, setImage] = useState("");

    useEffect(function () {
        axios.post("http://enzo-salson.fr:3001/api/getUnameMailBio")
            .then(response => {
                setUsername(response.data.username);
                setMail(response.data.mail);
                setBio(response.data.bio);
                setPassword(response.data.password);
                setPasswordConfirm(response.data.passwordConfirm);
                setImage(response.data.image);
            })
    }, []);

    const allowedChars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
        'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
        '!', '?', ',', '.', ';', '/', ':', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '']

    function handleSubmit(event) {
        let objectTest = new FormData();
        switch (event.target.name) {
            case "formText":
                if (username.length <= 50) {
                    objectTest.append("username", username);
                    objectTest.append("mail", mail);
                    objectTest.append("bio", bio);
                    console.log(objectTest);
                    axios.post("http://enzo-salson.fr:3001/api/updateUnameMailBio", {
                        "username": username,
                        "mail": mail,
                        "bio": bio
                    })
                }
                break;
            case "formImage":
                objectTest.append("newPhoto", image);
                console.log(objectTest);
                axios.post("http://enzo-salson.fr:3001/api/uploadProfilePic", {
                    "file": image,
                })
                break;
            case "formPassword":
                if (password === passwordConfirm) {
                    objectTest.append("password", password);
                    objectTest.append("passwordConfirm", passwordConfirm);
                    console.log(objectTest);
                    axios.post("http://enzo-salson.fr:3001/api/changePassword", {
                        "password:password": password,
                        "password:repeatPassword": passwordConfirm
                    })
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
                if (
                    allowedChars.includes(event.target.value.slice(-1)) == true) {
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
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex justify-center gap-10">
                <div className="flex flex-col items-center border border-2 h-fit w-64 p-5 gap-3">
                    <img src={image} alt="" className="rounded-full h-32 w-32" />
                    <h3><b>{username}</b></h3>
                    <p className="break-normal">{bio}</p>
                </div>
                <div className="flex flex-col gap-5">
                    <form onSubmit={handleSubmit} name="formText" className="flex flex-col justify-center align-center gap-1 p-5 border border-2" encType="multipart/form-data">
                        <div className="flex gap-2">
                            <label htmlFor="username" className="w-full">Modifier nom d'utilisateur</label>
                            <label htmlFor="mail" className="w-full">Modifier mail</label>
                        </div><br />
                        <div className="flex gap-2">
                            <input type="text" name="username" id="username" placeholder="Nouveau nom d'utilisateur" maxLength={50} onChange={handleChange} value={username} className="border border-slate-300 rounded bg-gray-100 border-2" />
                            <input type="email" name="mail" id="mail" placeholder="Nouveau mail" value={mail} onChange={handleChange} className="border border-slate-300 rounded bg-gray-100 border-2" />
                        </div>
                        <label htmlFor="bio" className="my-1">Modifier bio</label><br />
                        <textarea name="bio" id="bio" placeholder="Modifier la bio" onChange={handleChange} value={bio} className="border border-slate-300 rounded bg-gray-100 border-2 h-32 break-normal" /><br />
                        <div className="flex justify-between">
                            <input type="button" name="DeleteAccount" id="DeleteAccount" value="Supprimer le compte" className="bg-red-500 rounded-full p-3 font-semibold" />
                            <input type="submit" name="SubmitAccount" id="SubmitAccount" value="Valider les modifications" className="bg-green-500 rounded-full p-3 font-semibold" />
                        </div>
                    </form>
                    <form name="formImage" onSubmit={handleSubmit} className="flex flex-col gap-1 p-5 border border-2">
                        <label htmlFor="newPhoto" className="my-1">Changer photo de profil</label><br />
                        <div className="flex border border-gray-300 rounded m-w-fit">
                            <input type="file" name="newPhoto" id="image" onChange={handleChange} accept=".jpg, .jpeg, .png" className="rounded-l bg-gray-100" />
                            <input type="submit" name="SubmitAccount" id="SubmitAccount" value="Changer l'image" className="bg-green-500 rounded-r h-full p-2 font-semibold" />
                        </div>
                    </form>
                </div>
                <div>
                    <form name="formPassword" onSubmit={handleSubmit} className="flex flex-col gap-1 p-5 border border-2">
                        <label htmlFor="password">Modifier mot de passe</label><br />
                        <div className="flex flex-col gap-2">
                            <input type="password" name="password" id="password" placeholder="Nouveau mot de passe" onChange={handleChange} className="border border-slate-300 rounded bg-gray-100 border-2" />
                            <input type="password" name="passwordConfirm" id="passwordConfirm" placeholder="Confirmer mot de passe" onChange={handleChange} className="border border-slate-300 rounded bg-gray-100 border-2" />
                        </div><br />
                        <input type="submit" name="SubmitAccount" id="SubmitAccount" value="Valider les modifications" className="bg-green-500 rounded-full p-3 font-semibold" /><br />
                    </form>
                </div>
            </div>
            <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
        </div>
    )
}

export default UserSettings;