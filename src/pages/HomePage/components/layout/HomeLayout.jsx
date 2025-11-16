import { useState } from "react";
import MainContent from "../sections/MainContent";
import OurTeam from "../sections/OurTeam";

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
        <div className="mt-5 flex gap-12">
            <MainContent setTeams={setTeams} />
            <OurTeam teams={teams} />
        </div>
    );
}
