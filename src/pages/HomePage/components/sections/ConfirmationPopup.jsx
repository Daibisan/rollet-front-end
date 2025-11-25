import DogImages from "@/components/ui/DogImages.jsx";

export default function ConfirmationPopup({
    isShowing,
    setIsShowing,
    type,
    continueCallback,
}) {
    return (
        <div
            className={`absolute top-0 left-0 z-30 flex h-screen w-full items-center justify-center bg-[#00000080] ${isShowing ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"} transition-all`}
        >
            {/* div to set dog images & content z-index */}
            <div className="relative w-full max-w-[694px]">
                <DogImages
                    face_pos={"right-32 -top-41"}
                    hands_pos={"right-55"}
                    tail_pos={"right-17 -top-32"}
                />

                {/* content */}
                <div
                    className="bg-secondary-blue relative flex flex-col gap-13 rounded-4xl px-6 py-16 text-center text-white"
                    onClick={(e) => e.stopPropagation()}
                >
                    {/* "Are you sure?" */}
                    <p className="text-[64px]">Are you sure?</p>

                    <div
                        className={`flex justify-center gap-24 ${type === "deleteHistory" ? "text-[40px]" : "text-5xl"}`}
                    >
                        {/* Cancel btn */}
                        <button
                            className={`cursor-pointer rounded-full bg-white px-10 text-black ${type === "deleteHistory" ? "pb-2" : "pb-3"}`}
                            onClick={() => setIsShowing(false)}
                        >
                            {type === "deleteHistory" ? "cancel" : "no"}
                        </button>

                        {/* Continue btn */}
                        <button
                            className={`cursor-pointer rounded-full px-10 ${type === "deleteHistory" ? "bg-main-red pb-2" : "bg-secondary-gray pb-3"}`}
                            onClick={continueCallback}
                        >
                            {type === "deleteHistory" ? "delete" : "yes"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
