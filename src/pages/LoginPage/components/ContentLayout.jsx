import DogImages from "@/components/ui/DogImages.jsx";
import FormSection from "./FormSection";
import GoogleBtn from "./widget/GoogleBtn";
import NavigationText from "./widget/NavigationText";

export default function ContentLayout({ layoutType }) {
    const isForgot = layoutType === "forgot-password";
    const isLogin = layoutType === "login";
    const isSignup = layoutType === "signup";

    return (
        <div
            className={`bg-third-gray relative flex h-max w-full max-w-[472px] flex-col rounded-[100px] px-16 ${isForgot ? "pt-17 pb-16" : "pt-12 pb-8"}`}
        >
            <DogImages
                face_pos={"right-13 -top-44"}
                hands_pos={"right-35"}
                tail_pos={"-right-3 -top-37"}
            />

            {/* title */}
            <h2 className={isForgot ? "text-center text-3xl" : "text-5xl"}>
                {isLogin ? "login" : isSignup ? "Sign up" : "Forgot password?"}
            </h2>

            <FormSection
                isForgot={isForgot}
                isLogin={isLogin}
                isSignup={isSignup}
            />

            {/* or */}
            {!isForgot && <p className="mt-10 text-4xl">or</p>}

            <GoogleBtn isForgot={isForgot} />

            {/* switching login <-> signup <-> forgot-password */}
            <NavigationText layoutType={layoutType} isForgot={isForgot} />
        </div>
    );
}
