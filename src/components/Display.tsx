import React from "react";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const Display = ({ title, content, pic, timestamp }) => {
  console.log(documentToReactComponents(JSON.parse(content)), "con");
  return (
    <div>
      <div className="title">{title}</div>
      <div className="pic">
        <img src={pic} alt="postpic" />
        <h1>pic goes here</h1>
      </div>
      <div className="content">
        {documentToReactComponents(JSON.parse(content))}
      </div>

      {/* <div className="author">
          {author}
      </div> */}
      <div className="datestamp">{timestamp}</div>
    </div>
  );
};

export default Display;
