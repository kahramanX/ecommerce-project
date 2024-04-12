import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Shared
import Input from "shared/Input";
import Button from "shared/Button";

type Props = {};

type Inputs = {
    email: string;
    password: string;
};

const formData: Inputs = {
    email: "",
    password: "",
};

const Login: React.FC<Props> = () => {
    const schema = yup.object().shape({
        email: yup
            .string()
            .trim()
            .required("Zorunlu alan")
            .email("Email girmelisiniz")
            .max(30, "Maksimum karakter sınırı aşıldı"),
        password: yup
            .string()
            .trim()
            .required("Zorunlu alan")
            .min(5, "Minimum 5 karakter olmalı")
            .max(50, "Maksimum karakter sınırı aşıldı"),
    });

    const methods = useForm<Inputs>({
        mode: "all",
        defaultValues: formData,
        resolver: yupResolver(schema),
    });

    const { formState: errors } = methods;

    const onSubmit = (data: any) => {
        console.log("data", data);
        console.log("methods", methods);
        console.log("errors", errors);
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={methods.handleSubmit(onSubmit)}>
                <Input
                    type={"text"}
                    placeholder={"E-mail"}
                    parentClassName="mb-4 w-full"
                    inputClassName="w-full"
                    registerName="email"
                    errorMessage={errors.errors.email?.message?.toString()}
                />

                <Input
                    type={"text"}
                    placeholder={"Password"}
                    parentClassName="mb-4"
                    inputClassName="w-full"
                    registerName="password"
                    errorMessage={errors.errors.password?.message?.toString()}
                />

                <Button
                    colors="bg-grey1"
                    spacings="p-2"
                    sizes="w-full"
                    buttonContent={"Submit"}
                />
            </form>
        </FormProvider>
    );
};

export default Login;
