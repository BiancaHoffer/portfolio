import { getPrismicClient } from "@/services/prismic";
import { asImageSrc, asText } from "@prismicio/helpers";
import { GetStaticPaths, GetStaticProps } from "next";

export default function Project() {
  return (
    <h1>Project</h1>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
}

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
        icon: red.icon,
        url: red.url,
      }
    }),
    technology: response.data.technology.map((tec: any) => {
      return {
        icon: tec.icon,
        field: tec.field
      }
    }),
    imagesProject: response.data.images_project.map((img: any) => {
      return {
        image: img.image
      }
    })
  }

  console.log(response.data)
  console.log(project)

  return {
    props: {
      s: "a"
    },
    revalidate: 60 * 60,
  }
}