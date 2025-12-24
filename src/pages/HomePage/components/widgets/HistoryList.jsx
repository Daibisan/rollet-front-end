import { useEffect } from "react";
import trash_black_icon from "@/assets/img/logo/trash_black.png";
import download_icon from "@/assets/img/logo/Download_black.png";
import exportCsvHandler from "@/utils/csv__utils/exportCsvHandler";
import { fetchHistory } from "@/services/history";
import { isLogin } from "../../../../utils/auth";

export default function HistoryList({ deleteBtnHandler, history, setHistory }) {
    //     {
    //   "teams": [
    //     {
    //       "members": [
    //         {
    //           "id": 0,
    //           "name": "string",
    //           "role": "string",
    //           "team": 0
    //         }
    //       ],
    //       "team": 0
    //     }
    //   ],
    //   "total": 0
    // }

    useEffect(() => {
        (async () => {
            if (isLogin()) {
                const data = await fetchHistory();
                console.log(data);
                setHistory(data);
            }
        })();
    }, []);

    return (
        <>
            {history.length > 0
                ? history.map((team, i) => {
                      return (
                          <li className="z-20 w-full max-w-[292px]" key={i}>
                              <div className="flex min-h-[183px] w-full justify-end rounded-xl bg-white pt-3 pr-6 select-none"></div>
                              <div className="bg-secondary-blue dark:bg-light-purple-sky relative bottom-5 mt-1 flex justify-around rounded-xl py-5">
                                  {/* Download button */}
                                  <button
                                      className="h-max select-none"
                                      onClick={() =>
                                          exportCsvHandler(team, i + 1)
                                      }
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
                                      data-index={team.id}
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
                  })
                : null}
        </>
    );
}
