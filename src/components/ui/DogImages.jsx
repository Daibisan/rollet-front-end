import anjing_muka_datar from "@/assets/img/anjing_muka_datar.svg";
import tangan_anjing from "@/assets/img/tangan_anjing.png";
import ekor_anjing from "@/assets/img/ekor_anjing.svg";

export default function DogImages({ face_pos, hands_pos, tail_pos }) {
    return (
        <>
            <div className={`absolute -z-10 select-none ${face_pos}`}>
                <img
                    src={anjing_muka_datar}
                    alt="anjing_muka_datar"
                    width={"235px"}
                    loading="lazy"
                    draggable={false}
                />
            </div>

            <div className={`absolute -top-6 select-none ${hands_pos}`}>
                <img
                    src={tangan_anjing}
                    alt="anjing_muka_datar"
                    width={"150px"}
                    loading="lazy"
                    draggable={false}
                />
            </div>
            <div className={`absolute -z-10 select-none ${tail_pos}`}>
                <img
                    src={ekor_anjing}
                    alt="anjing_muka_datar"
                    width={"152px"}
                    loading="lazy"
                    draggable={false}
                />
            </div>
        </>
    );
}
