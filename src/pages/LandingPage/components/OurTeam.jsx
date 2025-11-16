export default function OurTeam() {
    const ourNames = [
        {
            name: "Syandana Mazna Aisyah",
            role: "UI/UX",
        },
        {
            name: "Muhammad Rahsya Nadibia",
            role: "Front-end",
        },
        {
            name: "Muhammad Zalzala Al Akwan Al Mudzakir",
            role: "Back-end",
        },
        {
            name: "Bariza Rafi Leressae",
            role: "Back-end",
        },
    ];

    return (
        <div className="mx-12 pb-15 text-center">
            <h2 className="text-main-black mb-8 text-6xl">Our Team</h2>
            <ul className="flex justify-around">
                {ourNames.map((p, i) => {
                    return (
                        <li
                            key={i}
                            className="flex w-full max-w-[220px] flex-col"
                        >
                            <div className="bg-secondary-black h-[185px] rounded-4xl select-none" draggable={false}></div>
                            <span className="mt-2 text-[1.3rem] leading-6">
                                {p.name}
                            </span>
                            <span>({p.role})</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
}
