import InscriptionForm from "./InscriptionForm";
import amitier from "../public/amitier.jpg";

export default function InscriptionPage(props) {
  return (
    <div className="flex">
      <InscriptionForm />
      <img src={amitier} alt="" className="w-3/5" />
    </div>
  );
}
