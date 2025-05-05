"use server"
import { getCurrent } from "@/features/auth/actions";
import { SignupCard } from "@/features/auth/components/SignupCard";
import { redirect } from "next/navigation";
import React from "react";

const SignUpPage = async () => {
  const user = await getCurrent();
  
    if (user) {
      redirect("/");
    }
  return <SignupCard />;
};

export default SignUpPage;
