import { Header } from '@/components/Header';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Home() {
  const { basePath } = useRouter();
  console.log(basePath)

  return (
    <>
      <Head>
        <title>Home - Bianca Hoffer</title>
      </Head>


    </>
  )
}
