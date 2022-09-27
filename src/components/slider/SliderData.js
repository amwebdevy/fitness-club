import { graphql, useStaticQuery } from "gatsby";

export default function SliderData() {
  let quotes = [];

  const data = useStaticQuery(graphql`
    query QuoteImages {
      slideImages: allFile(
        filter: {
          extension: { regex: "/(jpg)|(jpeg)|(png)/" }
          relativeDirectory: { eq: "quote" }
        }
        sort: { fields: name }
      ) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `);

  const slideImages = data.slideImages.edges;

  /* create a quote for each image */
  slideImages.forEach((image) => {
    quotes.push({
      image: image.node.publicURL,
      body: '"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable"',
      name: "Example Name",
      location: "Somewhere, Some place",
    });
  });

  return quotes;
}
