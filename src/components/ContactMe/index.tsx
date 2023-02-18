import { useForm } from "react-hook-form";

import * as zod from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

import { ButtonSubmit, ContainerContactMe, Form } from "./styles";

import axios from "axios";
import { useState } from "react";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { SpinnerButton } from "../SpinnerButton";

const contactMeFormSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  content: zod.string(),
})

type SearchFormInputs = zod.infer<typeof contactMeFormSchema>

export function ContactMe() {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, watch, reset } = useForm<SearchFormInputs>({
    resolver: zodResolver(contactMeFormSchema),
    defaultValues: {
      content: "",
      email: "",
      name: "",
    }
  })

  async function handleSubmitMessage(data: SearchFormInputs) {
    try {
      setLoading(true)

      const name = watch("name");
      const email = watch("email");
      const content = watch("content");

      if (!name || !email || !content) {
        toast.warn('Por favor, preencha todos os campos.', {
          position: "top-center",
          autoClose: 5000,
          theme: "colored",
        });
        return;
      }

      await axios.post("/api/sendMessage", data);

      toast.success('Mensagem enviada com sucesso!', {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });

      reset();

    } catch (error) {
      toast.error('MDesculpe, houve um erro ao enviar a mensagem. Tente novamente mais tarde', {
        position: "top-center",
        autoClose: 5000,
        theme: "colored",
      });
      setLoading(false);
      reset();
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerContactMe id="email">
      <h1>Entre em contato</h1>

      <Form onSubmit={handleSubmit(handleSubmitMessage)}>
        <input
          type="text"
          placeholder="Nome"
          {...register("name")}
        />
        <input
          type="email"
          placeholder="E-mail"
          {...register("email")}
        />
        <textarea
          placeholder="Sua mensagem"
          {...register("content")}
        />
        <ButtonSubmit
          type="submit"
          disabled={loading && true}
        >
          {loading === true ? <SpinnerButton /> : "Enviar"}
        </ButtonSubmit>

        <ToastContainer />
      </Form>
    </ContainerContactMe>
  )
} 