import InscriptionForm from "./InscriptionForm";

export default function InscriptionPage(props) {
  return (
    <div className="flex">
      <InscriptionForm />
      <img src={"/inscription/amitierv2.PNG"} alt="amitier" className="w-3/5" />
    </div>
  );
}
