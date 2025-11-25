export default function NameList({ persons }) {
    return (
        <div className="relative flex min-h-96 w-full justify-center rounded-[2.5rem] bg-secondary-blue px-6 py-3">
            <div className="w-full text-secondary-black">
                <h2 className="mb-1 text-2xl">Names</h2>
                <ol className="absolute max-h-78 list-inside list-decimal overflow-auto text-[0.8rem]">
                    {persons.map((person, i) => (
                        <li key={i}>
                            {person.person_name} ({person.person_role})
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
}
