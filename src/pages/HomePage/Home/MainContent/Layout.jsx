import { useState } from "react";
import RolletLogo from "../../../../components/ui/RolletLogo";
import AdderContainer from "./AdderContainer";
import SpinnerContainer from "./SpinnerContainer";
import AddPopup from "./AdderContainer/AddPopup";

export default function Layout({ setTeams }) {
    const [popUpClosed, setPopUpClosed] = useState(true);
    const [persons, setPersons] = useState([
        {
            person_name: "----------------",
            person_role: "-",
        },
    ]);
    const [nameInputValue, setNameInputValue] = useState("");
    const [roleInputValue, setRoleInputValue] = useState("");

    function addPerson(csv_persons_array = null) {
        const newPersons =
            persons.length === 1 && persons[0].person_role === "-"
                ? csv_persons_array
                    ? [...csv_persons_array]
                    : [
                          {
                              person_name: nameInputValue,
                              person_role: roleInputValue,
                          },
                      ]
                : csv_persons_array
                  ? [...persons, ...csv_persons_array]
                  : [
                        ...persons,
                        {
                            person_name: nameInputValue,
                            person_role: roleInputValue,
                        },
                    ];
        setPersons(newPersons);
    }

    return (
        <>
            <section className="flex flex-3 flex-col gap-9">
                <RolletLogo />
                <div className="flex gap-20">
                    <AdderContainer
                        persons={persons}
                        addPerson={addPerson}
                        setPopUpClosed={setPopUpClosed}
                    >
                        <AddPopup
                            popUpClosed={popUpClosed}
                            setPopUpClosed={setPopUpClosed}
                            setNameInputValue={setNameInputValue}
                            setRoleInputValue={setRoleInputValue}
                            nameInputValue={nameInputValue}
                            roleInputValue={roleInputValue}
                            addPerson={addPerson}
                        />
                    </AdderContainer>
                    <SpinnerContainer setTeams={setTeams} />
                </div>
            </section>
        </>
    );
}
