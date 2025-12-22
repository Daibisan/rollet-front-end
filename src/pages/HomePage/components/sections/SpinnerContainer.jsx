import refresh_icon from "@/assets/img/logo/Refresh.svg";
import users_icon from "@/assets/img/logo/Users.png";
import edit_icon from "@/assets/img/logo/Edit.png";
import dog_gacha_img from "@/assets/img/anjing_gacha.png";
import randomize from "@/services/teams";
import { useState } from "react";

export default function SpinnerContainer({ setTeams, setPersons, persons }) {
    const [teamCount, setTeamCount] = useState(2);

    async function displayTeamsHandler() {
        if (persons[0].person_role === "-") {
            alert("Nama tidak boleh kosong");
            return;
        }

        const result = await randomize(persons, teamCount);
        setTeams(result);
    }

    function refreshBtnHandler() {
        const newTeam = {
            teams: [
                {
                    team: 1,
                    members: [
                        {
                            id: 0,
                            name: "----------------",
                            role: "-",
                            team: 1,
                        },
                        {
                            id: 0,
                            name: "----------------",
                            role: "-",
                            team: 1,
                        },
                    ],
                },
            ],
            total: 1,
        };
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
                <img src={dog_gacha_img} alt="dog_gacha_img" className="z-20" />

                {/* Buttons */}
                <div className="flex flex-col gap-2">
                    {/* Upper Buttons */}
                    <div className="flex items-center gap-2">
                        {/* Spin button */}
                        <button
                            className="bg-main-blue dark:bg-dark-purple-sky cursor-pointer rounded-3xl px-5 pt-2 pb-4 text-center text-3xl leading-7 text-white"
                            onClick={displayTeamsHandler}
                        >
                            Randomize Team
                        </button>

                        {/* Refresh button */}
                        <button
                            className="bg-main-blue dark:bg-dark-purple-sky cursor-pointer rounded-full p-2"
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

                    {/* Lower Buttons */}
                    <div className="flex gap-1">
                        {/* Preference Button */}
                        <button className="bg-main-blue dark:bg-dark-purple-sky flex flex-2 cursor-pointer items-center justify-center rounded-3xl px-4 text-3xl text-white">
                            <img
                                src={edit_icon}
                                alt="edit_icon"
                                width={"37px"}
                                height={"37px"}
                            />
                            <p className="pb-2">Preference</p>
                        </button>

                        {/* N Team Input */}
                        <div className="bg-main-blue dark:bg-dark-purple-sky flex flex-1 items-center justify-center gap-2 rounded-3xl px-4 py-2">
                            <div className="flex h-full w-[50%] items-center justify-center rounded-md bg-white">
                                <input
                                    type="text"
                                    value={teamCount}
                                    onInput={(e) =>
                                        setTeamCount(Number(e.target.value))
                                    }
                                    className={`${teamCount < 10 ? "w-[1ch]" : "w-[2ch]"} outline-none`}
                                    min={2}
                                    max={99}
                                    inputMode="numeric"
                                />
                            </div>
                            <img
                                src={users_icon}
                                alt="users_icon"
                                width={"39px"}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
