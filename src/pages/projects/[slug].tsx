import { GetStaticPaths, GetStaticProps } from "next"

export function Project() {
  return (
    <h1>Resumo do projeto</h1>
  )
}

export const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      a: "aaa"
    },
    revalidate: 60 * 60 * 30
  }
}