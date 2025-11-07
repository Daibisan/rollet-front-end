import { useState } from "react";
import MainContent from "./MainContent";
import OurTeam from "./OurTeam";

export default function Layout() {
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
        <div id="home" className="mt-5 flex">
            <MainContent setTeams={setTeams} />
            <OurTeam teams={teams} />
        </div>
    );
}
