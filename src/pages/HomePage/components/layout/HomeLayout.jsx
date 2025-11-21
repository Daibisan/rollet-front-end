import { useState } from "react";
import MainContent from "../sections/MainContent";
import OurTeam from "../sections/OurTeam";

export default function HomeLayout() {
    //     {
    //     "teams": [
    //         {
    //             "team": 1,
    //             "members": [
    //                 {
    //                     "id": 0,
    //                     "name": "Alice",
    //                     "role": "Backend Developer",
    //                     "team": 1
    //                 },
    //                 {
    //                     "id": 0,
    //                     "name": "Bob",
    //                     "role": "Frontend Developer",
    //                     "team": 1
    //                 }
    //             ]
    //         }
    //     ],
    //     "total": 2
    // }
    const [teams, setTeams] = useState({
        "teams": [
            {
                "team": 1,
                "members": [
                    {
                        "id": 0,
                        "name": "----------------",
                        "role": "-",
                        "team": 1
                    },
                    {
                        "id": 0,
                        "name": "----------------",
                        "role": "-",
                        "team": 1
                    }
                ]
            }
        ],
        "total": 1
    });

    return (
        <div className="mt-5 flex gap-12">
            <MainContent setTeams={setTeams} />
            <OurTeam teams={teams} />
        </div>
    );
}
