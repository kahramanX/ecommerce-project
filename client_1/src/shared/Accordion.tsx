import React, { useState } from "react";

// Components
import Icon from "shared/Icon";
import Text from "shared/Text";

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
                <Text
                    ElementTag="div"
                    fontSize="text-xl"
                    fontColor="text-grey6"
                    fontWeight="font-bold"
                    textContent={<>{headerContent}</>}
                />
                <div>
                    {isActive ? <Icon name="remove" /> : <Icon name="add" />}
                </div>
            </div>
            {isActive && <div className="mt-2">{children}</div>}
        </div>
    );
};

export default Accordion;
