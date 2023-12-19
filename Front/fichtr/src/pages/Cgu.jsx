import RightNavBar from "../component/Bar/RightNavBar";
import NavbarLeft from "../component/Bar/LeftNavbar";
import Toolbar from "../component/Bar/Toolbar";
import { useState } from "react";

export default function Cgu(props) {
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
            <h1 className="text-4xl font-bold text-[#310046] mt-8 ml-16">Conditions générales et cookies</h1>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 1 : Politique de confidentialité</h2>
            <p className=" mt-4 ml-24">En accédant à ce forum et en participant à ses discussions, vous reconnaissez avoir lu, compris et accepté sans réserve les présentes CGU. Ces conditions peuvent être mises à jour périodiquement, et il est de votre responsabilité de vérifier régulièrement toute modification. En continuant à utiliser le forum après la publication de modifications, vous consentez à être lié par ces modifications.</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 2 : Responsabilités des Utilisateurs</h2>
            <p className=" mt-4 ml-24">Vous êtes responsable du contenu que vous publiez sur le forum. Vous garantissez que vos contributions respectent les droits d'auteur et autres droits de propriété intellectuelle. Fichtr se réserve le droit de supprimer tout contenu en violation des présentes CGU.</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 3 : Politique de confidentialité</h2>
            <p className=" mt-4 ml-24">Nous collectons vos informations d'inscription et d'utilisation pour améliorer votre expérience sur le forum. Vos données ne sont ni vendues ni louées, mais peuvent être divulguées en cas de nécessité légale. Nous utilisons des cookies pour personnaliser le contenu</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 4 : Propriété intellectuelle</h2>
            <p className=" mt-4 ml-24">Le contenu publié sur ce forum, y compris les contributions des utilisateurs, est protégé par des droits de propriété intellectuelle. En partageant du contenu, vous accordez à Fichtr une licence non exclusive pour l'utiliser. Il est interdit de copier, reproduire ou distribuer le contenu sans autorisation. Les marques, logos et éléments graphiques appartiennent à leurs propriétaires respectifs.</p>
            <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 5 : Droits des utilisateurs</h2>
            <div className="mt-8 ml-24">Conformément à la réglementation en vigueur, les Utilisateurs disposent des droits suivants : 
              <ul className="mt-4 ml-16">
                <li>1/ droit d'accès ;</li>
                <li>2/ droit de rectification ;</li>
                <li>3/ droit d'effacement ;</li>
                <li>4/ droit à la limitation du traitement ;</li>
                <li>5/ droit d'opposition ;</li>
                <li>6/ droit de retirer votre constement ;</li>
             </ul>
           </div>
           <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 6 : Cookies</h2>
           <p className=" mt-4 ml-24">Nous utilisons des cookies et des technologies similaires pour améliorer votre expérience sur Fichtr . Vous pouvez configurer votre navigateur pour refuser les cookies, mais cela pourrait affecter certaines fonctionnalités du forum.</p>
           <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 7 : Inscription et compte utilisateur </h2>
           <p className=" mt-4 ml-24">En vous inscrivant sur Fichtr, assurez-vous de fournir des informations exactes, gardez votre mot de passe confidentiel, et signalez toute utilisation non autorisée. Nous réservons le droit de résilier des comptes en violation des règles.</p> 
           <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 8 : Modération </h2>
           <p className=" mt-4 ml-24">Fichtr est modéré pour assurer un environnement respectueux. Nous nous réservons le droit de supprimer tout contenu contraire aux règles. Des mesures, y compris la désactivation de comptes, peuvent être prises en cas de non-respect des conditions d'utilisation. Merci de contribuer à un espace collaboratif.</p>
           <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 9 : Utilisation du site </h2>
           <p className=" mt-4 ml-24">En utilisantn Fichtr, soyez constructif et respectueux. Évitez le harcèlement et veillez à partager un contenu approprié. Vous êtes responsable de vos contributions. Fichtr peut modérer ou supprimer tout contenu en violation des règles pour maintenir un environnement positif. Contribuez à une expérience collaborative enrichissante.</p>
           <h2 className="text-l font-bold text-[#310046] mt-8 ml-24">Article 10 : Droit applicable </h2>
           <p className=" mt-4 ml-24">En utilisant Fichtr, vous acceptez que ces conditions d'utilisation soient régies par les lois en vigueur dans juridiction applicable. Tout litige relatif à l'utilisation du forum sera soumis à la juridiction exclusive des tribunaux . Merci de respecter ces dispositions légales lors de votre participation sur notre plateforme.</p>
          </div>
        </div>

        <div className="top-[8rem] relative bg-[#fafafa]">
          <RightNavBar />
        </div>
      </div>
    </>
  );
}