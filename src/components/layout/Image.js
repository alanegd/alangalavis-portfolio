import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

export default function Image({ filename, alt, classes }) {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  const image = data.images.nodes.find((node) => node.relativePath.includes(filename));

  if (!image) {
    return null;
  }

  return <img src={image.childImageSharp.fluid.src} alt={alt} className={classes} />;
};
