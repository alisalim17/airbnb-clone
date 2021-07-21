import { useRouter } from "next/dist/client/router";
import React from "react";
import { MeDocument } from "../../../generated/graphql";
import { useRegisterMutation, MeQuery } from "../../generated/graphql";
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
  const [register] = useRegisterMutation();

  const handleSubmit: FormikSubmit<FormValues> = async (
    values,
    { setErrors }
  ) => {
    const res = await register({
      variables: { input: values },
      update: (cache, { data }) => {
        cache.writeQuery<MeQuery>({
          query: MeDocument,
          data: { me: data?.register?.user },
        });
      },
    });
    const { errors, user } = res?.data?.register;
    if (errors) setErrors(toErrorMap(errors));
    else if (user) router.push("/");
  };

  return <RegisterView handleSubmit={handleSubmit} />;
};

export default RegisterConnector;
