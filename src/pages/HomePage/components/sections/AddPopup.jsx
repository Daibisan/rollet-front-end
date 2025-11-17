export default function AddPopup({
    popUpClosed,
    setPopUpClosed,
    addPerson,
    setNameInputValue,
    setRoleInputValue,
    nameInputValue,
    roleInputValue,
}) {
    function addPersonHandler(e) {
        e.preventDefault();
        e.stopPropagation();

        addPerson();

        setPopUpClosed(true);
        setNameInputValue("");
        setRoleInputValue("");
    }

    return (
        <>
            {
                /* Manual-Add-Popup */
                !popUpClosed && (
                    <div
                        className="absolute top-0 left-0 z-30 flex h-screen w-full items-center justify-center bg-[#00000080]"
                        onClick={(e) => {
                            e.stopPropagation();
                            setPopUpClosed(true);
                            setNameInputValue("");
                            setRoleInputValue("");
                        }}
                    >
                        <form
                            method="POST"
                            className="flex w-full max-w-[337px] flex-col gap-6 font-[roboto] text-[15px]"
                            onSubmit={addPersonHandler}
                        >
                            <ManualInputElm
                                inputvalue={nameInputValue}
                                setInputValue={setNameInputValue}
                                inputName="person_name"
                            />
                            <ManualInputElm
                                inputvalue={roleInputValue}
                                setInputValue={setRoleInputValue}
                                inputName="person_role"
                            />
                            <button
                                type="submit"
                                className="darumadrop-one-regular mx-auto w-max cursor-pointer rounded-full bg-[#D9D9D9] px-12 text-center text-[32px]"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Add
                            </button>
                        </form>
                    </div>
                )
            }
        </>
    );
}

function ManualInputElm({ inputvalue, setInputValue, inputName }) {
    return (
        <input
            type=""
            name={inputName}
            className="w-full rounded-full bg-[#D9D9D9] px-4 py-2 outline-none"
            placeholder={
                inputName === "person_name" ? "Insert name" : "Insert role"
            }
            onClick={(e) => e.stopPropagation()}
            required
            maxLength={25}
            value={inputvalue}
            onChange={(e) => setInputValue(e.target.value)}
            pattern="^[a-zA-Z0-9 ]*$"
            autoComplete="off"
        />
    );
}
