import React, { useEffect } from "react";

// Components
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Shared
import Input from "shared/Input";
import Button from "shared/Button";

type Props = {};

type Inputs = {
    name: string;
    surname: string;
    phonenumber: string;
    email: string;
    password: string;
};

const formData: Inputs = {
    name: "",
    surname: "",
    phonenumber: "",
    email: "",
    password: "",
};

const Register: React.FC<Props> = () => {
    const schema = yup.object().shape({
        name: yup
            .string()
            .trim()
            .required("Zorunlu alan")
            .min(2, "Minimum 2 karakter olmalı")
            .max(30, "Maksimum karakter sınırı aşıldı"),
        surname: yup
            .string()
            .trim()
            .required("Zorunlu alan")
            .min(2, "Minimum 2 karakter olmalı")
            .max(30, "Maksimum karakter sınırı aşıldı"),
        phonenumber: yup
            .string()
            .required("Zorunlu alan")
            .min(10, "Minimum 10 karakter olmalı")
            .max(11, "Maksimum karakter sınırı aşıldı"),
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
            .max(10, "Maksimum karakter sınırı aşıldı"),
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
        <>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <Input
                        type={"text"}
                        placeholder={"Name"}
                        parentClassName="mb-4 w-full"
                        inputClassName="w-full"
                        registerName="name"
                        errorMessage={errors.errors.name?.message?.toString()}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Surname"}
                        parentClassName="mb-4 w-full"
                        inputClassName="w-full"
                        registerName="surname"
                        errorMessage={errors.errors.surname?.message?.toString()}
                    />
                    <Input
                        type={"text"}
                        placeholder={"Phone Number"}
                        parentClassName="mb-4"
                        inputClassName="w-full"
                        registerName="phonenumber"
                        errorMessage={errors.errors.phonenumber?.message?.toString()}
                    />
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
                        onClick={() => {
                            console.log(errors);
                        }}
                    />
                </form>
            </FormProvider>
        </>
    );
};

export default Register;
