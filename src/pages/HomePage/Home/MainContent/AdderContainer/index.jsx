import NameList from "./NameList";
import ButtonList from "./ButtonList";

export default function index({
    persons,
    setPopUpClosed,
    addPerson,
    children
}) {
    

    return (
        <>
            <div
                id="adder-container"
                className="flex flex-1 flex-col items-center gap-5"
            >
                <NameList persons={persons}/>
                <ButtonList setPopUpClosed={setPopUpClosed} addPerson={addPerson}/>
            </div>
            {children}
        </>
    );
}
