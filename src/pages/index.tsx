import { navigate } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Display from "../components/Display";

const index = ({ data }) => {
  return (
    <div>
      <Layout>
        hello
        <br />
        {data.allContentfulBlogPost.edges.map((node, i) => {
          return (
            <div key={i}>
              <Display
                title={node.node.title}
                content={node.node.content.raw}
                timestamp={node.node.timestamp}
                pic={node.node.image.file.url}
              />
            </div>
          );
        })}
      </Layout>
    </div>
  );
};

export default index;

export const query = graphql`
  query MyQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          timestamp
          image {
            file {
              url
            }
          }
          content {
            raw
          }
        }
      }
    }
  }
`;
