"use client";

import { z } from "zod";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { auth } from "@/firebase/client";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

import { signIn, signUp } from "@/lib/actions/auth.action";
import FormField from "./FormField";
import { Logo } from "./landing/Logo";

const authFormSchema = (type: FormType) => {
  return z.object({
    name: type === "sign-up" ? z.string().min(3) : z.string().optional(),
    email: z.string().email(),
    password: z.string().min(3),
  });
};

const AuthForm = ({ type }: { type: FormType }) => {
  const router = useRouter();
  const isSignIn = type === "sign-in";

  const formSchema = authFormSchema(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    try {
      if (!isSignIn) {
        const { name, email, password } = data;

        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );

        const result = await signUp({
          uid: userCredential.user.uid,
          name: name!,
          email,
          password,
        });

        if (!result.success) {
          toast.error(result.message);
          return;
        }

        toast.success("Account created successfully. Please sign in.");
        router.push("/sign-in");
      } else {
        const { email, password } = data;

        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );

        const idToken = await userCredential.user.getIdToken();
        if (!idToken) {
          toast.error("Sign in Failed. Please try again.");
          return;
        }

        await signIn({ email, idToken });

        toast.success("Signed in successfully.");
        router.push("/home");
      }
    } catch (error) {
      console.error(error);
      toast.error(`There was an error: ${error}`);
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto p-6 rounded-2xl shadow-lg border bg-background">
      <div className="flex flex-col gap-8">
        <div className="flex items-center justify-center gap-3">
          {/* <Image src="/logo.svg" alt="logo" height={36} width={42} /> */}
          <Logo />
          <h2 className="text-2xl font-semibold text-primary-100">Evalyn</h2>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-semibold text-foreground mb-1">
            {isSignIn ? "Welcome back" : "Create an account"}
          </h3>
          <p className="text-muted-foreground text-sm">
            Practice job interviews with AI
          </p>
        </div>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {!isSignIn && (
              <FormField
                control={form.control}
                name="name"
                label="Name"
                placeholder="Your Name"
                type="text"
              />
            )}

            <FormField
              control={form.control}
              name="email"
              label="Email"
              placeholder="Your email address"
              type="email"
            />

            <FormField
              control={form.control}
              name="password"
              label="Password"
              placeholder="Enter your password"
              type="password"
            />

            <Button
              className="w-full btn transition-all hover:brightness-110"
              type="submit"
            >
              {isSignIn ? "Sign In" : "Create Account"}
            </Button>
          </form>
        </Form>

        <div className="text-center text-sm text-muted-foreground">
          {isSignIn ? "Don’t have an account?" : "Already have an account?"}
          <Link
            href={isSignIn ? "/sign-up" : "/sign-in"}
            className="ml-1 font-medium text-primary-500 hover:underline"
          >
            {isSignIn ? "Sign up" : "Sign in"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
