import { useEffect, useState } from "react";
import trash_black_icon from "@/assets/img/logo/trash_black.png";
import download_icon from "@/assets/img/logo/Download_black.png";
import exportCsvHandler from "@/utils/csv__utils/exportCsvHandler";
import fetchHistory from "@/services/history";

export default function HistoryList({ deleteBtnHandler }) {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await fetchHistory();
            setHistory(data);
        })();

    }, []);

    return (
        <>
            {history.map((teams, i) => {
                return (
                    <li className="w-full max-w-[258px] z-20" key={i}>
                        <div className="bg-secondary-blue dark:bg-light-purple-sky flex min-h-[183px] w-full justify-end rounded-4xl pt-3 pr-6">
                            <button
                                className="h-max"
                                onClick={() => exportCsvHandler(teams, i+1)}
                            >
                                <img
                                    src={download_icon}
                                    alt="Download"
                                    width={"26px"}
                                    className="cursor-pointer select-none"
                                />
                            </button>
                        </div>
                        <div className="mt-1 flex justify-center">
                            <p className="relative flex items-center font-[rubik-spray]">
                                Result {i+1}
                                <button
                                    className="absolute -right-9 cursor-pointer"
                                    data-index={i}
                                    onClick={deleteBtnHandler}
                                >
                                    <img
                                        src={trash_black_icon}
                                        alt="3dots"
                                        width={"22px" }
                                        className="select-none"
                                    />
                                </button>
                            </p>
                        </div>
                    </li>
                );
            })}
        </>
    );
}
