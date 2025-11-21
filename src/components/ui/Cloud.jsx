import cloud from "@/assets/img/cloud.png";

export default function Cloud({width, abs_pos}) {
    return (
        <img
            src={cloud}
            alt="cloud"
            width={width}
            className={`absolute pointer-events-none select-none -z-20 ${abs_pos}`}
            loading="lazy"
            draggable={false}
        />
    );
}
