import React from "react";

// Components
import Input from "shared/Input";
import Button from "shared/Button";

type Props = {};

const UpdatePassword: React.FC<Props> = () => {
    return (
        <div className="p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
                type={"text"}
                placeholder={"Current Password"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <div></div>
            <Input
                type={"text"}
                placeholder={"New Password"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"New Password Again"}
                parentClassName="w-full"
                inputClassName="w-full"
            />
            <Button
                sizes="w-full"
                colors="bg-grey1"
                spacings="py-2"
                extraClass="lg:col-span-2"
                buttonContent="Update Password"
            />
        </div>
    );
};

export default UpdatePassword;
