"use client";
import React from "react";
import { useForm } from "react-hook-form";

import { formSchema } from "./constants/signup-admin";
import { z } from "zod";
import InputField from "@/components/InputField";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/auth/signup`;

    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    });

    if (!res.ok) {
      return null;
    }
  }
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <InputField
            name="firstname"
            label="Name*"
            placeholder="Name"
            type="text"
            control={form.control}
          />
          <InputField
            name="lastname"
            label="LastName"
            placeholder="Name"
            type="text"
            control={form.control}
          />
          <InputField
            name="email"
            label="Email*"
            placeholder="Email"
            type="email"
            control={form.control}
          />
          <InputField
            name="password"
            label="Password*"
            placeholder="Password"
            type="password"
            control={form.control}
          />
        </form>
      </Form>
    </div>
  );
};

export default Register;
