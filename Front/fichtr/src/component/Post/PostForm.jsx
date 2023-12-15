import { useEffect, useState } from "react";
import { Dropdown, DropdownItem } from 'flowbite-react';
import axios from "axios";
import Button from "../Button";
import Tag from "../Tag";

const dropDownIcon = (
    <svg
        className="w-2.5 h-2.5"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 10 6"
    >
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 4 4 4-4"
        />
    </svg>
);

function ScrollSubject() {
    const [SubjectList, SetSubjectList] = useState([]);
    const [Subject, SetSubject] = useState();

    function load() {

        axios
            .post("https://dev.enzo-salson.fr/api/getSubjects")
            .then((response) => {
                console.log(response.data[0].name);
                SetSubjectList(response.data);
            });
    }

    useEffect(load, []);

    function handleSubjectSelect(value) {
        SetSubject(value);
    }

    return (
        <>
            <div className="flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 bg-[#310046] hover:bg-[#510273] text-white">
                <Dropdown 
                    label="Sujets"
                    dismissOnClick={false}
                >
                    {SubjectList.map((element) => (
                        <DropdownItem>{element.name}</DropdownItem>
                    ))}
                </Dropdown>    
            </div>
        </>
    );
}

function SubjectItem({ id, name, handleSubjectSelect }) {
    return (
        <li>
            <div
                className="flex p-2 rounded hover:bg-gray-100"
                onChange={() => handleSubjectSelect(id)}
            >
                <div className="flex items-center h-5">
                    <input
                        id={"helper-radio-" + id}
                        name="helper-radio"
                        type="radio"
                        value=""
                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 focus:ring-2"
                    />
                </div>
                <div className="ms-2 text-sm">
                    <label
                        htmlFor={"helper-radio-" + id}
                        className="font-medium text-gray-900"
                    >
                        <div>{name}</div>
                    </label>
                </div>
            </div>
        </li>
    );
}

function ScrollTags() {
    const [TagList, SetTagList] = useState(["Javascript", "React", "NodeJS"]);

    return (
        <div className="flex justify-center rounded items-center min-w-[8rem] min-h-[2.5rem] gap-2 px-2 bg-[#310046] hover:bg-[#510273] text-white">
            <Dropdown
                label="Tags"
                dismissOnClick={false}
            >
                {TagList.map((element) => (
                    <DropdownItem>{element}</DropdownItem>
                ))}
            </Dropdown>
        </div>
    );
}


function TagItem({ name }) {
    return (
        <DropdownItem>
            {name}
        </DropdownItem>
    );
}

export default function PostForm() {
    return (
        <form>
            <div
                className="w-full mx-auto bg-white border border-gray-200 rounded-lg p-4 my-40 relative"
                style={{ width: 1200 }}
            >
                <div className="flex items-center justify-between px-3 py-2 border-b">
                    <div className="flex flex-wrap items-center divide-gray-200 sm:divide-x sm:rtl:divide-x-reverse">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse sm:pe-4">
                            <button
                                type="button"
                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                                </svg>
                                <span className="sr-only">Upload image</span>
                            </button>
                            <button
                                type="button"
                                className="p-2 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                            >
                                <svg
                                    className="w-4 h-4"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 16 20"
                                >
                                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                    <path d="M14.067 0H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.933-2ZM6.709 13.809a1 1 0 1 1-1.418 1.409l-2-2.013a1 1 0 0 1 0-1.412l2-2a1 1 0 0 1 1.414 1.414L5.412 12.5l1.297 1.309Zm6-.6-2 2.013a1 1 0 1 1-1.418-1.409l1.3-1.307-1.295-1.295a1 1 0 0 1 1.414-1.414l2 2a1 1 0 0 1-.001 1.408v.004Z" />
                                </svg>
                                <span className="sr-only">Format code</span>
                            </button>
                            <ScrollSubject />
                            <ScrollTags />
                        </div>
                    </div>
                </div>
                <div className="px-4 py-2 bg-white rounded-b-lg">
                    <label htmlFor="editor" className="sr-only">
                        Publish post
                    </label>
                    <textarea
                        id="editor"
                        rows="8"
                        className="block w-full px-0 text-sm text-gray-800 bg-white border-0 focus:ring-0"
                        placeholder="Write an article..."
                        required
                    ></textarea>
                </div>
                <Button title={"Publish post"} theme={"primary"} type={"submit"} />
            </div>
        </form>
    );
}
