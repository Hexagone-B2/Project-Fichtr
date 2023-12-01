import ConnectedToolbar from "./composant/ConnectedToolbar.jsx";
import RightNavBar from "./composant/RightNavBar";
import Toolbar from "./composant/Toolbar.jsx";
import AppRouter from "./composant/AppRouter.jsx";
import PostForm from "./composant/PostForm.jsx";

export default function App() {
    return (
        <>
            <Toolbar>
                <div>
                    HexaCorp
                </div>
            </Toolbar>

            <ConnectedToolbar/>

            <RightNavBar/>

            <AppRouter />

            <PostForm/>


        </>
    );

}