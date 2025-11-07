import Papa from "papaparse";

export default function OurTeam({ teams }) {
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
                        team: i + 1,
                        name: person.person_name,
                        role: person.person_role,
                    });
                });
            });

            // PAPA unparse JSON -> CSV
            const unparsed_teams = Papa.unparse(csvReady_teams);

            // Virtual file (stored in browser's RAM)
            const blob = new Blob([unparsed_teams], {
                type: "text/csv;charset=utf-8;",
            });

            // Temp URL (for <a>'s href)
            const url = URL.createObjectURL(blob);

            // Download to user device
            const link = document.createElement("a");
            link.href = url;
            link.download = "Teams_exported.csv";
            link.click();
        }
    }

    return (
        /* Our Team Display */
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
                    <div
                        key={index}
                        className="bg-[#00000080] text-white lg:mb-6 lg:rounded-2xl lg:px-5 lg:pt-2 lg:pb-12"
                    >
                        <h4 className="lg:text-3xl">Team {index + 1}</h4>
                        <ol className="list-inside list-decimal font-light lg:mt-3 lg:text-[0.8rem]">
                            {item.map((person, i) => (
                                <li key={i} className="lg:mb-1">
                                    {person.person_name} ({person.person_role})
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </aside>
    );
}