import DogImages from "@/components/ui/DogImages.jsx";
import FormSection from "./FormSection";
import GoogleBtn from "./widget/GoogleBtn";
import NavigationText from "./widget/NavigationText";

export default function ContentLayout({ layoutType }) {
    const isForgot = layoutType === "forgot-password";
    const isLogin = layoutType === "login";
    const isSignup = layoutType === "signup";

    return (
        // div to set dog images & content z-index
        <div className="relative h-max w-full max-w-[472px]"> 
            <DogImages
                face_pos={"right-13 -top-44"}
                hands_pos={"right-35"}
                tail_pos={"-right-3 -top-37"}
            />
            
            {/* content */}
            <div
                className={`bg-third-gray relative z-10 flex flex-col rounded-[100px] px-16 ${isForgot ? "pt-17 pb-16" : "pt-12 pb-8"}`}
            >
                {/* title */}
                <h2 className={isForgot ? "text-center text-3xl" : "text-5xl"}>
                    {isLogin
                        ? "login"
                        : isSignup
                          ? "Sign up"
                          : "Forgot password?"}
                </h2>

                <FormSection
                    isForgot={isForgot}
                    isLogin={isLogin}
                    isSignup={isSignup}
                />

                {/* or */}
                {!isForgot && <p className={`text-4xl ${isLogin ? 'mt-6' : 'mt-2'}`}>or</p>}

                <GoogleBtn isForgot={isForgot} />

                {/* switching login <-> signup <-> forgot-password */}
                <NavigationText layoutType={layoutType} isForgot={isForgot} />
            </div>
        </div>
    );
}
