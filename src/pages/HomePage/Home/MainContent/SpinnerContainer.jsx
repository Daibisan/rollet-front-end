export default function SpinnerContainer({ setTeams }) {
    
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
        <div
            className="flex flex-[1.8] flex-col justify-center gap-16"
        >
            <div
                className="min-h-[236px] w-full max-w-[324px] bg-[#D9D9D9]"
            ></div>
            <div className="flex w-full max-w-full items-center gap-2">
                <button
                    className="cursor-pointer rounded-full bg-[#D9D9D9] px-8 py-2 text-center text-3xl"
                    onClick={displayTeamsHandler}
                >
                    Spin for Team 1
                </button>
                <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
            </div>
        </div>
    );
}