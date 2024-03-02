import React from "react";

type Props = {
    className?:
        | "material-symbols-outlined"
        | "material-symbols-sharp"
        | "material-symbols-rounded";
    name: string;
    extraClass?: string;
};

const Icon = ({
    className = "material-symbols-sharp",
    extraClass,
    name,
}: Props): JSX.Element => {
    return <i className={`${className} ${extraClass}`}>{name}</i>;
};

export default Icon;
