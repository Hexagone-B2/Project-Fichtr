import "./composant/InscriptionForm";
import Toolbar from "./composant/Toolbar.jsx";
import RightNavBar from "./composant/RightNavBar";
import AppRouter from './composant/AppRouter.jsx';
import Post from './composant/Post.jsx';


export default function App() {
    return (
        <>
            <Toolbar/>

            <RightNavBar>

            </RightNavBar>

            <AppRouter />

            <div className="flex justify-center items-center h-screen">
                <Post
                    id={1}
                    username="toto"
                />
                <Post
                    id={1}
                    username="toto"
                />
            </div>
        </>
    );

}