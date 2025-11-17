import main_logo from '@/assets/img/logo/main_logo.png';

export default function RolletLogo() {
    return (
        <div className="flex gap-1 select-non h-[69px]">
            <img
                src={main_logo}
                alt="main_logo"
                width={"80px"}
                draggable={false}
            />
            <h1 className="flex items-center pt-2 font-['yellow-candy'] text-5xl">
                Rollet
            </h1>
        </div>
    );
}
