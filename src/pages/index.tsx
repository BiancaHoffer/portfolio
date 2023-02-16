import { AboutMe } from "@/components/AboutMe";
import { BannerHome } from "@/components/BannerHome";
import { ContactMe } from "@/components/ContactMe";
import { Technologies } from "@/components/Technologies";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - Bianca Macedo</title>
      </Head>

      <BannerHome />
      <AboutMe />
      <Technologies />
      <ContactMe />
    </>
  )
}