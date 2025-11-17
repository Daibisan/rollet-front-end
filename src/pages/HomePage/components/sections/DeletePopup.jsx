import anjing_muka_datar from "@/assets/img/anjing_muka_datar.svg";
import tangan_anjing from "@/assets/img/tangan_anjing.png";
import ekor_anjing from "@/assets/img/ekor_anjing.svg";

export default function DeletePopup({ deletePopup, setDeletePopup }) {
    return (
        <div
            className={`absolute top-0 left-0 z-30 flex h-screen w-full items-center justify-center bg-[#00000080] ${deletePopup ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-all`}
        >
            <div
                className="bg-secondary-blue relative flex w-full max-w-[694px] flex-col gap-13 rounded-4xl px-6 py-16 text-center text-white"
                onClick={(e) => e.stopPropagation()}
            >
                {/* "Are you sure?" */}
                <p className="text-[64px]">Are you sure?</p>

                {/* Cancel & delete btn */}
                <div className="flex justify-center gap-24 text-[40px]">
                    <button
                        className="rounded-full bg-white px-10 pb-2 text-black cursor-pointer"
                        onClick={() => setDeletePopup(false)}
                    >
                        cancel
                    </button>
                    <button className="bg-main-red rounded-full px-10 pb-2 cursor-pointer">
                        delete
                    </button>
                </div>

                {/* dog images */}
                <img
                    src={anjing_muka_datar}
                    alt="anjing_muka_datar"
                    width={"235px"}
                    className="absolute -top-41 right-32 -z-10 select-none"
                    loading="lazy"
                    draggable={false}
                />
                <img
                    src={tangan_anjing}
                    alt="anjing_muka_datar"
                    width={"150px"}
                    className="absolute -top-6 right-55 select-none"
                    loading="lazy"
                    draggable={false}
                />
                <img
                    src={ekor_anjing}
                    alt="anjing_muka_datar"
                    width={"152px"}
                    className="absolute -top-32 right-17 -z-10 select-none"
                    loading="lazy"
                    draggable={false}
                />
            </div>
        </div>
    );
}
