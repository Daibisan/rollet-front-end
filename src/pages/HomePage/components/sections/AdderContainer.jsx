import NameList from "../widgets/NameList";
import ButtonList from "../widgets/ButtonList";

export default function AdderContainer({
    persons,
    setPopUpClosed,
    addPerson,
    children
}) {
    

    return (
        // outer
        <div className="flex-1 flex justify-center select-none">
            {/* inner */}
            <div
                className="flex w-max flex-col items-center gap-5"
            >
                <NameList persons={persons}/>
                <ButtonList setPopUpClosed={setPopUpClosed} addPerson={addPerson}/>
            </div>
            {children}
        </div>
    );
}
