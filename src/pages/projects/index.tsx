import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";
import Head from "next/head";

import { useState } from "react";

interface Projects {
  name: string;
}

interface ProjectsProps {
  projects: Projects[]
}


export default function Projects({ projects }: ProjectsProps) {
  return (
    <>
      <Head>
        <title>Projetos - Bianca Hoffer</title>
      </Head>

      <h1>Lista nome dos projetos</h1>

      {projects.map(project => {
        return (
          <p>{project.name}</p>
        )
      })}

    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient({});

  const response = await prismic.getByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ['project.name', 'project.image']
  })

  const projects = response.results.map((project) => {
    return {
      name: project.data.name,
    }
  })

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24,
  }
}