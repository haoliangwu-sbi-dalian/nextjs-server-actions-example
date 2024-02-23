"use server";

import { revalidatePath } from "next/cache";

import { userStore } from "@/stores";

export const login = async (prevState: any, formData: FormData) => {
  const uname = formData.get("uname");

  if (!uname) return { msg: "username is required" };

  const pwd = formData.get("pwd") as string;

  if (!pwd) return { msg: "password is required" };
  if (pwd.length < 8) return { msg: "password length is too short" };

  try {
    await userStore.login({
      username: uname.toString(),
    });
  } catch (err) {
    return {
      msg: (err as Error).message,
    };
  }

  revalidatePath("/");

  return {
    msg: "success",
  };
};
