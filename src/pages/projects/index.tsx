import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";
import Head from "next/head";

import { useState } from "react";


export default function Projects() {
  return (
    <>
      <Head>
        <title>Projetos - Bianca Hoffer</title>
      </Head>

      <h1>Projeto </h1>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({})
  return {
    props: {
      prop: "Teste"
    },
    revalidate: 60 * 60 * 24,
  }
}