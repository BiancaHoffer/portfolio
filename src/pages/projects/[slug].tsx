import { getPrismicClient } from "@/services/prismic"
import { GetStaticPaths, GetStaticPathsContext, GetStaticProps } from "next"
import { asImageSrc, asText } from "@prismicio/helpers";

import { ContainerProject } from "./styles";
import Link from "next/link";
import { TechnologiesPopover } from "@/components/TechnologiesPopover";

import { ParsedUrlQuery } from 'querystring';

export interface Project {
  uid: string;
  name: string;
  image: string;
  text: string;
  redirect: {
    link: string;
    icon: string;
  }[];
  technology: {
    icon: {
      url: string;
      field: string;
    };
  }[];
}

interface ProjectProps {
  project: Project;
}

interface Params extends ParsedUrlQuery {
  slug: string;
}

export default function Project({ project }: ProjectProps) {
  const { name, text, redirect, technology } = project;

  return (
    <ContainerProject>
      <h1>{name}</h1>

      {redirect.map(red => {
        return (
          <Link href={red.link}>
            <img src={red.icon} />
          </Link>
        )
      })}

      <p>{text}</p>
      <TechnologiesPopover technologies={technology} />
    </ContainerProject>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const prismic = getPrismicClient({});

  const response = await prismic.getByType("project", {})
  const paths = response.results.map((result) => ({
    params: {
      slug: result.uid,
    },
  }));
  return {
    paths: [],
    fallback: "blocking",
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});

  const { slug } = params || {};

  const response = await prismic.getByUID('project', String(slug), {})

  const project = {
    uid: response.uid,
    name: response.data.name,
    image: asImageSrc(response.data.image),
    text: asText(response.data.text),
    redirect: response.data.redirect.map((element: any) => {
      return {
        link: element.link.url,
        icon: asImageSrc(element.icon),
      }
    }),
    technology: response.data.technology.map((element: any) => {
      return {
        icon: {
          url: asImageSrc(element.icon),
          field: asText(element.field)
        }
      }
    }),
  }

  return {
    props: {
      project
    },
    revalidate: 60 * 60,
  }
}