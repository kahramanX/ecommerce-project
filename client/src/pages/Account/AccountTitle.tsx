import React from "react";
import Text from "shared/Text";

type Props = { tabIndex: number };

const AccountTitle: React.FC<Props> = ({ tabIndex }) => {
    const renderContent = (tabIndex: number): string | undefined => {
        switch (tabIndex) {
            case 0:
                return "PROFILE";
            case 1:
                return "ADDRESS";
            case 2:
                return "ORDERS";
            case 3:
                return "REFUNDS";
            case 4:
                return "FAVORITES";
            case 5:
                return "FOLLOWS";
            case 6:
                return "MESSAGES";
            case 7:
                return "UPDATE PASSWORD";
            default:
                break;
        }
    };
    return (
        <Text
            ElementTag="div"
            fontSize="text-2xl lg:text-4xl"
            fontColor="text-grey6"
            fontWeight="font-black"
            extraClass="mb-4 text-center"
            textContent={renderContent(tabIndex)}
        />
    );
};

export default AccountTitle;
