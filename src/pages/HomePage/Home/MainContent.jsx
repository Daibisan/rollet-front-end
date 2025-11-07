import { useState } from "react";
import Papa from "papaparse";
import RolletLogo from '../../../components/ui/RolletLogo';

export default function MainContent({ setTeams }) {
    const [popUpClosed, setPopUpClosed] = useState(true);
    const [persons, setPersons] = useState([
        {
            person_name: "----------------",
            person_role: "-",
        },
    ]);
    const [nameInputValue, setNameInputValue] = useState("");
    const [roleInputValue, setRoleInputValue] = useState("");

    function addPerson(csv_persons_array = null) {
        const newPersons =
            persons.length === 1 && persons[0].person_role === "-"
                ? csv_persons_array
                    ? [...csv_persons_array]
                    : [
                          {
                              person_name: nameInputValue,
                              person_role: roleInputValue,
                          },
                      ]
                : csv_persons_array
                  ? [...persons, ...csv_persons_array]
                  : [
                        ...persons,
                        {
                            person_name: nameInputValue,
                            person_role: roleInputValue,
                        },
                    ];
        setPersons(newPersons);
    }

    function importCsvHandler(e) {
        // Get csv file from clicked input
        const file = e.target.files[0];
        Papa.parse(file, {
            header: true,
            // Change name & role header -> person_name & person_role (to ensure same properties' name as person in persons array)
            transformHeader: (header) => {
                const cleanHeader = header.trim().replace(/^\uFEFF/, "");
                if (["Name", "name", "Nama", "nama"].includes(cleanHeader)) {
                    return "person_name";
                }
                if (["Role", "role"].includes(cleanHeader)) {
                    return "person_role";
                }
                return header;
            },
            // Handling csv covert results
            complete: (results) => {
                const csv_persons_array = results.data;

                // will be error if csv is empty AND csv column is not include name&role AND csv column > 2
                if (csv_persons_array.length > 0) {
                    const person_keys = Object.keys(csv_persons_array[0]);
                    if (
                        person_keys.length === 2 &&
                        person_keys.includes("person_name") &&
                        person_keys.includes("person_role")
                    ) {
                        addPerson(csv_persons_array);
                    } else {
                        alert(`CSV File's format is wrong`);
                    }
                } else {
                    alert(`CSV File is empty`);
                }

                // Clean csv file in HTML input
                e.target.value = null;
            },
        });
    }

    function displayTeamsHandler() {
        const newTeams = [
            [
                {
                    person_name: "Dibi",
                    person_role: "FE",
                },
                {
                    person_name: "Muza",
                    person_role: "BE",
                },
            ],
            [
                {
                    person_name: "Syan",
                    person_role: "UI/UX",
                },
                {
                    person_name: "Bariza",
                    person_role: "PM",
                },
            ],
        ];
        setTeams(newTeams);
    }

    return (
        <>
            {/* Main-content */}
            <section className="lg:flex lg:flex-3 lg:flex-col lg:gap-9">
                <RolletLogo/>
                <div id="content" className="lg:flex lg:gap-20">
                    <div
                        id="add-name-container"
                        className="lg:flex lg:flex-1 lg:flex-col lg:items-center lg:gap-5"
                    >
                        <div
                            id="name-display"
                            className="relative flex min-h-96 w-full justify-center rounded-[2.5rem] bg-[#00000080] px-6 py-3"
                        >
                            <div className="w-full text-white">
                                <h2 className="mb-1 text-2xl">Names</h2>
                                <ol className="absolute max-h-78 w-full list-inside list-decimal overflow-auto lg:text-[0.8rem]">
                                    {persons.map((person, i) => (
                                        <li key={i}>
                                            {person.person_name} (
                                            {person.person_role})
                                        </li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                className="w-max cursor-pointer rounded-full bg-[#D9D9D9] lg:px-15 lg:py-4 lg:text-center lg:text-3xl"
                                onClick={() => setPopUpClosed(false)}
                            >
                                Add
                            </button>
                            <label
                                htmlFor="csv-input"
                                className="flex h-[55px] w-[58px] cursor-pointer items-center justify-center rounded-full bg-[#D9D9D9]"
                            >
                                CSV
                            </label>
                            <input
                                id="csv-input"
                                type="file"
                                name="csv-input"
                                accept=".csv"
                                className="hidden border"
                                onChange={importCsvHandler}
                            />
                        </div>
                    </div>
                    <div
                        id="spin-name-container"
                        className="lg:flex lg:flex-[1.8] lg:flex-col lg:justify-center lg:gap-16"
                    >
                        <div
                            id="spin-display"
                            className="min-h-[236px] w-full max-w-[324px] bg-[#D9D9D9]"
                        ></div>
                        <div className="lg:flex lg:w-full lg:max-w-full lg:items-center lg:gap-2">
                            <button
                                className="cursor-pointer rounded-full bg-[#D9D9D9] lg:px-8 lg:py-2 lg:text-center lg:text-3xl"
                                onClick={displayTeamsHandler}
                            >
                                Spin for Team 1
                            </button>
                            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </section>

            <AddPopup
                popUpClosed={popUpClosed}
                setPopUpClosed={setPopUpClosed}
                addPerson={addPerson}
                setNameInputValue={setNameInputValue}
                setRoleInputValue={setRoleInputValue}
                nameInputValue={nameInputValue}
                roleInputValue={roleInputValue}
            />
        </>
    );
}



function AddPopup({
    popUpClosed,
    setPopUpClosed,
    addPerson,
    setNameInputValue,
    setRoleInputValue,
    nameInputValue,
    roleInputValue,
}) {
    function addPersonHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        addPerson();

        setPopUpClosed(true);
        setNameInputValue("");
        setRoleInputValue("");
    }

    return (
        <>
            {
                /* Manual-Add-Popup */
                !popUpClosed && (
                    <div
                        className="addStudent_form_popup absolute top-0 left-0 z-30 flex h-full w-full items-center justify-center bg-[#00000080]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setPopUpClosed(true);
                            setNameInputValue("");
                            setRoleInputValue("");
                        }}
                    >
                        <form
                            method="POST"
                            className="flex w-full max-w-[337px] flex-col gap-6 font-[roboto] text-[15px]"
                            onSubmit={addPersonHandler}
                        >
                            <ManualInputElm
                                inputvalue={nameInputValue}
                                setInputValue={setNameInputValue}
                                inputName="person_name"
                            />
                            <ManualInputElm
                                inputvalue={roleInputValue}
                                setInputValue={setRoleInputValue}
                                inputName="person_role"
                            />
                            <button
                                type="submit"
                                className="darumadrop-one-regular mx-auto w-max cursor-pointer rounded-full bg-[#D9D9D9] px-12 text-center text-[32px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Add
                            </button>
                        </form>
                    </div>
                )
            }
        </>
    );
}

function ManualInputElm({ inputvalue, setInputValue, inputName }) {
    return (
        <input
            type=""
            name={inputName}
            className="w-full rounded-full bg-[#D9D9D9] px-4 py-2 outline-none"
            placeholder={
                inputName === "person_name" ? "Insert name" : "Insert role"
            }
            onClick={(e) => e.stopPropagation()}
            required
            maxLength={25}
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            pattern="^[a-zA-Z0-9]*$"
            autoComplete="off"
        />
    );
}
