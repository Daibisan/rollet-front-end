import RolletLogo from "@/components/ui/RolletLogo.jsx";
import AppVersion from "../../components/ui/AppVersion";
import ContentLayout from "./components/ContentLayout";
import Cloud from "@/components/ui/Cloud";

export default function index({ layoutType }) {
    return (
        // body
        <div className="relative flex h-full overflow-hidden px-16 py-8">
            {/* wrapper */}
            <div className="flex w-full flex-col gap-22 font-[rubik-one]">
                <header>
                    <RolletLogo layoutType={'login'}/>
                </header>

                <main className="flex flex-1 justify-center">
                    <ContentLayout layoutType={layoutType} />
                </main>

                <AppVersion />

                {/* Small Clouds */}
                <Cloud
                    width="440px"
                    abs_pos={"-left-22 max-[1280px]:-left-60 bottom-20"}
                />
                <Cloud
                    width="400px"
                    abs_pos={"-right-25 max-[1280px]:-right-50 top-50"}
                />
            </div>
        </div>
    );
}
