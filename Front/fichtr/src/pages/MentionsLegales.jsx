import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import { useState } from "react";

export default function MentionsLegales (props) {
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
            <h1 className="text-4xl font-bold text-[#310046] mt-8 ml-16">Mentions légales</h1>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 1 : Editeur</h2>
            <div className=" mt-4 ml-24">
                <ul className="mt-8 ml-16">
                    <li>La cour des miracles</li>
                    <li>Numéro SIRET : 021 020 233 63000</li>
                    <li>Domiciliée : 22 ALL Alan Turing, 63000 Clermont-Ferrand </li>
                    <li>Adresse email : lacourdesmiracles.hexagone@gmail.com </li>
               </ul> 
            </div>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 2 : Directeur de la publication</h2>
            <p className=" mt-4 ml-24">Le directeur de la publication du site Fichtr est : La cour des miracles </p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 3 : Hebérgement</h2>
            <p className=" mt-4 ml-24">Le Site Fichtr est hébergé par OVH , dont le siège social est OVH (www.ovhcloud.com) Adresse : 2 rue Kellermann, 59100 Roubaix, France Téléphone : +33 9 72 10 10 07</p>
          </div>
        </div>

        <div className="top-[8rem] relative bg-[#fafafa]">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}