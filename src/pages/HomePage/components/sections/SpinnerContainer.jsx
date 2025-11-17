import refresh_icon from "@/assets/img/logo/Refresh.svg";
import fetchTeams from "@/services/teams";

export default function SpinnerContainer({ setTeams, setPersons }) {
    async function displayTeamsHandler() {
        const newTeams = await fetchTeams();
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
            <div className="flex w-full max-w-[324px] flex-col justify-center gap-5">
                {/* Spinning animation box*/}
                <div className="min-h-[236px] bg-[#D9D9D9]"></div>

                {/* Buttons */}
                <div className="flex items-center gap-2">
                    {/* Spin button */}
                    <button
                        className="bg-main-blue cursor-pointer rounded-full px-5 pt-3 pb-4 text-center text-3xl leading-7 text-white"
                        onClick={displayTeamsHandler}
                    >
                        Randomize Team
                    </button>

                    {/* Refresh button */}
                    <button
                        className="bg-main-blue cursor-pointer rounded-full p-2"
                        onClick={refreshBtnHandler}
                    >
                        <img
                            src={refresh_icon}
                            alt="Refresh"
                            width={"39px"}
                            draggable={false}
                            className="select-none"
                        />
                    </button>
                </div>
            </div>
        </div>
    );
}
