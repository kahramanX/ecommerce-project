import React from "react";

// Components
import Icon from "shared/Icon";

type Props = {};

const ChatItem: React.FC<Props> = () => {
    return (
        <>
            <div className="flex justify-start">
                <div className="border mb-4 p-2 lg:w-1/2 bg-violet">
                    <div className="flex items-center mb-2">
                        <Icon name="verified_user" extraClass="text-xs" />
                        <span className="text-xs font-medium">
                            Müşteri Hizmetleri
                        </span>
                        <span className="text-xs text-grey4 ms-2">
                            26.01.2024 20:21
                        </span>
                    </div>
                    <div className="text-md">
                        Merhaba, ben müşteri hizmetleri
                    </div>
                </div>
            </div>
        </>
    );
};

export default ChatItem;
