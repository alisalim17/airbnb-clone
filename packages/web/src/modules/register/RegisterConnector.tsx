import { useRouter } from "next/dist/client/router";
import React from "react";
import { client } from "../../client";
import { useRegisterMutation } from "../../generated/graphql";
import { FormikSubmit } from "../../types/types";
import { toErrorMap } from "../../utils/toErrorMap";
import RegisterView from "./views/RegisterView";

export interface FormValues {
  username: string;
  email: string;
  password: string;
}

const RegisterConnector: React.FC = () => {
  const router = useRouter();
  const { mutateAsync } = useRegisterMutation(client, {});

  const handleSubmit: FormikSubmit<FormValues> = async (
    values,
    { setErrors }
  ) => {
    const res = await mutateAsync({ input: values });
    const { errors, user } = res.register;
    if (errors) setErrors(toErrorMap(errors));
    else if (user) router.push("/");
  };

  return <RegisterView handleSubmit={handleSubmit} />;
};

export default RegisterConnector;
