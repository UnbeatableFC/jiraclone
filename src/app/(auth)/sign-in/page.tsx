import { getCurrent } from "@/features/auth/actions";
import { SigninCard } from "@/features/auth/components/SigninCard";
import { redirect } from "next/navigation";
import React from "react";

const SignInPage = async () => {
  const user = await getCurrent();

  if (user) {
    redirect("/");
  }
  return <SigninCard />;
};

export default SignInPage;
