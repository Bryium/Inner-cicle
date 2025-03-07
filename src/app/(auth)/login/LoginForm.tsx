"use client";

import { Button, Input } from "heroui"; // HeroUI components
import React from "react";
import { GiPadlock } from "react-icons/gi";
import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "@/lib/schemas/LoginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { signInUser } from "@/app/actions/authActions";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Link from "next/link";
import SocialLogin from "./SocialLogin";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    mode: "onTouched",
  });

  const router = useRouter();

  const onSubmit = async (data: LoginSchema) => {
    const result = await signInUser(data);
    if (result.status === "success") {
      router.push("/members");
      router.refresh();
    } else {
      toast.error(result.error as string);
    }
  };

  return (
    <div className="w-3/5 mx-auto bg-white p-6 rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center gap-4 text-default">
        <div className="flex items-center gap-3">
          <GiPadlock size={30} />
          <h1 className="text-3xl font-semibold">Login</h1>
        </div>
        <p className="text-neutral-500">Welcome back to inner-circle!</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-6">
        <Input
          label="Email"
          {...register("email")}
          isInvalid={!!errors.email}
          errorMessage={errors.email?.message as string}
          className="w-full"
        />
        <Input
          label="Password"
          type="password"
          {...register("password")}
          isInvalid={!!errors.password}
          errorMessage={errors.password?.message as string}
          className="w-full"
        />
        <Button fullWidth color="primary" type="submit" disabled={!isValid}>
          Login
        </Button>

        <SocialLogin />

        <div className="flex justify-center mt-4">
          <Link
            href="/forgot-password"
            className="text-sm text-blue-500 hover:underline"
          >
            Forgot password?
          </Link>
        </div>
      </form>
    </div>
  );
}
