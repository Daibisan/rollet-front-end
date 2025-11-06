import { useState } from "react";
import Papa from "papaparse";

export default function Home() {
    const [teams, setTeams] = useState([
        [
            {
                person_name: "----------------",
                person_role: "-",
            },
            {
                person_name: "----------------",
                person_role: "-",
            },
            {
                person_name: "----------------",
                person_role: "-",
            },
        ],
    ]);
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

    function addPersonHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        addPerson();

        setPopUpClosed(true);
        setNameInputValue("");
        setRoleInputValue("");
    }

    function displayTeams() {
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

    function exportCsvHandler() {
        // Check empty teams
        if (teams[0][0].person_role === "-") {
            alert("Teams are empty");
        } else {
            let csvReady_teams = [];
            
            // Reformat teams[] data to CSV-ready JSON
            teams.forEach((team, i) => {
                team.forEach((person) => {
                    csvReady_teams.push({
                        team: i+1,
                        name: person.person_name,
                        role: person.person_role,
                    })
                });
            });

            // PAPA unparse JSON -> CSV
            const unparsed_teams = Papa.unparse(csvReady_teams);

            // Virtual file (stored in browser's RAM)
            const blob = new Blob([unparsed_teams], { type: "text/csv;charset=utf-8;"});

            // Temp URL (for <a>'s href)
            const url = URL.createObjectURL(blob);

            // Download to user device
            const link = document.createElement('a');
            link.href = url;
            link.download = "Teams_exported.csv";
            link.click();
        }
    }

    return (
        <div className="mt-5 lg:flex">
            {/* Main content */}
            <section className="lg:flex lg:flex-3 lg:flex-col lg:gap-9">
                <div id="logo" className="lg:flex lg:items-baseline lg:gap-2.5">
                    <div className="lingkaran-gray h-[67px] w-[77px] rounded-full bg-[#D9D9D9]"></div>
                    <h1 className="font-['yellow-candy'] lg:text-5xl">
                        Rollet
                    </h1>
                </div>
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
                                onClick={displayTeams}
                            >
                                Spin for Team 1
                            </button>
                            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Team Display */}
            <aside id="team-list" className="lg:flex-1 lg:pt-6">
                <header className="relative">
                    <button
                        onClick={exportCsvHandler}
                        className="absolute -left-15 flex h-[51px] w-[53px] cursor-pointer items-center justify-center rounded-full bg-[#B1B1B1]"
                    >
                        UP
                    </button>
                    <h3 className="rounded-full bg-[#2F2F2F] text-white lg:pb-2 lg:text-center lg:text-4xl">
                        Our Team
                    </h3>
                </header>
                <div
                    id="team-list-content"
                    className="max-h-120 lg:mt-8 lg:overflow-y-auto lg:rounded-2xl"
                >
                    {teams.map((item, index) => (
                        <div className="bg-[#00000080] text-white lg:mb-6 lg:rounded-2xl lg:px-5 lg:pt-2 lg:pb-12">
                            <h4 className="lg:text-3xl">Team {index + 1}</h4>
                            <ol className="list-inside list-decimal font-light lg:mt-3 lg:text-[0.8rem]">
                                {item.map((person, index) => (
                                    <li key={index} className="lg:mb-1">
                                        {person.person_name} (
                                        {person.person_role})
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </aside>

            {/* Popup add student form */}
            {!popUpClosed && (
                <div
                    className="addStudent_form_popup absolute top-0 left-0 flex h-full w-full items-center justify-center bg-[#00000080]"
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
            )}
        </div>
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
