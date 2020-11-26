import React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const ControlledDisplay = ({ data }) => {
  // console.log(data.allContentfulBlogPost.edges[0].node.content.raw, "data");
  return (
    <div className="post-item">
      {data.allContentfulBlogPost.edges.map((node, i) => {
        return (
          <div key={i}>
            <div className="post-item">
              <div className="title">{node.node.title}</div>
              <div className="pic">
                <img src={node.node.image.file.url} alt="postpic" />
              </div>
              <div className="content">
                {documentToPlainTextString(
                  JSON.parse(node.node.content.raw)
                ).slice(0, 100)}
              </div>
              <br />
              <div className="datestamp">{node.timestamp}</div>
            </div>

            {/* <Link to={`/post/${node.node.title}`}>View full post</Link>
             */}
          </div>
        );
      })}
      <button>Login to view full post</button>
    </div>
  );
};

export default ControlledDisplay;
