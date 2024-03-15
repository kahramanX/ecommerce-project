import React from "react";

// Components
import Icon from "shared/Icon";

type Props = {
    iconName: string;
    userName: string;
    chatDate: string;
    messageContent: string;
    chatPosition: "justify-start" | "justify-end";
    chatColor: "bg-grey1" | "bg-violet";
};

const ChatItem: React.FC<Props> = ({
    iconName,
    userName,
    chatDate,
    messageContent,
    chatPosition,
    chatColor,
}) => {
    return (
        <>
            <div className={`flex ${chatPosition}`}>
                <div className={`border mb-4 p-2 lg:w-1/2 ${chatColor}`}>
                    <div className="flex items-center mb-2">
                        <Icon name={iconName} extraClass="text-xs" />
                        <span className="text-xs font-medium">{userName}</span>
                        <span className="text-xs text-grey4 ms-2">
                            {chatDate}
                        </span>
                    </div>
                    <div className="text-md">{messageContent}</div>
                </div>
            </div>
        </>
    );
};

export default ChatItem;
