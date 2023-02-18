import { GetStaticPaths, GetStaticProps } from "next";
import Link from "next/link";

import { getPrismicClient } from "@/services/prismic";
import { ContainerProject } from "@/styles/project";
import { asImageSrc, asText, asLink } from "@prismicio/helpers";
import { TechnologiesPopover } from "@/components/TechnologiesPopover";

interface Project {
  uid: string;
  title: string;
  content: string;
  iamge: string;
  redirect: {
    icon: string;
    url: string;
  }[];
  technology: {
    icon: string;
    field: string;
  }[];
  imagesProject: {
    image: string;
  }[]
}

interface ProjectProps {
  project: Project;
}

export default function Project({ project }: ProjectProps) {
  const { title, content, redirect, technology } = project;

  return (
    <>
      <ContainerProject>
        <h1>{title}</h1>

        {redirect.map(red => {
          return (
            <Link href={String(red.url)} key={red.url}>
              <img src={red.icon} alt={red.url} />
            </Link>
          )
        })}

        <p>{content}</p>

        <TechnologiesPopover technology={technology} />
      </ContainerProject>
    </>
  )
}

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  const prismic = getPrismicClient({});
  const response = await prismic.getByType("project", {
    fetch: ['project.uid']
  })

  const paths = response.results
    .filter((post) => post.uid !== null)
    .map((post) => {
      return {
        params: {
          slug: post.uid!,
        },
      };
    });

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});

  const { slug } = params || {};

  const response = await prismic.getByUID('project', String(slug), {});

  const project = {
    uid: response.uid,
    title: response.data.title,
    content: asText(response.data.content),
    image: asImageSrc(response.data.image),
    redirect: response.data.redirect.map((red: any) => {
      return {
        icon: asImageSrc(red.icon),
        url: asLink(red.url),
      }
    }),
    technology: response.data.technology.map((tec: any) => {
      return {
        icon: asImageSrc(tec.icon),
        field: tec.field
      }
    }),
    imagesProject: response.data.images_project.map((img: any) => {
      return {
        image: asImageSrc(img.image),
      }
    })
  }

  return {
    props: {
      project
    },
    revalidate: 60 * 60,
  }
}