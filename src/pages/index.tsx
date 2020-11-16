import { navigate } from "gatsby";
import React from "react";
import Header from "../components/Header";
import { graphql } from "gatsby";

const index = ({ data }) => {
  return (
    <div>
      <Header title="from index" />
      hello
      <button
        onClick={() => {
          navigate("/about");
        }}
      >
        go to about
      </button>
      <br />
      <span>{data.allContentfulBlogPost.edges[0].node.title}</span>
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
          content {
            raw
          }
        }
      }
    }
  }
`;
