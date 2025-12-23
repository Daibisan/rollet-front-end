import pp_syan from "@/assets/img/pp/pp_syan.png";
import pp_muza from "@/assets/img/pp/pp_muza.jpg";
import pp_dibi from "@/assets/img/pp/pp_dibi.png";
import pp_bariza from "@/assets/img/pp/pp_bariza.jpg";

export default function OurTeam() {
    const ourNames = [
        {
            name: "Syan",
            role: "UI/UX",
            pp: pp_syan,
        },
        {
            name: "Daibi",
            role: "Front-end",
            pp: pp_dibi,
        },
        {
            name: "Muza",
            role: "Back-end + PM",
            pp: pp_muza,
        },
        {
            name: "Bariza",
            role: "Anggota",
            pp: pp_bariza,
        },
    ];

    return (
        <div className="mx-12 pb-15 text-center">
            <h2 className="text-main-black mb-8 text-6xl">Our Team</h2>
            <ul className="flex justify-around gap-2">
                {ourNames.map((p, i) => {
                    return (
                        <li
                            key={i}
                            className="flex w-full max-w-[220px] flex-col"
                        >
                            <div
                                className="h-[185px] rounded-4xl bg-cover bg-center bg-no-repeat select-none"
                                draggable={false}
                                style={{ backgroundImage: `url(${p.pp})` }}
                            ></div>
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
