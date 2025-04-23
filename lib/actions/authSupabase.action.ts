"use server";

import { createClient } from "@/utils/supabase/middleware";
import { redirect } from "next/navigation";

interface LoginData {
    email: string;
    password: string;
}

interface SignUpData {
    name: string;
    email: string;
    password: string;
}

export async function login(formData: LoginData): Promise<boolean> {
  const supabase = await createClient();
  const data = {
    email: formData.email as string,
    password: formData.password as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    return false
  }

  return true
}

export async function signup(formData: SignUpData): Promise<boolean> {
  const supabase = await createClient();

  const data = {
    email: formData.email as string,
    password: formData.password as string,
    options: {
      data: {
        name: formData.name as string,
      },
    }
  };

  const { error } = await supabase.auth.signUp(data);

  if (error) {
    return false
  }

  return true
}

export async function logout (): Promise<boolean> {
  const supabase = await createClient();
  const { error } = await supabase.auth.signOut();

  if (error) {
    return false
  }

  return redirect("/sign-in")

}

export const isAuthenticated = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.auth.getUser();
  if (error || !data?.user) {
    return { isUsersAuthenticated: false, user: null };
  }
  return { isUsersAuthenticated: true, user: data.user };
};
