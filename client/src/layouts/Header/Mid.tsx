import { Link } from "react-router-dom";

// Components
import Icon from "shared/Icon";

type Props = {};

const Mid = (props: Props): JSX.Element => {
    return (
        <div className="border bg-orange p-4 lg:relative">
            <div className="flex justify-between lg:justify-center">
                <button className="block lg:hidden">
                    <Icon name="menu" />
                </button>
                <Link
                    to={"/"}
                    className="z-10 text-2xl lg:text-4xl font-black text-center"
                >
                    PULL&BEAR
                </Link>
                <div className="flex gap-6 flex-wrap">
                    <button className="block lg:hidden">
                        <Icon name="person" />
                    </button>
                    <button className="block lg:hidden">
                        <Icon name="local_mall" />
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
    );
};

export default Mid;
