import "./composant/InscriptionForm";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Toolbar from "./composant/Toolbar.jsx";
import Root from "./pages/root";
import Questions from "./pages/questions";
import Tags from "./pages/tags";
import Shoutbox from "./pages/shoutbox";

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

            <BrowserRouter>
            <Routes>
            <Route path="/" element={<Root/>}>
        <Route path="questions" element={<Questions/>}/>
        <Route path="tags" element={<Tags/>}/>
        <Route path="shoutbox" element={<Shoutbox/>}/>
        </Route>
</Routes>
</BrowserRouter>
        </>
    );

}