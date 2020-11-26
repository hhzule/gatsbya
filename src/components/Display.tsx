import React from "react";
// import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";

const Display = ({ title, content, pic, timestamp }) => {
  // console.log(
  //   documentToPlainTextString(JSON.parse(content)).slice(0, 100),
  //   "con"
  // );
  return (
    <div className="post-item">
      <div className="title">{title}</div>
      <div className="pic">
        <img src={pic} alt="postpic" />
      </div>
      <div className="content">
        {documentToPlainTextString(JSON.parse(content))}
      </div>
      <br />
      <div className="datestamp">{timestamp}</div>
    </div>
  );
};

export default Display;
