import React, { useState } from "react";

type Props = {
    children: React.ReactNode;
    headerContent: string;
    IsOpenOnLoaded?: boolean;
};

const Accordion = ({
    headerContent,
    children,
    IsOpenOnLoaded = false,
}: Props): JSX.Element => {
    const [isActive, setIsActive] = useState<boolean>(IsOpenOnLoaded);

    return (
        <div className="mb-4">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => {
                    setIsActive(!isActive);
                }}
            >
                <div className="text-xl font-bold">{headerContent}</div>
                <div>
                    {isActive ? (
                        <i className="material-symbols-sharp">remove</i>
                    ) : (
                        <i className="material-symbols-sharp">add</i>
                    )}
                </div>
            </div>
            {isActive && <div className="font-semibold mt-2">{children}</div>}
        </div>
    );
};

export default Accordion;
