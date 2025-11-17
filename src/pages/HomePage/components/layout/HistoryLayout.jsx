import { useState } from "react";
import DeletePopup from "../sections/DeletePopup";
import HistoryList from "../widgets/HistoryList";

export default function HistoryLayout() {
    const [deletePopup, setDeletePopup] = useState(false);

    function deleteBtnHandler(e) {
        console.log(e.currentTarget.dataset.index);
        setDeletePopup(true);
    }

    return (
        <>
            <div className="ml-8 h-full pt-18">
                <ul className="flex max-h-[490px] flex-wrap gap-x-19 gap-y-15 overflow-y-auto rounded-4xl min-[943px]:max-[1277px]:w-[615px] md:max-[943px]:gap-x-10 md:max-[907px]:w-[280px]">
                    <HistoryList deleteBtnHandler={deleteBtnHandler} />
                </ul>
            </div>
            <DeletePopup
                setDeletePopup={setDeletePopup}
                deletePopup={deletePopup}
            />
        </>
    );
}
