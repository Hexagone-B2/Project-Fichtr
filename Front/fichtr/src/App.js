import ConnectedToolbar from "./composant/ConnectedToolbar.jsx";
import "./composant/InscriptionForm";
import Toolbar from "./composant/Toolbar.jsx";
import RightNavBar from "./composant/RightNavBar";
import Toolbar from "./composant/Toolbar.jsx";
import AppRouter from "./composant/AppRouter.jsx";

import AppRouter from './composant/AppRouter.jsx';
import Post from './composant/Post.jsx';


export default function App() {
    return (
        <>
            <Toolbar>
                <div>
                    HexaCorp
                </div>
            </Toolbar>

            <ConnectedToolbar>

            </ConnectedToolbar>

            <RightNavBar>

            </RightNavBar>

            <AppRouter />

            <div className="flex justify-center items-center h-screen">
                <Post
                    id={1}
                    username="toto"
                />
            </div>
        </>
    );

}