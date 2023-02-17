import { getPrismicClient } from "@/services/prismic";
import { asImageSrc } from "@prismicio/helpers";

import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import { ContainerProjects, ContentProjects } from "../../styles/projects";

interface Projects {
  name: string;
  image: string;
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

      <ContainerProjects>
        <h1>Lista nome dos projetos</h1>
        <p>Principais projetos até o momento</p>

        <ContentProjects>
          {projects.map(project => {
            return (
              <>
                <Link href="*" key={project.name}>
                  <img src={project.image} />
                </Link>
              </>

            )
          })}
        </ContentProjects>
      </ContainerProjects>
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
      image: asImageSrc(project.data.image)
    }
  })

  console.log(projects)

  return {
    props: {
      projects,
    },
    revalidate: 60 * 60 * 24,
  }
}