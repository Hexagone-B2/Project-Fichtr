const { execSync } = require("child_process");
const fs = require("fs");
const os = require("os");

// Utilisez 'rmdir' sur Windows, 'rm' sur les systèmes UNIX
const removeDirCommand = os.platform() === "win32" ? "rmdir /s /q" : "rm -rf";

// Utilisez 'del' sur Windows, 'rm' sur les systèmes UNIX
const removeFileCommand = os.platform() === "win32" ? "del" : "rm";

// Fonction pour supprimer un dossier s'il existe
function removeDirectoryIfExists(directoryPath) {
  if (fs.existsSync(directoryPath)) {
    console.log(`\x1b[36mSuppression du dossier ${directoryPath}...\x1b[0m`);
    execSync(`${removeDirCommand} ${directoryPath}`);
    console.log(`\x1b[32mDossier ${directoryPath} supprimé avec succès\x1b[0m`);
  } else {
    console.log(`\x1b[33mLe dossier ${directoryPath} n'existe pas\x1b[0m`);
  }
}

// Fonction pour supprimer un fichier s'il existe
function removeFileIfExists(filePath) {
  if (fs.existsSync(filePath)) {
    console.log(`\x1b[36mSuppression du fichier ${filePath}...\x1b[0m`);
    execSync(`${removeFileCommand} ${filePath}`);
    console.log(`\x1b[32mFichier ${filePath} supprimé avec succès\x1b[0m`);
  } else {
    console.log(`\x1b[33mLe fichier ${filePath} n'existe pas\x1b[0m`);
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
        "flowbite-react": "^0.7.0",
        "react": "^18.2.0",
        "react-dom": "^18.2.0",
        "react-router-dom": "^6.20.1",
        "react-scripts": "5.0.1",
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
        "autoprefixer": "^10.4.16",
        "postcss": "^8.4.32",
        "tailwindcss": "^3.3.6"
    }
}
`;

console.log("\x1b[34mDébut du script...\x1b[0m");

console.log("\x1b[34m#1 Suppression des fichiers\x1b[0m");
removeDirectoryIfExists("node_modules");
removeFileIfExists("package.json");
removeFileIfExists("package-lock.json");

console.log("\x1b[34m#2 Écriture du fichier package.json...\x1b[0m");
const packageJsonPath = "package.json";
fs.writeFileSync(packageJsonPath, packageJsonContent);
console.log("\x1b[32mPackage.json écrit avec succès\x1b[0m");

// Exécuter la commande npm install
try {
  console.log("\x1b[34m#3 installation des packages (npm install)...\x1b[0m");
  execSync("npm install");
} catch (error) {
  console.error(
    "\x1b[31mErreur lors de l'exécution de npm install :",
    error.message,
    "\x1b[0m"
  );
}

console.log("\x1b[32mPackages installés avec succès !\x1b[0m");
