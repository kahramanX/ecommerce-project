import React, { HTMLInputTypeAttribute } from "react";
import Icon from "./Icon";
import { useFormContext } from "react-hook-form";

// Components
import Text from "shared/Text";

type Props = {
  type: HTMLInputTypeAttribute;
  placeholder: string;
  inputClassName?: string;
  parentClassName?: string;
  iconClassName?: string;
  iconName?: string;
  registerName: string;
  errorMessage?: string | undefined;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Input: React.FC<Props> = ({
  type,
  placeholder,
  inputClassName = "",
  parentClassName = "",
  iconClassName = "",
  iconName = "",
  registerName,
  errorMessage,
  ...otherProps
}) => {
  const { register } = useFormContext(); // retrieve all hook methods

  return (
    <>
      <div className={`${parentClassName}`}>
        <input
          className={`input ${inputClassName}`}
          placeholder={placeholder}
          type={type}
          {...register(registerName)}
          {...otherProps}
        />
        {iconName != "" && <Icon name={iconName} extraClass={iconClassName} />}

        {errorMessage && (
          <Text
            ElementTag="div"
            fontSize="text-sm"
            fontColor="text-red"
            fontWeight="font-bold"
            textContent={errorMessage}
          />
        )}
      </div>
    </>
  );
};

export default Input;
