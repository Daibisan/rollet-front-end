import anjing_melet from '@/assets/img/anjing_melet.png';
import tangan_anjing from '@/assets/img/tangan_anjing.png';
import NavbarList from '../widgets/NavbarList';
import { useAuth } from '@/context/AuthContext';

export default function Navbar() {
    const { user } = useAuth();
    
    return (
        <>
            {/* header and logo */}
            <div className="bg-secondary-blue dark:bg-dark-purple-sky absolute z-20 flex w-full flex-col rounded-4xl pt-6 pr-5 pl-5 text-secondary-black dark:text-white transition-colors duration-500">
                {/* welcome [name] */}
                <h2 className="mb-6 text-[32px] leading-none">
                    Welcome
                    <span className="block text-2xl">{user? user.name.split(' ')[0] : 'Guest'}</span>
                </h2>

                {/* dog image */}
                <div className="relative flex w-full justify-end select-none">
                    <img
                        src={anjing_melet}
                        alt="anjing_melet"
                        width={"134px"}
                        draggable={false}
                    />
                    <img
                        src={tangan_anjing}
                        alt="tangan_anjing"
                        width={"110px"}
                        className="absolute -bottom-4 left-5"
                        draggable={false}
                    />
                </div>
            </div>

            {/* navbar */}
            <nav className="relative mt-40 flex flex-col rounded-3xl px-4 pt-28 pb-13">
                <NavbarList/>
            </nav>
        </>
    );
}
