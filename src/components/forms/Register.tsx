"use client";
import { FC } from "react";
import { trpc } from "@/trpc/client";
import { Button } from "../ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  registrationSchema,
  RegisterUser,
} from "@/lib/validators/registrations";
import { Card, CardTitle, CardContent, CardFooter } from "../ui/card";
import Wrapper from "../grids/Wrapper";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "../ui/select";

const RegisterForm: FC = () => {
  const { register, handleSubmit, formState } = useForm<RegisterUser>({
    resolver: zodResolver(registrationSchema),
  });

  const { mutate: handleRegister, data, error } = trpc.auth.test.useMutation();

  const onSubmit = (formData: RegisterUser) => {
    handleRegister(formData);
  };

  return (
    <Wrapper>
      <Card className="w-full sm:w-3/4 md:w-3/4 lg:w-1/2 m-auto p-6 rounded-lg shadow-lg mt-3">
        <CardTitle>Register</CardTitle>
        <CardContent>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-5"
          >
            <p>{data?.message}</p>
            <p>{error?.message.trimEnd()}</p>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="email">Email:</Label>
              <Input type="email" id="email" {...register("email")} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">Name:</Label>
              <Input id="name" {...register("name")} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="position">Position:</Label>
              <Input id="position" {...register("position")} />
            </div>

            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="role">Role:</Label>
              <Select {...register("role")}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectItem value="Admin">Admin</SelectItem>
                  <SelectItem value="Manager">Manager</SelectItem>
                  <SelectItem value="Employee">Employee</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" disabled={formState.isSubmitting}>
              Register
            </Button>
          </form>
        </CardContent>
      </Card>
    </Wrapper>
  );
};

export default RegisterForm;
