import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../Provider/AuthContext";
import Button from "../Button";
import ProfilePicture from "../User/ProfilePic";
import {Navbar, TextInput} from "flowbite-react";
import {HiSearch} from "react-icons/hi";

const plusCircle = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-6 h-6"
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
        />
    </svg>
);

function Toolbar() {
    const {isAuthenticated, userId} = useContext(AuthContext);

    return (
            <Navbar fluid className="fixed w-full z-10 max-h-32 top-0 shadow">
                <Navbar.Brand as={Link} href="/">
                    <img src={"/img/logo.png"} alt="logo" className="w-44"/>
                </Navbar.Brand>
                <form className={isAuthenticated ? "flex items-center mx-auto" : "flex items-center"}>
                    <TextInput icon={HiSearch} placeHolder="Faire une recherche..."></TextInput>
                </form>
                {isAuthenticated ? (
                    <>
                        <Button
                            title={"Poser une question"}
                            theme={"primary"}
                            icon={plusCircle}
                        />
                        <Link to={"/profile"}>
                            <ProfilePicture size={"small"} userId={userId}/>
                        </Link>
                    </>
                ) : (
                    <div className="flex space-x-2">
                        <Link to={"/login"}>
                            <Button
                                title={"Se connecter"}
                                type={"button"}
                                theme={"primary"}
                            />
                        </Link>
                        <Link to={"/register"} type="button">
                            <Button title={"Inscription"} type={"button"} theme={"pale"}/>
                        </Link>
                    </div>
                )}
            </Navbar>
    );
}

export default Toolbar;
