import { getPrismicClient } from "@/services/prismic";
import { GetStaticProps } from "next";
import Head from "next/head";

import { asImageSrc } from "@prismicio/helpers";

interface Projects {
  uid: string;
  name: string;
  image: {
    url: string;
  }
}

export default function Projects(data: Projects) {
  console.log(data)

  return (
    <>
      <Head>
        <title>Projetos - Bianca Hoffer</title>
      </Head>

      <h1>Projetoss</h1>
      <a href="/projets/aa">aa</a>
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
    fetch: ['project.name', 'project.image'],
    //pageSize: 3,
    //page: 1,
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

  console.log(data)

  return {
    props: {
      data
    },
    revalidate: 60 * 60 * 30
  }
}