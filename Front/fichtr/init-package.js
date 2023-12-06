const { execSync } = require("child_process");
const fs = require("fs");
const os = require("os");

// Utilisez 'rmdir' sur Windows, 'rm' sur les systèmes UNIX
const removeDirCommand = os.platform() === "win32" ? "rmdir /s /q" : "rm -rf";

// Utilisez 'del' sur Windows, 'rm' sur les systèmes UNIX
const removeFileCommand = os.platform() === "win32" ? "del" : "rm";

function removeDirectoryIfExists(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    console.log(`Suppression du dossier ${directoryPath}`);
    execSync(`${removeDirCommand} ${directoryPath}`);
    console.log(`Dossier ${directoryPath} supprimé avec succès`);
  } else {
    console.log(`Le dossier ${directoryPath} n'existe pas`);
  }
}

function removeFileIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`Suppression du fichier ${filePath}`);
    execSync(`${removeFileCommand} ${filePath}`);
    console.log(`Fichier ${filePath} supprimé avec succès`);
  } else {
    console.log(`Le fichier ${filePath} n'existe pas`);
  }
}

// Contenu du package.json
const packageJsonContent = `{
  "name": "fichtr",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "axios": "^1.6.2",
    "flowbite": "^2.2.0",
    "localforage": "^1.10.0",
    "match-sorter": "^6.3.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-router-dom": "^6.20.0",
    "react-scripts": "^5.0.1",
    "sort-by": "^1.2.0",
    "tailwind": "^4.0.0",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "tailwindcss": "^3.3.5"
  }
}`;

console.log("Début du script...");

console.log("#1 Suppression des fichiers");
removeDirectoryIfExists("node_modules");
removeFileIfExists("package.json");
removeFileIfExists("package-lock.json");

console.log("#2 Écriture du fichier package.json");
const packageJsonPath = "package.json";
fs.writeFileSync(packageJsonPath, packageJsonContent);
console.log("Package.json écrit avec succès");

// Exécuter la commande npm install
try {
  console.log("#3 installation des packages (npm install)");
  execSync("npm install");
} catch (error) {
  console.error("Erreur lors de l'exécution de npm install :", error.message);
}

console.log("Packages installés avec succès !");
