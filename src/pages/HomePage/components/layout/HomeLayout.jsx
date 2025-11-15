import { useState } from "react";
import MainContent from "../sections/MainContent";

export default function HomeLayout() {
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

    return (
        <div className="mt-5 flex">
            <MainContent setTeams={setTeams} />
            <OurTeam teams={teams} />
        </div>
    );
}

function OurTeam({ teams }) {
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
        <aside className="flex-1 pt-6">
            <header className="relative">
                <button
                    onClick={exportCsvHandler}
                    className="absolute -left-15 flex h-[51px] w-[53px] cursor-pointer items-center justify-center rounded-full bg-[#B1B1B1]"
                >
                    UP
                </button>
                <h3 className="rounded-full bg-[#2F2F2F] pb-2 text-center text-4xl text-white">
                    Our Team
                </h3>
            </header>
            <div className="mt-8 max-h-120 overflow-y-auto rounded-2xl">
                {teams.map((item, index) => (
                    <div
                        key={index}
                        className="mb-6 rounded-2xl bg-[#00000080] px-5 pt-2 pb-12 text-white"
                    >
                        <h4 className="text-3xl">Team {index + 1}</h4>
                        <ol className="mt-3 list-inside list-decimal text-[0.8rem] font-light">
                            {item.map((person, i) => (
                                <li key={i} className="mb-1">
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
