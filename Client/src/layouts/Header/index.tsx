// Components
import Left from "layouts/Header/Left";
import Right from "layouts/Header/Right";

type Props = {};

const Header = (props: Props): JSX.Element => {
    return (
        <header className="grid gap-8 grid-cols-1 lg:grid-cols-1-2-1 center self-center p-2 md:p-4 lg:p-10">
            <Left />
            <div className="border bg-orange p-4 lg:relative">
                <div className="flex justify-between lg:justify-center">
                    <button className="block lg:hidden">
                        <i className="material-symbols-sharp">menu</i>
                    </button>
                    <div className="text-2xl lg:text-4xl font-black text-center">
                        PULL&BEAR
                    </div>
                    <div className="flex gap-6 flex-wrap">
                        <button className="block lg:hidden">
                            <i className="material-symbols-sharp">person</i>
                        </button>
                        <button className="block lg:hidden">
                            <i className="material-symbols-sharp">local_mall</i>
                        </button>
                    </div>
                </div>
                <div className="mt-4 lg:m-2 flex justify-between gap-4 xl:gap-0 xl:absolute top-2 left-2 right-2">
                    <button className="button bg-grey1 px-4 py-2 w-full xl:w-auto">
                        FOR HER
                    </button>
                    <button className="button bg-grey1 px-4 py-2 w-full xl:w-auto">
                        FOR HIM
                    </button>
                </div>
            </div>
            <Right />
        </header>
    );
};

export default Header;
