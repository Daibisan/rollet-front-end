import star from "@/assets/img/star.png";

export default function NameList({ persons }) {
    return (
        <div className="bg-secondary-blue dark:bg-light-purple-sky border-main-blue dark:border-dark-purple-sky relative z-20 flex min-h-96 w-full justify-center rounded-[40px] border-10 px-6 py-3">
            <div className="text-secondary-black w-full">
                <h2 className="mb-1 text-2xl">Names</h2>
                <ol className="max-h-78 list-inside list-decimal overflow-y-auto text-[0.8rem] w-full">
                    {persons.map((person, i) => (
                        <li key={i}>
                            {person.person_name} ({person.person_role})
                        </li>
                    ))}
                </ol>
            </div>
            {/* star */}
            <img
                src={star}
                alt="star"
                width={213}
                height={213}
                draggable={false}
                className={`fixed z-10 hidden translate-x-26 -translate-y-40 dark:block`}
            />
        </div>
    );
}
