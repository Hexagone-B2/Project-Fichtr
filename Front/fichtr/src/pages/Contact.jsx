import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import { useState } from "react";

export default function Contact (props) {
  let [nb, setNb] = useState(0);
  return (
    <>
      <Toolbar />
      <div className="flex flex-row w-screen justify-between">
        <div className="top-[8rem] relative">
          <NavbarLeft />
        </div>

        <div className="z-0 top-[8rem] relative w-full overflow-hidden bg-[#fafafa]">
          <div className="max-w-2xl p-4">
            <h1 className="text-4xl font-bold text-[#310046] mt-8 ml-16">Contacter Fichtr</h1>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Notre Adresse : </h2>
            <p className=" mt-4 ml-24"> 22 ALL Alan Turing, 63000 Clermont-Ferrand</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Nous contacter par email : </h2>
            <p className=" mt-4 ml-24">lacourdesmiracles.hexagone@gmail.com</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Nous contacter par téléphone : </h2>
            <p className=" mt-4 ml-24">Tél : +33 7 03 05 20 03 </p>
          </div>
        </div>

        <div className="top-[8rem] relative bg-[#fafafa]">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}