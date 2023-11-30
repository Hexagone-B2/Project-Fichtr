import "./composant/InscriptionForm";
import Toolbar from "./composant/Toolbar.jsx";

import Root from "./pages/root";
import Questions from "./pages/questions";
import Tags from "./pages/tags";
import Shoutbox from "./pages/shoutbox";
import ConnectedToolbar from "./composant/ConnectedToolbar.jsx";

import AppRouter from "./composant/AppRouter.jsx";


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