"use client";
import React from "react";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";

//Validação do email do usuário
const customEmailRegex =
  /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i;

const signInSchema = z.object({
  email: z.string().refine((value) => customEmailRegex.test(value), {
    message:
      "E-mail, inválido. Insira um endereço de e-mail no formato correto",
  }),
  password: z
    .string()
    .min(8, { message: "A senha deve ter pelo menos 8 caracteres" })
    .max(32, { message: "A senha deve ter no máximo 32 caracteres" })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/,
      {
        message:
          "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres, letras maiúsculas, minúsculas, números e caracteres especiais.",
      }
    ),
});

export const Page = () => {
  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof signInSchema>) {
    console.log(values);
  }

  return (
    <>
      <div className="signInWrapper">
        <div className="formWrapper">
          <div className="lef">

          </div>
          <div className="right">
            
          </div>
        </div>
      </div>
    </>
  );
};
