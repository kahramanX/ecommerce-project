// Components
import Left from "layouts/Header/Left";
import Right from "layouts/Header/Right";
import { Link } from "react-router-dom";
import Mid from "./Mid";

type Props = {};

const Header = (props: Props): JSX.Element => {
    return (
        <header className="grid gap-8 grid-cols-1 lg:grid-cols-1-2-1 center self-center p-2 md:p-4 lg:p-10">
            <Left />
            <Mid />
            <Right />
        </header>
    );
};

export default Header;
