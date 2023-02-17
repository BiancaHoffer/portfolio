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
  return {
    props: {
      s: "a"
    },
    revalidate: 60 * 60,
  }
}