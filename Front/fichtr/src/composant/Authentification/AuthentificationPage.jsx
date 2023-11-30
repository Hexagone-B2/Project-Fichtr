import AuthentificationForm from "./AuthentificationForm";

export default function AuthentificationPage(props) {
  return (
    <div className="flex">
      <AuthentificationForm />
      <img src="./login/login.PNG" alt="" className="w-3/5" />;
    </div>
  );
}
