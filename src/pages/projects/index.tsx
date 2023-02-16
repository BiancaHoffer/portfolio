import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";
import Head from "next/head";

import { asImageSrc } from "@prismicio/helpers";
import { ContentProjects, ContainerProjects } from "./styles";
import { useState } from "react";
import Link from "next/link";

interface Project {
  uid: string;
  name: string;
  image: {
    url: string;
  }
}

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [projects, setProjects] = useState<Project[]>(data);

  return (
    <>
      <Head>
        <title>Projetos - Bianca Hoffer</title>
      </Head>


      <ContainerProjects>
        <h1>Projetos</h1>
        <p>Principais projetos até o momento</p>

        <ContentProjects>
          {projects.map((project) => {
            return (
              <Link href={`/projects/${project.uid}`} key={project.uid} className={project.uid}>
                <img src={project.image.url} alt={project.name} />
              </Link>
            )
          })}
        </ContentProjects>
      </ContainerProjects>

    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});

  const response = await prismic.getByType("project", {
    orderings: {
      field: "document.first_publication_date",
      direction: "desc",
    },
    fetch: ['project.name', 'project.image'],
    pageSize: 5,
    page: 1,
  })

  const data = response.results.map((project) => {
    return {
      uid: project.uid,
      name: project.data.name,
      image: {
        url: asImageSrc(project.data.image)
      }
    }
  })

  const teste = { data }

  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 30
  }
}