import React, { useState } from 'react';
import axios from 'axios';

export default function FileUpload(){
    const [file, setFile] = useState(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFile(selectedFile);
    };

    const handleUpload = () => {
        if (file) {
            const formData = new FormData();
            formData.append('fileInput', file);

            axios.post('/upload', formData)
                .then(response => {
                    console.log('Fichier envoyé avec succès.', response);
                })
                .catch(error => {
                    console.error('Erreur lors de l\'envoi du fichier:', error);
                });
        } else {
            console.error('Veuillez sélectionner un fichier.');
        }
    };

    return (
        <div>
            <h2>Envoyer un fichier</h2>
            <input type="file" onChange={handleFileChange} />
            <button onClick={handleUpload}>Envoyer</button>
        </div>
    );
};

