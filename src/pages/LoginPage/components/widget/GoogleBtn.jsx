import goggle_logo from "@/assets/img/logo/goggle.png";

export default function GoogleBtn({ isForgot }) {
    return (
        <>
            {!isForgot && (
                <button className="bg-secondary-black flex w-max cursor-pointer justify-center gap-1 self-end rounded-full py-3 pr-4 pl-3 text-xl text-white">
                    <img
                        src={goggle_logo}
                        alt="goggle_logo"
                        width="30px"
                        draggable={false}
                        className="select-none"
                    />
                    Google
                </button>
            )}
        </>
    );
}
