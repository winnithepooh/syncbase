import ctl from "@netlify/classnames-template-literals";
import type { ComponentPropsWithoutRef, FC } from "react";
import type { Path, UseFormRegister } from "react-hook-form";

interface InputFieldProps<T> extends ComponentPropsWithoutRef<"input"> {
  name: Path<T>;
  label: string;
  errorMsg?: string;
  register: UseFormRegister<T>;
}

const inputFieldClasses = (error: boolean) =>
  ctl(`
  py-2
  px-3
  w-full
  rounded-md
  border
  focus:border-primary
  focus:outline-none
  focus:ring-1
  focus:ring-primary
  transition
  ${error ? "border-red-300" : "border-gray-300"}
`);

export const InputField = <T,>({
  name,
  label,
  errorMsg,
  register,
  ...props
}: InputFieldProps<T>): ReturnType<FC> => {
  return (
    <div>
      <label htmlFor={name} className="block mb-1 text-sm text-gray-700">
        {label}
      </label>
      <input
        id={name}
        {...register(name)}
        {...props}
        className={inputFieldClasses(!!errorMsg)}
      />
      {errorMsg && (
        <span className="block mt-1 text-sm text-red-600">{errorMsg}</span>
      )}
    </div>
  );
};
