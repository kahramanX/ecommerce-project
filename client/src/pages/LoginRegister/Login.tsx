import React from "react";

// Components
import Input from "shared/Input";
import Button from "shared/Button";

type Props = {};

const Login: React.FC<Props> = () => {
    return (
        <>
            {/*  <Input
                type={"text"}
                placeholder={"E-mail"}
                parentClassName="mb-4 w-full"
                inputClassName="w-full"
            />
            <Input
                type={"text"}
                placeholder={"Password"}
                parentClassName="mb-4"
                inputClassName="w-full"
            /> */}

            <Button
                colors="bg-grey1"
                spacings="p-2"
                sizes="w-full"
                buttonContent={"Submit"}
            />
        </>
    );
};

export default Login;
