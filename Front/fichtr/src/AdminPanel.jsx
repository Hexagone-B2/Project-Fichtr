import React, { useEffect, useState } from "react";
import axios from "axios";

function AdminPanel() {

    const [addSujet, setAddSujet] = useState("");
    const [deleteSujet, setDeleteSujet] = useState("");
    const [subjects, setSubjects] = useState([]);

    function load() {
        axios.post("http://enzo-salson.fr:3001/api/getSubjects")
            .then(response => {
                setSubjects(response.data.list);
            })
    }

    useEffect(load, []);

    function handleChange(event) {
        switch (event.target.name) {
            case "SujetA":
                setAddSujet(event.target.value);
                break;
            case "SujetD":
                setDeleteSujet(event.target.value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        const token = localStorage.getItem("authorization");
        const headers = { authorization: token };
        switch (event.target.name) {
            case "formAddSujet":
                axios.post("http://enzo-salson.fr:3001/api/createSubject", {
                    name: addSujet
                }, { headers })
                break;
            case "formDeleteSujet":
                axios.post("http://enzo-salson.fr:3001/api/deleteSubject", {
                    id: deleteSujet
                }, { headers })
                break;
            default:
                break;
        }
        load();
        event.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSubmit} name="formAddSujet">
                <label htmlFor="SujetA">Entrer un nouveau sujet:</label>
                <input type="text" name="SujetA" id="SujetA" onChange={handleChange} />
                <input type="submit" value="Ajouter" />
            </form>
            <form onSubmit={handleSubmit} name="formDeleteSujet">
                <label htmlFor="SujetD">Supprimer un sujet:</label>
                <select name="SujetD" id="SujetD" onChange={handleChange}>
                    <option value="test1">Choisir une valeur</option>
                    {subjects.map((element) => (<option id={element.id} key={element.id} value={element.id}>{element.name}</option>))}
                </select>
                <input type="submit" value="Supprimer" />
            </form>
            {/* <button>acceder au posts des utilisateurs</button> */}
        </div>
    )
}

export default AdminPanel;