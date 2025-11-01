export default function Home() {
    const teams = [
        [
            {
                nama: "Tesss",
                role: "FE",
            },
            {
                nama: "Tes",
                role: "Cyber",
            },
            {
                nama: "Tes",
                role: "BE",
            },
            {
                nama: "Tes",
                role: "UI/UX",
            },
            {
                nama: "Tes",
                role: "PM",
            },
        ],
        [
            {
                nama: "Tesss",
                role: "FE",
            },
            {
                nama: "Tes",
                role: "Cyber",
            },
            {
                nama: "Tes",
                role: "BE",
            },
            {
                nama: "Tes",
                role: "UI/UX",
            },
            {
                nama: "Tes",
                role: "PM",
            },
        ],
        [
            {
                nama: "Tesss",
                role: "FE",
            },
            {
                nama: "Tes",
                role: "Cyber",
            },
            {
                nama: "Tes",
                role: "BE",
            },
            {
                nama: "Tes",
                role: "UI/UX",
            },
            {
                nama: "Tes",
                role: "PM",
            },
        ],
        [
            {
                nama: "Tesss",
                role: "FE",
            },
            {
                nama: "Tes",
                role: "Cyber",
            },
            {
                nama: "Tes",
                role: "BE",
            },
            {
                nama: "Tes",
                role: "UI/UX",
            },
            {
                nama: "Tes",
                role: "PM",
            },
        ],
    ];

    return (
        <div className="mt-5 lg:flex">
            <section className="lg:flex lg:flex-3 lg:flex-col lg:gap-9">
                <div id="logo" className="lg:flex lg:items-baseline lg:gap-2.5">
                    <div className="lingkaran-gray h-[67px] w-[77px] rounded-full bg-[#D9D9D9]"></div>
                    <h1 className="font-['yellow-candy'] lg:text-5xl">
                        Rollet
                    </h1>
                </div>
                <div id="content" className="lg:flex lg:gap-20">
                    <div
                        id="add-name-container"
                        className="lg:flex lg:flex-1 lg:flex-col lg:items-center lg:gap-5"
                    >
                        <div
                            id="name-display"
                            className="min-h-96 w-full rounded-[2.5rem] bg-[#00000080]"
                        ></div>
                        <button className="cursor-pointer rounded-full bg-[#D9D9D9] lg:px-15 lg:py-4 lg:text-center lg:text-3xl">
                            Add
                        </button>
                    </div>
                    <div
                        id="spin-name-container"
                        className="lg:flex lg:flex-[1.8] lg:flex-col lg:justify-center lg:gap-16"
                    >
                        <div
                            id="spin-display"
                            className="min-h-[236px] w-full max-w-[324px] bg-[#D9D9D9]"
                        ></div>
                        <div className="lg:flex lg:w-full lg:max-w-full lg:items-center lg:gap-2">
                            <button className="cursor-pointer rounded-full bg-[#D9D9D9] lg:px-8 lg:py-2 lg:text-center lg:text-3xl">
                                Spin for Team 1
                            </button>
                            <div className="h-10 w-10 rounded-full bg-[#D9D9D9]"></div>
                        </div>
                    </div>
                </div>
            </section>
            <aside id="team-list" className="lg:flex-1 lg:pt-6">
                <header className="relative">
                    <div className="absolute -left-15 h-[51px] w-[53px] rounded-full bg-[#B1B1B1]"></div>
                    <h3 className="rounded-full bg-[#2F2F2F] text-white lg:pb-2 lg:text-center lg:text-4xl">
                        Our Team
                    </h3>
                </header>
                <div
                    id="team-list-content"
                    className="max-h-120 lg:mt-8 lg:overflow-y-auto lg:rounded-2xl"
                >
                    {teams.map((item, index) => (
                        <div className="bg-[#00000080] text-white lg:mb-6 lg:rounded-2xl lg:px-5 lg:pt-2 lg:pb-12">
                            <h4 className="lg:text-3xl">Team {index + 1}</h4>
                            <ol className="list-inside list-decimal font-light lg:mt-3 lg:text-[0.8rem]">
                                {item.map((person, index) => (
                                    <li key={index} className="lg:mb-1">
                                        {person.nama} ({person.role})
                                    </li>
                                ))}
                            </ol>
                        </div>
                    ))}
                </div>
            </aside>
        </div>
    );
}
