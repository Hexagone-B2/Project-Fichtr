import "./composant/InscriptionForm";
import Toolbar from "./composant/Toolbar.jsx";
import AppRouter from "./AppRouter";

export default function App() {
    return (
        <>

        <Toolbar>
            <div>
                HexaCorp
            </div>
        </Toolbar>

            <div className="App">
            <header className="App-header">

            </header>
            </div>

            <AppRouter/>
        </>
    );
}