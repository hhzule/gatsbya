import React from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";
import Display from "../components/Display";
import { FirebaseContext } from "../service";
import { Link } from "gatsby";
import PrivateRoute from "../components/PrivateRoute";
import { navigate } from "gatsby";

const index = ({ data }) => {
  const { authToken } = React.useContext(FirebaseContext);

  return (
    <>
      <Layout>
        <div>
          hello
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
          <PrivateRoute data={data}>
            <div className="all-posts">
              {data.allContentfulBlogPost.edges.map((node, i) => {
                return (
                  <div key={i}>
                    <Display
                      title={node.node.title}
                      content={node.node.content.raw}
                      timestamp={node.node.timestamp}
                      pic={node.node.image.file.url}
                    />
                    <Link to={`/post/${node.node.title}`}>View full post</Link>
                  </div>
                );
              })}
            </div>
          </PrivateRoute>
        </div>
      </Layout>
    </>
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
