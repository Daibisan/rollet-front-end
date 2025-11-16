export default function SpinnerContainer({ setTeams, setPersons }) {
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

    function refreshBtnHandler() {
        const newTeam = [
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
        ];
        setTeams(newTeam);

        const newPersons = [
            {
                person_name: "----------------",
                person_role: "-",
            },
        ];
        setPersons(newPersons);
    }

    return (
        // outer
        <div className="flex flex-[1.5] justify-center">
            {/* inner */}
            <div className="flex flex-col justify-center gap-5 w-full max-w-[300px]">

                {/* Spinning animation box*/}
                <div className="min-h-[236px] bg-[#D9D9D9]"></div>

                {/* Buttons */}
                <div className="flex items-center gap-2 select-none">
                    {/* Spin button */}
                    <button
                        className="bg-main-blue cursor-pointer rounded-full px-6 pt-3 pb-4 text-center text-3xl text-white leading-7"
                        onClick={displayTeamsHandler}
                    >
                        Spin Team
                    </button>

                    {/* Refresh button */}
                    <button
                        className="bg-main-blue cursor-pointer rounded-full p-2"
                        onClick={refreshBtnHandler}
                    >
                        <img
                            src="src/assets/img/logo/Refresh.svg"
                            alt="Refresh"
                            width={"39px"}
                            draggable={false}
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
