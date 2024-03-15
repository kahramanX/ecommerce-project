import React from "react";

// Components
import Button from "shared/Button";
import Icon from "shared/Icon";
import Text from "shared/Text";

type Props = {
    onClickMessage?: (
        e: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void | undefined;
};

const MessageItem: React.FC<Props> = ({ onClickMessage }) => {
    return (
        <div className="border border-grey3 grid grid-cols-3 items-center p-2 mb-4 text-sm lg:text-base place-items-center">
            <div>Message Item</div>
            <div>Message Item</div>
            <Button
                sizes="flex items-center justify-center p-0.5 lg:p-1 w-fit lg:w-full"
                buttonContent={
                    <>
                        <Icon name="forward" />
                    </>
                }
                onClick={(e) => {
                    onClickMessage && onClickMessage(e);
                }}
            />
        </div>
    );
};

export default MessageItem;
