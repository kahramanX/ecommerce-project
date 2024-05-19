import React from "react";
import Button from "shared/Button";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

// Components
import Input from "shared/Input";

type Props = {};

type Inputs = {
  name: string;
  surname: string;
  email: string;
  phone: string;
  birthday: string;
  gender: string;
};

const formData: Inputs = {
  name: "",
  surname: "",
  email: "",
  phone: "",
  birthday: "",
  gender: "",
};

const Profile: React.FC<Props> = () => {
  const schema = yup.object().shape({
    name: yup.string().trim().required("Zorunlu alan"),
    surname: yup.string().trim().required("Zorunlu alan"),
    email: yup.string().trim().required("Zorunlu alan"),
    phone: yup.string().trim().required("Zorunlu alan"),
    birthday: yup.string().trim().required("Zorunlu alan"),
    gender: yup.string().trim().required("Zorunlu alan"),
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
          <div className="p-2 lg:p-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
            <Input
              type={"text"}
              placeholder={"Name"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="name"
            />
            <Input
              type={"text"}
              placeholder={"Surname"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="surname"
            />
            <Input
              type={"text"}
              placeholder={"E-mail"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="email"
            />
            <Input
              type={"text"}
              placeholder={"Phone"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="phone"
            />
            <Input
              type={"text"}
              placeholder={"Birthday"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="birthday"
            />
            <Input
              type={"text"}
              placeholder={"Gender"}
              parentClassName="w-full"
              inputClassName="w-full"
              registerName="gender"
            />
            <Button
              sizes="w-full"
              colors="bg-grey1"
              spacings="py-2"
              extraClass="lg:col-span-2"
              buttonContent="Update Infos"
            />
          </div>
        </form>
      </FormProvider>
    </>
  );
};

export default Profile;
