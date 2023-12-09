import Tag from "./Tag";

function RightNavBar(tag) {
  return (
    <div className="flex justify-end items-start sticky top-40 pr-8 mt-4 right-0 ">
      <ul className="w-60 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <li className="w-full px-6 py-6 border-b border-gray-200 rounded-t-lg dark:border-gray-600">
          <div className="flex items-center">
            <img src={"/img/star.svg"} alt="étoile" className="w-5 h-5 mr-2" />
            Tendances
          </div>
          <br />
          <hr />
          <br />
          <Tag title={"Shift"} />
          <Tag title={"Ctrl"} />
          <Tag title={"Tab"} />

          <br />
          <br />
          <br />
          <br />
          <div className="flex items-center">
            <img
              src={"/img/database.svg"}
              alt="data"
              className="w-5 h-5 mr-2"
            />
            Statistiques
          </div>
          <br />
          <hr />
          <br />

          <p>Discussions : </p>
          <p>Messages : </p>
          <p>Membres : </p>
          <p>Dernier Membre : </p>
        </li>
      </ul>
    </div>
  );
}

export default RightNavBar;
