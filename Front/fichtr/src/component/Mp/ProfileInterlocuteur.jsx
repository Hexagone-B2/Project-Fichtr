function ProfileInterlocuteur(id, username) {
    return (

        <div>

            <div className="mr-20 mt-32">
                <div
                    className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow mr-40">
                    <div className="flex justify-end px-4 pt-4">
                        <div
                            id="dropdown"
                            className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44"
                        >

                        </div>
                    </div>
                    <div className="flex flex-col items-center pb-10">
                        <img
                            className="w-24 h-24 mb-3 rounded-full shadow-lg"
                            src="./img/placeholder.webp"
                            alt="image utilisateur"
                        />
                        <h5 className="mb-1 text-xl font-medium text-gray-900 ">
                            Mimie Mathy
                        </h5>

                    </div>
                </div>
            </div>

        </div>

    );
}

export default ProfileInterlocuteur;
