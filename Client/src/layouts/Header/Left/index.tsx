// Components
import Menu from "layouts/Header/Left/Menu";
import Search from "layouts/Header/Left/Search";

type Props = {};

const Left = (props: Props) => {
    return (
        <div className="border bg-green hidden lg:flex justify-center flex-col items-center p-4">
            <Menu />
            <Search />
        </div>
    );
};

export default Left;
