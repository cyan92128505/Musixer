import { Input, Button, Stack } from "@chakra-ui/react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import AlertPop from "./AlertPop";
import { api, errorHandler } from "../../services/Utils";
import { login } from "../../services/Auth";

type RegisterFormType = {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
};


export default function Builder() {
  const [data, setData] = useState<RegisterFormType>();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormType>();
  const onSubmit = async (data: RegisterFormType) => {
    await api.post("/auth/register", data)
      .then((response) => login(response))
      .catch((error) => {
        errorHandler(error, {});
      });

    setData(data);
  };

  return (
      <form onSubmit={handleSubmit(onSubmit)}>
                      <Stack padding="4" spacing={3}>

          <Input
            type="text"
            placeholder="name"
            {...register("name", {
              required: "Please enter first name",
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.name && <AlertPop title={errors.name.message} />}
          <Input
            type="email"
            placeholder="Last name"
            {...register("email", {
              required: "Please enter Last name",
              minLength: 3,
              maxLength: 100,
            })}
          />
          {errors.email && <AlertPop title={errors.email.message} />}
          <Input
            type="password"
            placeholder="Password"
            {...register("password", {
              required: "Please enter Password",
              minLength: { value: 8, message: "Too short" },
            })}
          />
          {errors.password && <AlertPop title={errors.password.message} />}

          <Input
            type="password"
            placeholder="PasswordConfirm"
            {...register("passwordConfirm", {
              required: "Please enter confirm Password",
              minLength: { value: 8, message: "Too short" },
            })}
          />
          {errors.passwordConfirm && (
            <AlertPop title={errors.passwordConfirm.message} />
          )}

          <Button type="submit" colorScheme="teal" fontSize="19px">
            Register
          </Button>

          </Stack>
      </form>
  );
}
