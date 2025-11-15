import NameList from "../widgets/NameList";
import ButtonList from "../widgets/ButtonList";

export default function AdderContainer({
    persons,
    setPopUpClosed,
    addPerson,
    children
}) {
    

    return (
        <>
            <div
                className="flex flex-1 flex-col items-center gap-5"
            >
                <NameList persons={persons}/>
                <ButtonList setPopUpClosed={setPopUpClosed} addPerson={addPerson}/>
            </div>
            {children}
        </>
    );
}
