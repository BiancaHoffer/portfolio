import * as prismic from "@prismicio/client";
import { HttpRequestLike } from "@prismicio/client";
import { enableAutoPreviews } from "@prismicio/next";

export interface PrismicConfig {
  req?: HttpRequestLike;
}

const endpoint = process.env.PRISMIC_API_ENDPOINT
const acessToken = process.env.PRISMIC_ACCESS_TOKEN

export function getPrismicClient(config: PrismicConfig): prismic.Client {
  const client = prismic.createClient(endpoint, {
    accessToken: acessToken,
  });

  enableAutoPreviews({
    client,
    req: config.req,
  })

  return client;
}