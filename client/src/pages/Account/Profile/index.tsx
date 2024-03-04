import React from "react";
import Button from "shared/Button";

// Components
import Input from "shared/Input";

type Props = {};

const Profile: React.FC<Props> = () => {
    return (
        <>
            <div className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
                <Input
                    type={"text"}
                    placeholder={"Name"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Input
                    type={"text"}
                    placeholder={"Surname"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Input
                    type={"text"}
                    placeholder={"E-mail"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Input
                    type={"text"}
                    placeholder={"Phone"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Input
                    type={"text"}
                    placeholder={"Birthday"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Input
                    type={"text"}
                    placeholder={"Cinsiyet"}
                    parentClassName="w-full"
                    inputClassName="w-full"
                />
                <Button
                    sizes="w-full"
                    colors="bg-grey1"
                    spacings="py-2"
                    extraClass="col-span-2"
                    buttonContent="Update Infos"
                />
            </div>
        </>
    );
};

export default Profile;
