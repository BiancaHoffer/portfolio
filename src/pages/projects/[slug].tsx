import { getPrismicClient } from "@/services/prismic"
import { GetStaticPaths, GetStaticProps } from "next"
import { asImageSrc, asText } from "@prismicio/helpers";

import { ContainerProject } from "./styles";
import Link from "next/link";
import { TechnologiesPopover } from "@/components/TechnologiesPopover";

export interface PropsPost {
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
    }
  }[];
}

export interface Params {
  params: {
    slug: string;
  }
}

interface ProjectProps {
  data: PropsPost
}

export default function Project({ data }: ProjectProps) {
  return (
    <ContainerProject>
      <h1>{data.name}</h1>

      {data.redirect.map(red => {
        return (
          <Link href={red.link}>
            <img src={red.icon} />
          </Link>
        )
      })}

      <p>{data.text}</p>
      <TechnologiesPopover technologies={data.technology} />
    </ContainerProject>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const prismic = getPrismicClient({});

  const { slug } = params || {};

  const response = await prismic.getByUID('project', String(slug), {})

  const data = {
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
      data
    },
    //revalidate: 60 * 60 * 30
  }
}