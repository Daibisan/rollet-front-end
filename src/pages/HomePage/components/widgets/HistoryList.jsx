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
                    <li className="z-20 w-full max-w-[292px]" key={i}>
                        <div className="flex min-h-[183px] w-full justify-end rounded-xl bg-white pt-3 pr-6 select-none"></div>
                        <div className="bg-secondary-blue dark:bg-light-purple-sky mt-1 flex justify-around rounded-xl py-5 relative bottom-5">
                            {/* Download button */}
                            <button
                                className="h-max select-none"
                                onClick={() => exportCsvHandler(teams, i + 1)}
                            >
                                <img
                                    src={download_icon}
                                    alt="Download"
                                    width={"30px"}
                                    height={"30px"}
                                    className="cursor-pointer"
                                />
                            </button>

                            <p className="flex items-center font-[rubik-spray]">
                                Project {i + 1}
                            </p>

                            {/* Delete Button */}
                            <button
                                className="cursor-pointer select-none"
                                data-index={i}
                                onClick={deleteBtnHandler}
                            >
                                <img
                                    src={trash_black_icon}
                                    alt="3dots"
                                    width={"30px"}
                                    height={"30px"}
                                />
                            </button>
                        </div>
                    </li>
                );
            })}
        </>
    );
}
