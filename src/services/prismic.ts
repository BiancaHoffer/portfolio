import * as prismic from "@prismicio/client";
import { HttpRequestLike } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export interface PrismicConfig {
  req?: HttpRequestLike;
}

const acessToken = process.env.PRISMIC_ACCESS_TOKEN

export function getPrismicClient(config: PrismicConfig): prismic.Client {

  const client = prismic.createClient("https://portfolio-by-biancahoffer.cdn.prismic.io/api/v2", {
    accessToken: acessToken,
  });

  enableAutoPreviews({
    client,
    req: config.req,
  })

  return client;
}