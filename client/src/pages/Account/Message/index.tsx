import React, { useState } from "react";

type Props = {};

// Components
import MessageList from "./MessageList";

// Types
import { MessageViewTypes } from "../types";
import AddMessage from "./AddMessage";

const Message: React.FC<Props> = () => {
    const [messageViewType, setMessageViewType] =
        useState<MessageViewTypes>("message_list");

    const renderContent = (addressViewType: MessageViewTypes) => {
        switch (addressViewType) {
            case "message_list":
                return <MessageList setMessageViewType={setMessageViewType} />;
            case "message_add":
                return <AddMessage setMessageViewType={setMessageViewType} />;
            case "message_detail":
                return <div>DETAIL PAGE</div>;
            default:
                break;
        }
    };

    return <>{renderContent(messageViewType)}</>;
};

export default Message;
