"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";

import Image from "next/image";
import Link from "next/link";
import { toast } from "sonner";
import FormField from "./FormField";
import { useRouter } from "next/navigation";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { login, signup } from "@/lib/actions/authSupabase.action";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      if (type === "sign-up") {
        const { name, email, password } = values;
        const isSignUp = await signup({
          name: name!,
          email,
          password,
        });
        if (!isSignUp) {
          toast.error("Error signing up, please try again");
          return;
        }
        toast.success("Signed up successfully, Please sign in");
        router.push("/sign-in");
      } else {
        const { email, password } = values;
        const isLogin = await login({
          email,
          password,
        });
        if (!isLogin) {
          toast.error("Invalid credentials, please try again");
          return;
        }
        toast.success("Signed in successfully, welcome");
        router.push("/home");
      }
    } catch (error) {
      console.log(error);
      toast.error(`Something went wrong: ${error}`);
    }
  }

  const isSignIn = type === "sign-in";
  return (
    <div className="card-border lg:min-w-[566px]">
      <div className="flex flex-col gap-6 card py-6 px-10">
        <div className="flex flex-row gap-2 justify-center">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/logo.png" alt="logo" width={38} height={32} />
            <h2 className="text-white">AI Interview Ninja</h2>
          </Link>
        </div>
        <h3 className="text-gray-custom-three text-lg">
          Practice job interview with AI
        </h3>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 form"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
              />
            )}
            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your Email"
              type="email"
            />
            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Your Password"
              type="password"
            />
            <Button type="submit" className="btn">
              {isSignIn ? "Sign In" : "Create an Account"}
            </Button>
          </form>
        </Form>
        {isSignIn && (
          <div className="flex gap-2">
            <Button className="w-1/2 rounded-full border-1 border-green-400 bg-transparent text-green-400">
              <FaGoogle />
            </Button>
            <Button className="w-1/2 rounded-full border-1 border-blue-400 bg-transparent text-blue-400">
              <FaGithub />
            </Button>
          </div>
        )}
        <p className="text-center">
          {isSignIn ? "No account yet?" : "Already have an account?"}{" "}
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="font-bold text-orange-custom ml-1"
          >
            {!isSignIn ? "Sign In" : "Sign Up"}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
