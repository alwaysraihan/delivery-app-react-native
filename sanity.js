import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
    projectId: "ci91cqby",
    dataset: "production",
    apiVersion: "2022-04-25",
    useCdn: true,
    token: process.env.TOKEN,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
// add sanity cors> go cd sanity> sanity cors add http://localhost:3001
