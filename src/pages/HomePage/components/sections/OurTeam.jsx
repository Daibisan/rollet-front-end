import download_logo from '@/assets/img/logo/Download.svg';
import exportCsvHandler from "@/utils/csv__utils/exportCsvHandler";

export default function OurTeam({ teams }) {
    return (
        <aside className="flex-[1.1] pt-6">
            {/* Our team header */}
            <header className="relative">
                {/* Donwload btn */}
                <button
                    onClick={()=>exportCsvHandler(teams)}
                    className="bg-main-blue absolute -left-14 flex cursor-pointer items-center justify-center rounded-full p-2"
                >
                    <img
                        src={download_logo}
                        alt="Donwload"
                        width={"32px"}
                        draggable={false}
                        loading="lazy"
                        className='select-none'
                    />
                </button>

                <h3 className="bg-main-blue rounded-full pb-2 text-center text-4xl text-white">
                    Our Team
                </h3>
            </header>

            {/* Team lists */}
            <div className="mt-8 max-h-120 overflow-y-auto rounded-2xl">
                {teams.map((item, index) => (
                    <div
                        key={index}
                        className="bg-secondary-blue mb-6 rounded-2xl px-5 pt-2 pb-12 text-white"
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
