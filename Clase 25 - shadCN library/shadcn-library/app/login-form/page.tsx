"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

//Source of truth
const formSchema = z.object({
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long.")
    .max(25, "Exceeded maximum characters for the username field."),
  password: z
    .string()
    .min(8, "password should be at least 8 characters long."),
});

type FormType = z.infer<typeof formSchema>;

export default function Page() {
  const form = useForm<FormType>({
    //Comprobador de tipos
    resolver: zodResolver(formSchema),
    defaultValues: { username: "", password: "" },
  });

  const { toast } = useToast();

  const onSubmit = (values: FormType) => {
    toast({
      title: "Form sent!",
      description: (
        <div>
          <div>Username: {values.username}</div>
          <div>Password: {values.password}</div>
        </div>
      ),
    });
    console.log(values);
  };

  return (
    <main className="p-4">
      <Link href="/">Home</Link>

      <Card className="h-screen flex flex-col justify-center items-center border-black border-2">
        <CardTitle>Login Form</CardTitle>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-8 "
            >
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="password"
                        type="password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button>Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </main>
  );
}
