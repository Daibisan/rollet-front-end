import download_logo from "@/assets/img/logo/Download.svg";
import exportCsvHandler from "@/utils/csv__utils/exportCsvHandler";

export default function OurTeam({ teams : newTeams }) {
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
    return (
        <aside className="flex-[1.1] pt-6 z-20">
            {/* Our team header */}
            <header className="relative">
                {/* Donwload btn */}
                <button
                    onClick={() => exportCsvHandler(newTeams)}
                    className="bg-main-blue dark:bg-dark-purple-sky absolute -left-14 flex cursor-pointer items-center justify-center rounded-full p-2"
                >
                    <img
                        src={download_logo}
                        alt="Donwload"
                        width={"32px"}
                        draggable={false}
                        loading="lazy"
                        className="select-none"
                    />
                </button>

                <h3 className="bg-main-blue dark:bg-dark-purple-sky rounded-full pb-2 text-center text-4xl text-white">
                    Our Team
                </h3>
            </header>

            {/* Team lists */}
            <div className="mt-8 max-h-120 overflow-y-auto rounded-2xl">
                {newTeams.teams.map((item, index) => (
                    <div
                        key={index}
                        className="bg-secondary-blue/80 dark:bg-light-purple-sky/80 mb-6 rounded-2xl px-5 pt-2 pb-12 text-secondary-black"
                    >
                        <h4 className="text-3xl">Team {index + 1}</h4>
                        <ol className="mt-3 list-inside list-decimal text-[0.8rem] font-light">
                            {item.members.map((person, i) => (
                                <li key={i} className="mb-1">
                                    {person.name} ({person.role})
                                </li>
                            ))}
                        </ol>
                    </div>
                ))}
            </div>
        </aside>
    );
}
