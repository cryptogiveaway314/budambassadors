import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "sd74xlzq",
  dataset: "production",
  apiVersion: "2024-09-26",
  useCdn: true,
});
