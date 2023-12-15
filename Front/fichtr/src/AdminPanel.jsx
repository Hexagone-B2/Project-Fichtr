import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "./component/Button";
import Field from "./component/Field";

function AdminPanel() {

    const dropDownIcon = (
        <svg
            class="w-2.5 h-2.5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
        >
            <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
            />
        </svg>
    );

    const [addSujet, setAddSujet] = useState("");
    const [deleteSujet, setDeleteSujet] = useState("");
    const [subjects, setSubjects] = useState([]);

    function load() {
        axios.post("https://dev.enzo-salson.fr/api/getSubjects")
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
                setDeleteSujet(event.target.selectedIndex+1);
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
                axios.post("https://dev.enzo-salson.fr/api/createSubject", {
                    name: addSujet
                }, { headers })
                break;
            case "formDeleteSujet":
                axios.post("https://dev.enzo-salson.fr/api/deleteSubject", {
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
        <div className="flex justify-center items-center h-screen gap-10">
            <div className="flex flex-col gap-5 p-10 border border-gray-200">
                <form onSubmit={handleSubmit} name="formAddSujet" className="flex flex-col">
                    <label htmlFor="SujetA" className="mb-2">Entrer un nouveau sujet:</label>
                    <input
                        type="text"
                        name="SujetA"
                        id="SujetA"
                        onChange={handleChange}
                        placeholder="Nouveau sujet"
                        className={`shadow mb-8 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                    />
                    <Button title={"Ajouter"} type={"submit"} />
                </form>
                <hr />
                <form onSubmit={handleSubmit} name="formDeleteSujet" className="flex flex-col">
                    <label htmlFor="SujetD">Supprimer un sujet:</label>
                    <select id="SujetD" name="SujetD" onChange={handleChange} className="shadow appearance-none border rounded w-full mt-2 mb-8 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                        {subjects.map((element) => (
                            <option key={element.id}
                                id={element.id}
                                name={element.name}>{element.name}</option>
                        ))}
                    </select>
                    <Button title={"Suprimer"} type={"submit"} />
                </form>
            </div>
            <div className="flex flex-col text-center">
                <p className="mb-2">Moderer les posts</p>
                <Button title={"Acceder aux pages posts utilisateurs"} />
            </div>
        </div>
    )
}

export default AdminPanel;