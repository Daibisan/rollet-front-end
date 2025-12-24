import { useState } from "react";
import HistoryList from "../widgets/HistoryList";
import ConfirmationPopup from "../sections/ConfirmationPopup";

export default function HistoryLayout() {
    // fetch("/v1/people/history", {
    //     headers: {
    //         Authorization: `Bearer ${getToken()}`,
    //     },
    // });
    const [isShowing, setIsShowing] = useState(false);

    function deleteBtnHandler(e) {
        console.log(e.currentTarget.dataset.index);
        setIsShowing(true);
    }

    return (
        <>
            <div className="ml-4 h-full pt-18">
                <ul className="z-20 flex max-h-[560px] flex-wrap gap-7 overflow-y-auto px-2 min-[943px]:max-[1277px]:w-[615px] md:max-[907px]:w-[280px]">
                    <HistoryList deleteBtnHandler={deleteBtnHandler} />
                </ul>
            </div>
            <ConfirmationPopup
                setIsShowing={setIsShowing}
                isShowing={isShowing}
                type={"deleteHistory"}
            />
        </>
    );
}
