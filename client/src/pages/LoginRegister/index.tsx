import React from "react";

// Components
import ReactHelmet from "components/ReactHelmet";
import Text from "shared/Text";
import Input from "shared/Input";
import Button from "shared/Button";

type Props = {};

const LoginRegister = (props: Props) => {
    return (
        <>
            <ReactHelmet
                titleName="Login or Register"
                description="Login/Register Page"
            />

            <main className="px-2 md:px-4 lg:px-10 my-10">
                <Text
                    ElementTag="div"
                    fontSize="text-4xl text-center"
                    fontColor="text-grey6"
                    fontWeight="font-bold"
                    extraClass="mb-10"
                    textContent="REGISTER"
                />
                <div className="grid gap-8 grid-cols-1 lg:grid-cols-1-2_1-1">
                    <div className="lg:col-start-2">
                        <Input
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
                        />

                        <Button
                            colors="bg-grey1"
                            spacings="p-2"
                            sizes="w-full"
                            buttonContent={"Submit"}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default LoginRegister;
