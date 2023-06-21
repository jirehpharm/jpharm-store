import { useState } from "react";

/**
 * A custom hook for creating a form with strongly typed values.
 *
 * @param callbackFn - A function to be called when the form is submitted.
 * @param initialValues - An object containing the initial values of the form fields.
 * @returns An object containing the current form values, an onChange function to update the values, and an onSubmit function to submit the form values.
 */
export const useForm = <T extends Record<string, any>>(
  callbackFn: (values: T) => void,
  initialValues: T
): {
  values: T;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
} => {
  const [values, setValues] = useState<T>(initialValues);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    callbackFn(values);
  };

  return {
    values,
    onChange,
    onSubmit,
  };
};
