import anjing_merem from "@/assets/img/anjing_sus_merem.png";
import trash_red from "@/assets/img/logo/trash_red.svg";
import arrow from "@/assets/img/logo/keyboard_arrow_up.svg";
import { useState } from "react";
import ConfirmationPopup from "../sections/ConfirmationPopup";
import { useNavigate } from "react-router-dom";

export default function SettingsLayout() {
    const [isToggled, setIsToggled] = useState(false);
    const [isShowing, setIsShowing] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="flex h-full">
            {/* Button List */}
            <div className="mt-35 flex-[1.3]">
                {/* dark mode btn section */}
                <div className="bg-secondary-blue flex justify-around gap-6 rounded-full p-3">
                    <div className="flex gap-8">
                        {/* Circle */}
                        <div className="bg-secondary-gray h-[39px] w-10 rounded-full"></div>

                        <p className="darumadrop-one-regular text-3xl text-nowrap text-black">
                            Dark Mode
                        </p>
                    </div>

                    {/* Toggle btn */}
                    <button
                        className={`flex h-max w-[58px] min-w-[58px] cursor-pointer items-center self-center rounded-full p-1 ${isToggled ? "bg-main-green justify-end" : "bg-secondary-gray justify-start"} transition-all`}
                        onClick={() => setIsToggled(!isToggled)}
                    >
                        <div className="h-[27px] w-[27px] rounded-full bg-white"></div>
                    </button>
                </div>

                {/* log out btn section */}
                <div className="bg-secondary-blue mt-4 flex justify-around gap-18 rounded-full p-3">
                    <div className="flex gap-8">
                        <img
                            src={trash_red}
                            alt="trash_red"
                            width={"30px"}
                            draggable={false}
                            className="select-none"
                        />

                        <p className="text-main-red darumadrop-one-regular pb-1 text-3xl text-nowrap">
                            Log Out
                        </p>
                    </div>

                    {/* Logout btn */}
                    <button
                        className="cursor-pointer"
                        onClick={() => setIsShowing(!isShowing)}
                    >
                        <img
                            src={arrow}
                            alt="arrow"
                            width={"35px"}
                            draggable={false}
                            className="select-none"
                        />
                    </button>
                </div>
            </div>

            {/* BIG DOG IMAGE */}
            <div className="flex flex-2 items-end justify-end">
                <img
                    src={anjing_merem}
                    alt="anjing_merem"
                    width={"400px"}
                    draggable={false}
                    className="select-none"
                    loading="lazy"
                />
            </div>

            <ConfirmationPopup
                type={"logout"}
                isShowing={isShowing}
                setIsShowing={setIsShowing}
                continueCallback={() => navigate("/")}
            />
        </div>
    );
}
